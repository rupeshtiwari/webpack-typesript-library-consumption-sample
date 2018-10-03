const DeclarationBundlerPlugin = require('./declaration-bundler-webpack-plugin.fix');
const path = require('path');
const DIST = path.resolve(__dirname, 'dist');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
    new CleanWebpackPlugin(['./@types', './dist']),
    new DeclarationBundlerPlugin({
      moduleName: '"@mycomp/mylib"',
      out: '../@types/index.d.ts',
    }),
    new CopyWebpackPlugin([
      {
        from: './types/package.json',
        to: '../@types/package.json',
      },
      {
        from: './src/package.json',
        to: '../dist/package.json',
      },
    ]),
    //  new CopyWebpackPlugin([ {from: path.resolve(DIST,'@types'), to:'../@types'} ])
  ],
};
