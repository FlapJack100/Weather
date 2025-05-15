const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/scripts/index.js',
  },
  output: {
    filename: 'scripts/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/Weather/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
      chunks: ['index'],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
  mode: 'development',
};