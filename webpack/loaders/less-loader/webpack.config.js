var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
 
const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry:'less/',
	output:{
		filename:'webpack.bundle.js'
	},
	module:{
		rules:[{
            test: /\.less$/,
            use: extractLess.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }],
        plugins: [
	        extractLess
	    ]
	},
	devServer:{
		inline:true,
		port:8080,
		contentBase:'build',
		proxy:{
			'**':'http://localhost:8080/html'
		}
	},
}