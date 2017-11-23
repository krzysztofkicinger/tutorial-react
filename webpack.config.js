const path = require('path');

module.exports = {

    entry: [
        './src/main/app.jsx'
    ],

    resolve: {
        extensions: [ '.js', '.jsx' ]
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    devServer: {
        historyApiFallback: true,
        contentBase: './public'
    }

};