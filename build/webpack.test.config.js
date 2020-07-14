const webpack = require('webpack');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');


const webpackConfig = merge(webpackBaseConfig, {
    mode: 'none',
    devtool: 'eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"test"'
            }
        })
    ]
});
module.exports = webpackConfig;
