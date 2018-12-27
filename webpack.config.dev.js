/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './react/src/index.js'
  ],
  watch: true,
  mode: "development",
  output: {
    path: path.resolve("./django/assets/bundles/"),
    filename: "[name]-[hash].js",
    publicPath: 'http://localhost:3000/static/bundles/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
    chunkFilename: '[id].chunk.js'
  },
  devServer: {
    contentBase: './django/assets/bundles',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          plugins:['react-hot-loader/babel']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({ filename: './django/webpack-stats.json' })
  ]
};