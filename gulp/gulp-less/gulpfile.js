var gulp = require('gulp');

var less = require('gulp-less');

var path = require('path');


var PATH = {
	less:path.resolve(__dirname,'input/**/*.less'),
	outless:path.resolve(__dirname,'output'),
	input:path.resolve(__dirname,'input/**/*.*')
}

gulp.task('less',function(){

	gulp.src(PATH.less)
	.pipe(less())
	.pipe(gulp.dest(PATH.outless))
})

gulp.task('default',function(){
	gulp.watch(PATH.input, ['less']);
})

