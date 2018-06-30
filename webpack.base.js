module.exports = {
  // Tell webpack to run babel on every file
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
