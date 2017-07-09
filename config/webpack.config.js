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
    path: path.resolve('./dist/'),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Potato',
      template: './src/index.ejs',
      appMountId: 'root',
      favicon: './assets/images/favicon.png'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
  ],
  module: {
    rules: [
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
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    contentBase: path.join("./dist/"),
    publicPath: "/",
    compress: true,
    historyApiFallback: true,
    port: 9000
  }
};
