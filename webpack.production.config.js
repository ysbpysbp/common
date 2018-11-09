/**
 * Created by zhiyong on 9/29/17.
 */
const deConfig = require('./webpack.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    'react', 'react-dom',
];

let productionConfig = Object.assign({}, deConfig, {
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
        vendor: VENDOR_LIBS,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
        }),
        new HtmlWebpackPlugin({
            title: '志勇的app',
            template: 'src/template.ejs',
        }),
    ],
});

module.exports = productionConfig;
