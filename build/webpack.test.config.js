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
});
