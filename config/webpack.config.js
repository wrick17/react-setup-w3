const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const workboxPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');

const devSpecifics = {
  entry: {
    app: [
      "react-hot-loader/patch",
      "./src/index.js",
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
  ],
  devtool: "source-map",
  devServer: {
    hot: true,
    contentBase: path.join("./dist/"),
    publicPath: "/",
    compress: true,
    historyApiFallback: true,
    port: 9000,
  }
};

const devConfig = merge(common, devSpecifics);

module.exports = devConfig;