var gulp = require('gulp');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var usemin = require('gulp-usemin');
var minifyHtml = require('gulp-minify-html');
var rev = require('gulp-rev');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('clean', function() {
  var stream = gulp.src('dist/*', { read: false }).pipe(clean());
  return stream;
});

gulp.task('copy-html-files', function() {
  var stream = gulp
    .src('./views/**/*.html')
    .pipe(minifyHtml({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/views/'));
  return stream;
});

gulp.task('usemin', function() {
  return gulp
    .src('./index.html')
    .pipe(
      usemin({
        html: [minifyHtml({ empty: true, conditionals: true })],
        css: ['concat', rev()],
        js: [ngAnnotate(), uglify(), 'concat', rev()]
      })
    )
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['clean'], function(callback) {
  runSequence('usemin', 'copy-html-files', callback);
});
