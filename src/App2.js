import React, { useEffect, useState, Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";
const App2 = props => {
  const FEED_QUERY = gql`
    {
      analytic_dim_orders(limit: 10) {
        client_order_id
        created_at
        created_by
        custom_attribute_1
        data_source
        declined_flag
        express_ship_flag
        failed_order_flag
        fk_client_id
        pending_flag
        shippable_order_flag
        shipped_flag
        split_shipment_flag
        updated_at
        updated_by
        vendor_order_flag
      }
    }
  `;
  // state variable
  const { data, loading, error } = useQuery(FEED_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  //   let state = {
  //     // client: client,

  //   };

  console.log(data);
  // if (state.rowData.length !== 0) {
  //     return (
  //         <div
  //             className="ag-theme-balham"
  //             style={{
  //                 height: "500px"
  //                 // width: "600px"
  //             }}
  //         >
  //             <AgGridReact
  //                 columnDefs={state.columnDefs}
  //                 rowData={state.rowData}
  //                 modules={AllCommunityModules}
  //             />
  //         </div>
  //     );
  // }
  // state variable endsss
  console.log("dat---", data.analytic_dim_orders);
  let state = {
    gquery: FEED_QUERY,
    queryData: null,
    columnDefinition: {
      field: "athlete",

      // set the column to use text filter
      filter: "agTextColumnFilter",

      // pass in additional parameters to the text filter
      filterParams: {
        clearButton: true,
        applyButton: true,
        debounceMs: 200
      }
    },
    columnDefs: [
      {
        headerName: "ClientId",
        field: "client_order_id",
        filter: "agTextColumnFilter"
      },
      {
        headerName: "Created_At",
        field: "created_at",
        filter: "agTextColumnFilter"
      },
      {
        headerName: "Created_By",
        field: "created_by"
      },
      {
        headerName: "Custom_Attr",
        field: "custom_attribute_1"
      },
      {
        headerName: "Data_Source",
        field: "data_source"
      },
      {
        headerName: "Declined_flag",
        field: "declined_flag"
      },
      {
        headerName: "Express_Ship_Flag",
        field: "express_ship_flag"
      },
      {
        headerName: "Failed_Order_Id",
        field: "failed_order_id"
      },
      {
        headerName: "Fk_Client_Id",
        field: "fk_client_id"
      },
      {
        headerName: "Pending_Flag",
        field: "pending_flag"
      },
      {
        headerName: "Shippable_Order_Flag",
        field: "shippable_order_flag"
      },

      {
        headerName: "Shipped_Flag",
        field: "shipped-flag"
      },
      {
        headerName: "Split_Shipment_Flag",
        field: "split_shipment_flag"
      },
      {
        headerName: "Updated_at",
        field: "updated_at"
      },
      {
        headerName: "Updated_By",
        field: "updated_by"
      },
      {
        headerName: "Vendor_Order_Flag",
        field: "vendor_order_flag"
      }
    ],
    rowData: data.analytic_dim_orders
  };
  console.log("the row data---");
  console.log(state.rowData);
  return (
    <React.Fragment>
      {data.analytic_dim_orders.length > 0 ? (
        <div className="ag-theme-balham" style={{ height: "500px" }}>
          {/* {data.analytic_dim_orders} */}
          <AgGridReact
            columnDefs={state.columnDefs}
            rowData={state.rowData}
            modules={AllCommunityModules}
          />
        </div>
      ) : (
        ""
      )}
      {/* {data &&
        data.analytic_dim_orders &&
        console.log("fggghhg") && (
          <AgGridReact
            columnDefs={state.columnDefs}
            rowData={data.analytic_dim_orders}
            modules={AllCommunityModules}
          />
        )
        // data.analytic_dim_orders.map((order, index) => (
        //   //   <div>{order.data_source}</div>
        //   <div>
        //     <AgGridReact
        //       columnDefs={state.columnDefs}
        //       rowData={order}
        //       modules={AllCommunityModules}
        //     />
        //   </div>
        // )
      } */}
    </React.Fragment>
  );
};
export default App2;
