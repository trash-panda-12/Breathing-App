
    // -[] Sass compiler -
    // [] AutoPrefix the CSS -
    // [] Find a watch and reload


    const gulp = require("gulp");
    const sass = require("gulp-sass");
    sass.compiler = require('sass');
    const autoprefixer = require("gulp-autoprefixer");
    const babel = require('gulp-babel')





    function scssCompile() {
        return gulp.src('src/styles.scss', {allowempty : true})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src'))
    };

    function autoprefix() {
        return gulp.src('src/styles.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('src'))
    }

    function babelConvert() {
        return gulp
          .src('./src/app.js')
          .pipe(babel())
          .pipe(gulp.dest("./src/distJS"));
    }
    


    function watchFiles() {
        console.log("\r\n Watching Scss files \r\n");
        gulp.watch('src/*.scss', gulp.series(scssCompile, autoprefix));
    }

exports.styles = gulp.series(scssCompile,autoprefix);
exports.watch = watchFiles;
exports.babel = babelConvert;
