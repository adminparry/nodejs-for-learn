const path = require('path');
const _ = require('./library/lodash');


export default () => (
    {
        mode: 'production',
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'webpack-numbers[hash].js',
            libraryTarget: 'umd',
            globalObject: 'this',
            libraryExport: 'default',
            library: 'webpackNumbers'
        },
        externals: {
            'lodash': {
                commonjs: _,
                commonjs2: _,
                amd: _,
                root: '_'
            },
            

        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: 'babel-loader'
                }
            ]
        },
    }
);
