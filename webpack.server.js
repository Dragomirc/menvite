const path = require("path");

module.exports = {
  //Inform webpack that we are building a bundle for nodeJS,
  //rather than for the browser
  target: "node",
  entry: "./server/index.js",
  // Tell webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  // Tell webpack tu run babel on every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["react", "env", "stage-2"]
        }
      }
    ]
  }
};
