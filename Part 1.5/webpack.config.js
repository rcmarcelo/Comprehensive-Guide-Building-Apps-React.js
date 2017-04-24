
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
    {
        test: /\.jsx$/,
        loader: 'babel'
        
    },
    {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
    },
	]
  },
  plugins: [HTMLWebpackPluginConfig]
};