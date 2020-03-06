const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js"
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [path.resolve("./my-webpack-loader.js")]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist",
          name: "[name].[ext]?[hash]",
          limit: 2000 // 2kb
        }
      }
    ]
  }
};
