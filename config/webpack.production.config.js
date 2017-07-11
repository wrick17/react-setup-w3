const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: [
      './src/index.prod.js'
    ],
    vendor: [
      'classnames',
      'jsoneditor',
      'jss',
      'jss-global',
      'jss-preset-default',
      'react',
      'react-dom',
      'react-jss',
      'react-router',
      'react-rte',
      'superagent'
    ]
  },
  resolve: {
    alias: {
      images: path.resolve('./assets/images'),
      fonts: path.resolve('./assets/fonts'),
      constants: path.resolve('./assets/constants/constants.js'),
      containers: path.resolve('./src/containers'),
      components: path.resolve('./src/components')
    }
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
    publicPath: "/"
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve('./dist')], {
      root: path.resolve('./'),
      verbose: true
    }),
    new HtmlWebpackPlugin({
      title: 'Potato',
      template: './src/index.ejs',
      appMountId: 'root',
      favicon: './assets/images/favicon.png'
    }),
    new HtmlWebpackPlugin({
      title: 'Potato',
      template: './src/index.ejs',
      appMountId: 'root',
      filename: '200.html',
      favicon: './assets/images/favicon.png'
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
    new CompressionPlugin(),
    new CopyWebpackPlugin([{
      from: path.resolve('./assets/static'),
      to: path.resolve('./dist')
    }])
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=images/[name].[ext]'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: [
          'file-loader?name=assets/fonts/[name].[ext]'
        ]
      }
    ]
  },
  devtool: "cheap-module-source-map"
};
