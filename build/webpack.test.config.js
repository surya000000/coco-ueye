const path = require('path');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: resolve('dev-demo/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
      alias: {
          cocoui: resolve('src/index.js'),
          vue: 'vue/dist/vue.esm.js',
          'ui-helpers': resolve('src/util/index.js'),
          'test-helpers': resolve('test/util/index.js'),
      }
  },
});
