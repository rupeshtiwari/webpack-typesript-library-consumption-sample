const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');
const path = require('path');
const DIST = path.resolve(__dirname, 'dist');
module.exports = {
  mode: 'production',
  entry: {
    starter: path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    path: DIST,
    library: 'mylib',
    libraryTarget: 'commonjs',
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
  plugins: [
    new DeclarationBundlerPlugin({
      moduleName: 'mylib',
      out: DIST,
    }),
  ],
};
