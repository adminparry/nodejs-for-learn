var gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    uglify = require('gulp-uglify'),
	spriter = require('gulp-css-spriter');

gulp.task('images_concat', function(){

	var time = +new Date();

	return gulp.src('./style/*.css')
			.pipe(spriter({
				'spriteSheet':'./dist/imagesmin/spriter'+time+'.png',
				'pathToSpriteSheetFormCSS':'../images_concat/spriter'+time+'.png'
			}))
			.pipe(gulp.dest('./dist'))
			.pipe(minifyCSS())
			.pipe(gulp.dest('./dist/style'))
});

gulp.task('uglify', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('imagemin', function () {
    gulp.src('./images/*.+(jpeg|jpg|png)')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/imagesmin/'));
});