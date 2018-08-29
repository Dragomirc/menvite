import React from "react";
import Loadable from "react-loadable";
import { Link } from "react-router-dom";
// import asyncComponent from "../hoc/asyncComponent";

// const AsyncNotFoundPage = asyncComponent(() => {
//   return import("./NotFoundPage");
// });

const LoadableNotFoundPage = Loadable({
  loader: () => import(/* webpackChunkName: "NotFoundPage" */ "./NotFoundPage"),
  loading() {
    return <div>Loading...</div>;
  }
});

const Home = () => {
  return (
    <div>
      <h3>Welcome!!!!</h3>
      <Link to="/dev">Test</Link>
      <p>Change your app here</p>
      <LoadableNotFoundPage />
    </div>
  );
};

export default Home;
