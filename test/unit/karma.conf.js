const webpackConfig = require('../../build/webpack.test.config');

module.exports = function(config) {
  const configuration = {
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    plugins: [
        require('karma-webpack'),
        require('karma-sourcemap-loader'),
        require('karma-mocha'),
        require('karma-sinon-chai'),
        require('karma-spec-reporter'),
        require('karma-coverage'),
        require('karma-chrome-launcher')
    ],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    client: {
      mocha: {
        timeout: 4000
      }
    }
  };

  config.set(configuration);
};
