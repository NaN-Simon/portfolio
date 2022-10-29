const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
module.exports = {
  // context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./src/index.ts"
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.ts','.js']
    // alias: {
    //   "@npms": path.resolve(__dirname, "_help"),
    //   "@": path.resolve(__dirname, "src"),
    // },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ["ts"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|txt)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        // include: path.resolve(__dirname, "src"),
        use: ["ts-loader"],
      },
    ],
  },
};
