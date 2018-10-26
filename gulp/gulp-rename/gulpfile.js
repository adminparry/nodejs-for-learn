var rename = require('gulp-rename');
var gulp = require('gulp');

gulp.task('string',()=>{
	gulp.src("./src/main/text/hello.txt")
	  .pipe(rename("main/text/ciao/goodbye.md"))
	  .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/goodbye.md
})


gulp.task('function',()=>{
	gulp.src("./src/**/hello.txt")
  .pipe(rename(function (path) {
    path.dirname += "/ciao";
    path.basename += "-goodbye";
    path.extname = ".md";
  }))
  .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/hello-goodbye.md
})


gulp.task('hash',()=>{
	gulp.src("./src/main/text/hello.txt", { base: process.cwd() })
	  .pipe(rename({
	    dirname: "main/text/ciao",
	    basename: "aloha",
	    prefix: "bonjour-",
	    suffix: "-hola",
	    extname: ".md"
	  }))
	  .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/bonjour-aloha-hola.md
})