const path = require('path');
const { merge } = require('webpack-merge');
const defaultConfig = require('../build/webpack.base.config');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}
module.exports = {
    stories: ['../storybook/*.stories.js'],
    webpackFinal: (config, { configType }) => {
        config.module.rules.push({
            test: /\.scss|css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        });
        return Object.assign(config, {
            resolve: defaultConfig.resolve,
        })

    }
};
