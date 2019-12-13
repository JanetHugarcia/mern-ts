const path = require('path');

module.exports = {
  mode: 'development',//todo
  entry: './src/index.tsx',
  devtool: 'inline-source-map',//todo
  devServer: {//todo
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};