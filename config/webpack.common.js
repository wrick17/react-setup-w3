const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const workboxPlugin = require('workbox-webpack-plugin');

const htmlConfig = {
  title: "Potato",
  template: "./src/index.ejs",
  appMountId: "root",
  favicon: "./assets/images/favicon.png"
};

module.exports = {
  resolve: {
    alias: {
      images: path.resolve("./assets/images"),
      fonts: path.resolve("./assets/fonts"),
      constants: path.resolve("./assets/constants/constants.js"),
      containers: path.resolve("./src/containers"),
      components: path.resolve("./src/components"),
      common: path.resolve("./src/common"),
      reducers: path.resolve("./src/reducers"),
      sagas: path.resolve("./src/sagas"),
    },
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve("./dist/"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin(htmlConfig),
    new HtmlWebpackPlugin(Object.assign({}, htmlConfig, { filename: '200.html' })),
    new workboxPlugin({
      globDirectory: path.resolve('dist'),
      globPatterns: ['**/*.{html,js,png,svg,jpg,jpeg,ttf,otf,woff,woff2}'],
      swDest: path.join(path.resolve('dist'), 'sw.js')
    })
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        use: [
          "babel-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader?name=images/[name].[ext]",
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: [
          "file-loader?name=assets/fonts/[name].[ext]",
        ],
      },
    ],
  }
};
