var gulp = require('gulp');

var http = require('http');
// var gulpStreamify = require('gulp-streamify');
var buffer = require('gulp-buffer');
var fileinclude = require('gulp-file-include')
var shtml = require('gulp-shtml');

var fs = require('fs');


http.createServer((req,res)=>{
	if(req.url == "/favicon.ico")return;


	res.writeHead(200);

	var fileName = req.url.substr(1);

	if(fs.existsSync(fileName)){

		// gulp.src(fileName).on('data', function(file) {

		//     res.end(file.contents)
		// });
		gulp.src([fileName])
	    .pipe(shtml({
	    	wwwroot: './'
	    }))
	    .on('data', function(file) {

		    res.end(file.contents)
		});

		
	}else{
		res.end('404')
	}



	

}).listen(8089)