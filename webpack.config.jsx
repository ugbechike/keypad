const path = require('path');

module.exports = {
    entry: "./src/index.jsx",

    output: {
        filename: "js/index.jsx",
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        inline: true,
        contentBase: './dist',
        port: 7070,
        historyApiFallback: true
    },
    module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
            loader: 'babel-loader',
            options: {
            presets: ['babel-preset-env', 'react']
            }
         }   
        }
    ]
    },

};