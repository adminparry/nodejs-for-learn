### 自定义gulp插件
将html中的style提出外联方式

``` javascript
var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');
 var htmlInline = require('gulp-html-inline');

var cssCombo = require('gulp-css-combo');

var fs          = require('fs'),
    path        = require('path'),
    through2    = require('through2'),

    crypto      = require('crypto'),
    url         = require('url');
var gutil = require('gulp-util');
var file = require('gulp-file');


var linkRegx    = new RegExp('<link\\s+[\\s\\S]*?>[\\s\\S]*?<*\\/*>*', 'gi'),
    hrefRegx    = new RegExp('\\s*(href)="+([\\s\\S]*?)"'),
    styleRegx   = new RegExp('<style\\s*[\\s\\S]*?>([\\s\\S]*?)<\\/style>', 'gi'),
    jsRegx      = new RegExp('<script\\s+[\\s\\S]*?>[\\s\\S]*?<\\/script>', 'gi'),
    scriptRegx  = new RegExp('<script\\s*(^|src)*?>[\\s\\S]*?<\\/script>', 'gi'),
    srcRegx     = new RegExp('\\s*(src)="+([\\s\\S]*?)"');
var headRegx = new RegExp('<head\\s*[\\s\\S]*?>([\\s\\S]*?)<\\/head>','gi');


   function getContent(file, options){
   		 var fileContents = file.contents.toString('utf8');
   		 // console.log(fileContents);
   		 
   		 var con = '';
   		 
   		 var content = fileContents
        .replace(styleRegx, function(item){

            //like:
            // <style ignore>
            //  #app{
            //      width: 80%;
            //      padding: 10px;
            //  }
            // </style>
           
           con += item.replace(styleRegx,'$1');
            return `<!-- ${options.name}.css -->`;

        }).replace(headRegx,function(item){

        	return item.replace('</head>',`\t<link rel="stylesheet" href="../style/test.css" />\r\n</head>`)
        })
		outputCss(options,con);
        return content;
   } 

   function outputCss(options,str){
   			
            fs.writeFileSync(`style/${options.name}.css`, str, function (err) {
            	console.log(RegExp.$1)
			  
			});
           
			
   }
function styleTag(options){
	options = options || {};
    return through2.obj(function(file, enc, next){
    	// console.log(Object.keys(file),enc,this)
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Stream content is not supported'));
            return next(null, file);
        }
        if (file.isBuffer()) {
            try {
                var content = getContent(file, options);
                //console.log(content);
                file.contents = new Buffer(content);
            }
            catch (err) {
                this.emit('error', new PluginError(PLUGIN_NAME, ''));
            }
        }
        this.push(file);
        return next();


    });
}
gulp.task('default', function() {
  gulp.src('test.html')
        .pipe(styleTag({
        	name:'test'
        }))
    .pipe(gulp.dest('build/'));
});
```