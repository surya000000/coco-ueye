const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = merge(webpackBaseConfig, {
    devtool: 'eval-source-map',
    entry: {
        main: resolve('dev-demo/app.js'),
        vendors: ['vue']
    },
    output: {
        path: resolve('dev-demo/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        alias: {
            cocoui: resolve('src/index.js'),
            vue: 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: resolve('dev-demo/dist/index.html'),
            template: resolve('dev-demo/index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
});
