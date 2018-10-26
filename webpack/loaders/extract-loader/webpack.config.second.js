var path = require('path');

const indexHtml = path.join(__dirname, "src", "html.html");

module.exports = {
    // mode: 'development',
    // devtool: 'cheap-module-eval-source-map',
    context: path.resolve(__dirname),
    entry: [
        indexHtml
    ],
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: '[name].[ext]'
    },
    module: {
        rules: [{
                test: indexHtml,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "[name]-dist.[ext]",
                        },
                    },
                    {
                        loader: "extract-loader",
                    },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src", "link:href"],
                            interpolate: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                loaders: [{
                        loader: "file-loader",
                    },
                    {
                        loader: "extract-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.(jpg|png)$/,
                loaders: [{
                    loader: "file-loader"
                }, ],
            },
        ]

    },
}