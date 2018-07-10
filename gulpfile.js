var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync')

gulp.task('sass', function () {  
    gulp.src('src/scss/*.scss')
        .pipe(sass({includePaths: ['src/scss']}))
        .pipe(gulp.dest('src/css'));
});

gulp.task('copy', function () {
    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.js')
        .pipe(gulp.dest('./src/js/'));
    gulp.src('./node_modules/jquery/dist/jquery.js')
        .pipe(gulp.dest('./src/js/'));
    gulp.src('./node_modules/popper.js/dist/popper.js')
        .pipe(gulp.dest('./src/js/'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["src/css/*.css", "src/js/*.js"], {
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('default', ['copy', 'sass', 'browser-sync'], function () {  
    gulp.watch(["src/scss/*.scss", "src/*.html"],  ['sass']);
});