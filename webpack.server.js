const path = require("path");
const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");
const shellPlugin = require("webpack-shell-plugin");

module.exports = {
  mode: "development",
  // Inform webpack we're building a bundle for NodeJS, rather than for the broweser, thus webpack can ignore Node built in libraries
  target: "node",
  entry: "./src/server/server.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
    publicPath: "/"
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
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new shellPlugin({
      onBuildEnd: ['"nodemon --watch build --exec node build/server.js']
    })
  ]
};
