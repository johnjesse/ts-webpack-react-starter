const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('>>> running webpack dev config');

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'tslib',
    ],
    main: './src/index.tsx'
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: path.join(__dirname, 'node_modules'),
      options: {
        configFile: "tsconfig.json",
      },
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      chunks: ['vendor', 'main'],
      path: path.join(__dirname, "./dist/"),
      filename: 'index.html' 
  })],
  watch: true
}