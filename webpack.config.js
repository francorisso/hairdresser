var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Path = require('path');
var Webpack = require('webpack');

var bundleFilename = 'bundle.js';
var bundleDirname = Path.resolve(__dirname, "build");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: bundleDirname,
    publicPath: "/build/",
    filename: bundleFilename
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.scss$/,
        include: [
          Path.resolve(__dirname, 'src'),
        ],
        loader: ExtractTextPlugin.extract([
          'css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'sass-loader',
        ])
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(`${bundleDirname}/${bundleFilename}`, {allChunks: true}),
    new Webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
