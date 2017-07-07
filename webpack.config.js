const path = require('path');
const config = require('./tasks/config');
const webpack = require('webpack');

const webpackConfig = {
        entry: {
            main: './src/js/main.js'
        },
        externals: {
            "jquery": "jQuery"
        },
        output: {
            filename: '[name].min.js?[chunkhash:6]',
            path: path.resolve(__dirname, './js')
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                'window.jQuery': "jquery"
            })
        ],
        module: {
            loaders: [{
                test: /.js?$/,
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

