import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    // const client = new ApolloClient({
    //   uri: "https://hasura-a-2.herokuapp.com/v1/graphql"
    // });
    //   const FEED_QUERY = gql`
    //   analytic_dim_orders {
    //   client_order_id
    //   created_at
    //   created_by
    //   custom_attribute_1
    //   data_source
    //   declined_flag
    //   express_ship_flag
    //   failed_order_flag
    //   fk_client_id
    //   pending_flag
    //   shippable_order_flag
    //   shipped_flag
    //   split_shipment_flag
    //   updated_at
    //   updated_by
    //   vendor_order_flag
    // }
    //   `;
    this.state = {
      // client: client,
      // gquery: FEED_QUERY,
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
          field: "created_at"
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
      rowData: [
        {
          client_order_id: "2025383",
          created_at: "2019-09-25T18:18:39.123",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025381",
          created_at: "2019-09-25T18:18:39.123",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025380",
          created_at: "2019-09-25T18:18:39.123",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025379",
          created_at: "2019-09-25T18:18:39.123",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "True",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025378",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025377",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025376",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025375",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "True",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025374",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025373",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025372",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025371",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025370",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025369",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025368",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025367",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "True",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025365",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "True",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025363",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025361",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "True",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025360",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025359",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025358",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025357",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "True",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025356",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "False",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.393",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        },
        {
          client_order_id: "2025355",
          created_at: "2019-09-25T18:18:39.122",
          created_by: "load_dim_orders",
          custom_attribute_1: "",
          data_source: "orders_2019-06-30.csv",
          declined_flag: "False",
          express_ship_flag: "True",
          failed_order_flag: "False",
          fk_client_id: 1,
          pending_flag: "False",
          shippable_order_flag: "True",
          shipped_flag: "True",
          split_shipment_flag: "False",
          updated_at: "2019-11-05T01:28:34.409",
          updated_by: "load_dim_orders",
          vendor_order_flag: "False"
        }
      ]
    };

    this.getData = this.getData.bind(this);
    this.getData();
  }

  async getData() {
    // try {
    //   const { loading, error, data } = await useQuery(this.state.gquery);
    //   console.log("data fetched from api as  -- - - - - ");
    //   console.log(data);
    // } catch (error) {}
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "500px"
          // width: "600px"
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          modules={AllCommunityModules}
        />
      </div>
    );

    //   <
    //   ApolloProvider client = {
    //     this.state.client
    //   } >
    //   <
    //   div className = "app" >
    //   <
    //   div className = "ag-theme-balham"
    //   style = {
    //     {
    //       height: "500px"
    //     }
    //   } >
    //   <
    //   AgGridReact columnDefs = {
    //     this.state.columnDefs
    //   }
    //   rowData = {
    //     this.state.rowData
    //   }
    //   modules = {
    //     AllCommunityModules
    //   }
    //   /> <
    //   /div> <
    //   /div> <
    //   /ApolloProvider>
    // );
  }
}
