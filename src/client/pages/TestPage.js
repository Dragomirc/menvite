import React from "react";

const TestPage = ({ staticContext = {} }) => {
  staticContext.Test = true;
  return <h1>TEST!</h1>;
};

export default TestPage;
