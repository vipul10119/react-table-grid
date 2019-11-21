import React, { Component } from "react";

import { AgGridReact } from "@ag-grid-community/react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

export default class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: AllCommunityModules,
      columnDefs: [
        {
          headerName: "Athlete",
          field: "athlete",
          width: 150
        },
        {
          headerName: "Age",
          field: "age",
          width: 90,
          filter: "agNumberColumnFilter"
        },
        {
          headerName: "Country",
          field: "country",
          width: 120
        },
        {
          headerName: "Year",
          field: "year",
          width: 90
        },
        {
          headerName: "Date",
          field: "date",
          width: 145,
          filter: "agDateColumnFilter",
          filterParams: {
            comparator: function(filterLocalDateAtMidnight, cellValue) {
              var dateAsString = cellValue;
              if (dateAsString == null) return -1;
              var dateParts = dateAsString.split("/");
              var cellDate = new Date(
                Number(dateParts[2]),
                Number(dateParts[1]) - 1,
                Number(dateParts[0])
              );
              if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
                return 0;
              }
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              }
              if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              }
            },
            browserDatePicker: true
          }
        },
        {
          headerName: "Sport",
          field: "sport",
          width: 110
        },
        {
          headerName: "Gold",
          field: "gold",
          width: 100,
          filter: "agNumberColumnFilter"
        },
        {
          headerName: "Silver",
          field: "silver",
          width: 100,
          filter: "agNumberColumnFilter"
        },
        {
          headerName: "Bronze",
          field: "bronze",
          width: 100,
          filter: "agNumberColumnFilter"
        },
        {
          headerName: "Total",
          field: "total",
          width: 100,
          filter: false
        }
      ],
      defaultColDef: {
        filter: true
      },
      rowData: null
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = data => {
      this.setState({
        rowData: data
      });
    };

    httpRequest.open(
      "GET",
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json"
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <div
          id="myGrid"
          style={{
            height: "100%",
            width: "100%"
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            modules={this.state.modules}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowData={this.state.rowData}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
    );
  }
}
