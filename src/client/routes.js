import React from "react";
import Home from "./pages/HomePage";
import Loadable from "react-loadable";
const LoadableTestPage = Loadable({
  loader: () => import(/* webpackChunkName: "TestPage" */ "./pages/TestPage"),
  loading() {
    return <div>Loading...</div>;
  }
});
export default [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/dev",
    component: LoadableTestPage
  }
];
