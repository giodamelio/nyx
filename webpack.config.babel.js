import path from 'path';

import webpack from 'webpack';
import htmlPlugin from 'html-webpack-plugin';

export default {
    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js',
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            // Load js with babel
            { 
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
            },
            // Load json
            { 
                test: /\.json$/,
                loaders: ['json'],
            },
        ],
    },
    plugins: [
      new htmlPlugin({
        inject: 'head',
        title: 'Nyx',
      }),
    ],
    node: {
      fs: 'empty',
    },
};

