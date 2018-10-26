var gulp = require('gulp');
var px2rem = require('gulp-px2rem');

gulp.task('default',function(){
	var px2remOptions = {
    	replace: true,
    	// rootValue:37.5
	};
	 
	var postCssOptions = {
	    map: true  
	};
	 
	gulp.src('test.css')
	.pipe(px2rem(px2remOptions, postCssOptions))
	.pipe(gulp.dest('./out'))
})