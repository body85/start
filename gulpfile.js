const gulp =        require('gulp');

const less =        require('gulp-less');
const browserSync = require('browser-sync').create();

gulp.task('less', function(){
   gulp.src('less/*.less')
   .pipe(less())
   .pipe(gulp.dest('css'))
   .pipe(browserSync.stream())
});

// Static Server + watching scss/html files
gulp.task('server', ['less'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./less/*.less", ['less']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['server']); 