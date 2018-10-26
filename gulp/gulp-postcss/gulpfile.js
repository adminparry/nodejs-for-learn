var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var sourcemaps = require('gulp-sourcemaps');
var atImport = require("postcss-import");
var modules = require('postcss-modules');

var opacity = function (css, opts) {
	
    css.eachDecl(function(decl) {
        if (decl.prop === 'opacity') {
            decl.parent.insertAfter(decl, {
                prop: '-ms-filter',
                value: '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + (parseFloat(decl.value) * 100) + ')"'
            });
        }
    });
};

gulp.task('default', function () {
    var plugins = [
        autoprefixer({browsers: ['last 100 version']}),
        cssnano(),
        // opacity,
        atImport,
        modules
    ];
    return gulp.src('./src/*.css')
    	.pipe(sourcemaps.init())
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest'));
});