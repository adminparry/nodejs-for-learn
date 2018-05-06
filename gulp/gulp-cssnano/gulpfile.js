var gulp = require('gulp');

var cssnano = require('gulp-cssnano');



gulp.task('default', function() {
    return gulp.src('./styles/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./out'));
});