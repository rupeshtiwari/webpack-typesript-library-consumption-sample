const path = require('path');
module.exports = {
  mode: 'production',
  entry: {
    starter: path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'mylib',
    libraryTarget: 'umd',
    filename: 'mylib.js',
  },
  resolve: { extensions: ['.ts'] },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
      },
    ],
  },
  devtool: 'source-map',
};
