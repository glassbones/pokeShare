const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'), //public
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg)$/, loader: 'url-loader'}
    ],
  },
  mode: 'development',
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve('./index.html')
    })
  ],
  devServer: {
    contentBase: "./build",
    port: 5000,
    historyApiFallback: {
      disableDotRule: true
    }
  }
};
