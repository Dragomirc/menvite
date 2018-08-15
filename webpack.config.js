const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const shellPlugin = require("webpack-shell-plugin");
// const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

var baseConfig = {
  mode: "development",
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
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};

var browserConfig = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].[hash].js",
    publicPath: "/"
  }
  // mode: "development",

  // devServer: {
  //   port: 8080,
  //   open: true,
  //   proxy: {
  //     "*": "http://localhost:3000"
  //   }
  // }
};

var serverConfig = {
  entry: "./src/server/server.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },

  plugins: [new shellPlugin({ onBuildEnd: ["nodemon ./build/bundle.js"] })]
};

module.exports = [
  merge(baseConfig, browserConfig),
  merge(baseConfig, serverConfig)
];
