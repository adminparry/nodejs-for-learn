const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: [
			  'last 100 versions',
			 
			  ],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);