const { resolve } = require('path');

module.exports = {
  eslint: null,
  webpack: {
    alias: {
			"@assets": resolve(__dirname, 'src', 'assets'),
			"@components": resolve(__dirname, 'src', 'components'),
			"@layouts": resolve(__dirname, 'src', 'layouts'),
			"@routes": resolve(__dirname, 'src', 'routes'),
			"@typings": resolve(__dirname, 'src', 'typings'),
			"@variables": resolve(__dirname, 'src', 'variables'),
			"@views": resolve(__dirname, 'src', 'views'),
    },
  },
};