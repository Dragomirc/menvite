import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm in the VERY VERY BEST home component</div>
      <button onClick={() => console.log("Hi There")}>Click Me</button>
    </div>
  );
};

export default { component: Home };
