import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";

import * as serviceWorker from "./serviceWorker";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://hasura-a-2.herokuapp.com/v1/graphql"
});

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    {" "}
    <App2 />{" "}
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
