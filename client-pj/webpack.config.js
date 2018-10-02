const webpack = require('webpack');
const path = require('path');
const ROOT = __dirname;
const DESTINATION = path.join(ROOT, '/dist');
/** wepback resolve */
const RESOLVE = {
  extensions: ['.tsx', '.ts', '.js', '.html'],
};

/** webpack plugins */
const PLUGINS = [];
const MODULE = {
  rules: [
    // Scripts
    {
      test: /\.ts$/,
      exclude: [/node_modules/],
      loader: 'ts-loader',
      include: [ROOT],
    },
  ],
};
const OUTPUT = {
  filename: 'index.js',
  libraryTarget: 'umd',
  library: 'myclient',
  path: DESTINATION,
};

module.exports = {
  node: {
    fs: 'empty'
  },
  entry: {
    app: ROOT + '/src/index.ts',
  },
  context: ROOT,
  resolve: RESOLVE,
  mode: 'development',
  module: MODULE,
  plugins: PLUGINS,
  devtool: 'source-map',
  devServer: {},
  output: OUTPUT,
};
