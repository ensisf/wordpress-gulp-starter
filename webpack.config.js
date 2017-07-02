const path = require('path');
const config = require('./tasks/config');
const webpack = require('webpack');

const webpackConfig = {
        entry: './src/js/main.js',
        output: {
            filename: 'main.min.js',
            path: path.resolve(__dirname, './js')
        },
        plugins: [],
        module: {
            loaders: [{
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }]
        }
    }

if (!config.isDev) {
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        )
}

module.exports = webpackConfig;

