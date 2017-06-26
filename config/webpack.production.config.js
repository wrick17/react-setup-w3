const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/index.js'
    ],
    vendor: [
      'preact',
      'preact-compat',
      'react-jss',
      'classnames'
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
    new webpack.optimize.CommonsChunkPlugin("vendor"),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  "resolve": {
    "alias": {
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  devtool: "cheap-module-source-map"
};
