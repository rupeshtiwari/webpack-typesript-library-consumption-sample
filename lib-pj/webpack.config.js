const DeclarationBundlerPlugin = require('./declaration-bundler-webpack-plugin.fix');
const path = require('path');
const DIST = path.resolve(__dirname, 'dist');
module.exports = {
  mode: 'development',
  entry: {
    starter: path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    path: DIST,
    libraryTarget: 'commonjs',
    filename: 'index.js',
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
      moduleName: '"mylib"',
      out: './index.d.ts',
    }),
  ],
};
