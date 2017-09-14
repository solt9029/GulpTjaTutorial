var gulp = require('gulp');
var tja = require('gulp-tja');

gulp.task('default',function(){
  return gulp.src(['src/index.tja'])
    .pipe(tja())
    .pipe(gulp.dest('dist'));
});