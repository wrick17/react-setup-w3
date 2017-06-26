const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack 3',
      appMountId: 'app',
      template: require('html-webpack-template'),
    }),
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devtool: "cheap-eval-source-map",
  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.join("./dist"),
    compress: true,
    port: 9000
  }
};
