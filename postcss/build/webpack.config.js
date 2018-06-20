var path = require('path');
var rootPath = p => path.resolve(__dirname, '../', p);

var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSS = new ExtractTextPlugin({
    filename: "stylesheets/[name].css",

});

const html = new HtmlWebpackPlugin({
    template: rootPath('src/index.html')
})
module.exports = {
    mode: 'development',
    watch: true,
    entry: rootPath('src/main.js'),
    output: {
        filename: 'bundle.js',
        path: rootPath('dist')
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|sass|sss|stylus|less)$/,
                use: extractCSS.extract([
                    'css-loader', 'postcss-loader'
                ])
            }
        ]
    },
    plugins: [
        extractCSS,
        html
    ]
}