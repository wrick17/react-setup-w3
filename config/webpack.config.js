const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack 3',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file-loader" }
    ]
  },
  devtool: "eval",
  devServer: {
    hot: true,
    contentBase: path.join("./dist"),
    compress: true,
    historyApiFallback: true,
    port: 9000
  }
};
