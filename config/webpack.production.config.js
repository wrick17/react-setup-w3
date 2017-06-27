const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: {
    app: [
      './src/index.prod.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-jss',
      'classnames',
      'react-router'
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist')
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve('./dist')], {
      root: path.resolve('./'),
      exclude: ['CNAME'],
      verbose: true
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack 3',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack 3',
      filename: '200.html'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJSPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks
    new CompressionPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file-loader" }
    ]
  },
  devtool: "cheap-module-source-map"
};
