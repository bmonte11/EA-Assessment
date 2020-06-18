const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.join(__dirname),
  entry: ['./Client/index'],
  output: {
    path: __dirname,
    filename: './Public/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
