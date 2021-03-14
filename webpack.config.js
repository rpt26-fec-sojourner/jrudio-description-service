const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.PRODUCTION ? 'production' : 'developement',
  entry: {
    index: path.resolve(__dirname, 'client', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'client', 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'client', 'dist'),
    compress: true,
    port: 9090,
    watchOptions: {
      aggregateTimeout: 400,
      poll: true,
      ignored: /node_modules/
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'client', 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
};