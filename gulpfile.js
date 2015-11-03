var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber')


gulp.task('default',['html','sass','image']);

gulp.task('html',function(){
      gulp.src('Development/*.html')
      .pipe(plumber())
      .pipe(gulp.dest('Production'));


});

gulp.task('sass',function(){
      gulp.src('Development/assets/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('Production/assets/'));

});
gulp.task('image',function(){
      gulp.src('Development/image/*.jpg')
      .pipe(gulp.dest('Production/image/'));

});

gulp.task('watch',function(){
    gulp.watch('Development/**.{html,scss,jpg}',['default']);
});
