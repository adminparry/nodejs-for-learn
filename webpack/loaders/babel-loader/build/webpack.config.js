var path = require('path');

var p = p => path.resolve(__dirname,'../',p);

module.exports = {
	entry:p('src/main.js'),
	output:{
		filename:'[name].[hash].js',
		hashDigestLength:8,
		path:p('dist')
	},
	mode:'production',
	watch:true,
	module:{
		rules:[
			{
				test:/\.js$/,
				use:[
					{
						loader:'babel-loader',
						options:{
							
						}
					}
				]
			}
		]
	}
}