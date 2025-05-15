const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/Weather/', 
        clean: true,
    },
    devServer: { 
        static: './dist',
        port: 3000,
        open: true,
        historyApiFallback: true, 
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            title: 'Погода',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], 
            }
        ]
    }
};