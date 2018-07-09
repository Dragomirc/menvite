import React from "react";
import App from "./App";

export default [
  {
    ...App,
    routes: [
      // Add your routes here
      {
        ...NotFoundPage
      }
    ]
  }
];
