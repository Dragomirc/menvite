const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
module.exports = {
  mode: "development",
  // Inform webpack we're building a bundle for NodeJS, rather than for the broweser, thus webpack can ignore Node built in libraries
  target: "node",
  entry: "./src/server/server.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    publicPath: "/",
    chunkFilename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  // creates and externals function that ingores node_modules from bundling
  externals: [webpackNodeExternals()],
  plugins: [
    new ReactLoadablePlugin({
      filename: "./build/react-loadable.json"
    })
  ]
};
