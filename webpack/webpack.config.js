

module.exports = {
	entry:{
		app:'./html.tpl'
	},
	output:{
		path:__dirname + 'buidl'
	},
	module:{
		rules:[
			{
				test:/\.css/,
				
			}
		]
	}

}