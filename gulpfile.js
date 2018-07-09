var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync')

gulp.task('sass', function () {  
    gulp.src('src/scss/*.scss')
        .pipe(sass({includePaths: ['src/scss']}))
        .pipe(gulp.dest('src/css'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["src/css/*.css", "src/js/*.js"], {
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch(["src/scss/*.scss", "src/*.html"],  ['sass']);
});