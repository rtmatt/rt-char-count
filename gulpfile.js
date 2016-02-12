var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', ['scripts','sass'], function () {


});


var paths = {
    scripts: ['src/js/*.js']
};

gulp.task('scripts',function(){
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(concat('rt-char-count.min.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
    gulp.src(['src/scss/rt-char-count.scss']) //only pull in your main.less file
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist'));
});