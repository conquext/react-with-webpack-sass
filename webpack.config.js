const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  const isProduction = env === "production";
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html"
      })
    ],
    devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    }
  };
};
