const path = require('path');

module.exports = {

    entry: [
        './src/main/app.jsx'
    ],

    resolve: {
        extensions: ['.js', '.jsx']
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-1']
                    }
                }
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        contentBase: './public'
    }

};