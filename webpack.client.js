const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ReactLoadablePlugin } = require("react-loadable/webpack");

module.exports = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
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
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new ReactLoadablePlugin({
      filename: "./build/react-loadable.json"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};
