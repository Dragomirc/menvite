import React from "react";
import Home from "./pages/HomePage";
import Loadable from "react-loadable";
// import asyncComponent from "./hoc/asyncComponent";

// const AsyncTestPage = asyncComponent(() => {
//   return import("./pages/TestPage");
// });

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
