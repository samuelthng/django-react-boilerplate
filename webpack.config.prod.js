/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: "./react/src/index.js",
  watch: false,
  mode: "production",
  output: {
    path: path.resolve("./django/assets/bundles/"),
    filename: "[name]-[hash].js",
    publicPath: "/static/bundles/",
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new BundleTracker({ filename: './django/webpack-stats.json' })
  ]
};