let gulp = require('gulp');
let greplace = require('gulp-replace');
let sreplace = require('gulp-string-replace');

gulp.task('fixpaths', function(done){
  return gulp.src(['./dist/css/*.css'])
      .pipe(greplace('../img/', 'aaa'))
      .pipe(gulp.dest('dist/aws/css/'))
});