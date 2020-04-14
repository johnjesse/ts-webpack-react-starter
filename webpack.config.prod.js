const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('>>> running webpack prod config');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'tslib'],
    main: path.join(__dirname, 'src', 'index.tsx'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: path.join(__dirname, 'node_modules'),
        options: {
          configFile: 'tsconfig.json',
        },
      },
      {
        test: /\.(png)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
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
      path: path.join(__dirname, 'dist'),
      filename: 'index.html',
    }),
  ],
};
