const webpack = require('webpack');
const path = require('path');

const config = {
    context: __dirname + '/src/app',
    entry: './app.ts',
    output: {
        path: __dirname + '/src/app',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.ts', '.js']
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        }),
    ],
    module: {
        loaders: [
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
            {test: /\.ts$/, loader: 'ts', exclude: /node_modules/},
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
            {test: /\.scss$/, loader: 'style!css!sass'},
            {test: /\.(png|jpg)$/, loader: 'url?limit=15000'}
        ]
    }
};

if (process.env.NODE_ENV === 'production') {
    config.output.path = __dirname + '/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.devtool = 'source-map';
}

module.exports = config;