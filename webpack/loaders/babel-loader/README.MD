[![babel](http://d33wubrfki0l68.cloudfront.net/f35d49d959deb5bfd7deb80c2668128367e2917c/eb35e/images/logo.svg "babel")](http://babeljs.io/)

## start
babel-loader is lib for babel-core alias

```bash
npm init -y
npm install webpack webpack-cli babel-loader babel-core
```
### mkdir
```bash
mkdir src build
```

### touch
```bash
cd src
touch main.js
cd ..
cd build
touch webpack.config.js
vi webpack.config.js
```
### webpack.config.js

```javascript
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
						option:{
							
						}
					}
				]
			}
		]
	}
}
```

### options

you can add options in option
you can also add .babelrc jsonfile to package.json filepath horization
and you must npm install xxx for map

[.babelrc](https://www.babeljs.cn/docs/usage/babelrc/)
#### option
```javascript
{
	test:/\.js$/,
	use:[
		{
			loader:'babel-loader',
			option:{
				presets:['env','react']
			}
		}
	]
}
```
#### .babelrc
```javascript
{
  "plugins": ["transform-react-jsx"],
  "ignore": [
    "foo.js",
    "bar/**/*.js"
  ]
}
```


