var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('default', function () {
    return gulp.src('main.css')
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./out'));
});