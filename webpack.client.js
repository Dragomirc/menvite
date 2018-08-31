const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
const ManifestPlugin = require("webpack-manifest-plugin");
const shellPlugin = require("webpack-shell-plugin");

module.exports = {
  mode: "development",
  target: "web",
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].[hash].js",
    publicPath: "/",
    chunkFilename: "[name].[hash].js"
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
    new CleanWebpackPlugin(["public"]),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    new ReactLoadablePlugin({
      filename: "./public/react-loadable.json"
    }),
    new ManifestPlugin(),
    new shellPlugin({
      onBuildEnd: ["webpack --config webpack.server.js --watch"]
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
