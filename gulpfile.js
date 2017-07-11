var gulp = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var inject = require('gulp-inject');
var templateCache = require('gulp-angular-templatecache');
var bowerFiles = require('main-bower-files');


var src = 'app/**/*.js';
var dist = 'dist';

gulp.task('template', function() {
  return gulp.src('app/views/**/*.html')
    .pipe(templateCache({module: 'blog'}))
    .pipe(gulp.dest(dist));
});
gulp.task('concat', function() {
  return gulp.src('app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  return gulp.src(src)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('inject', function() {
  return gulp.src('app/index.html')
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower', relative: true}))
    .pipe(inject(gulp.src(['./dist/app.js', './dist/templates.js'], {read: false}), {relative: true}))
    .pipe(gulp.dest(dist));
});


gulp.task('build', ['lint', 'template', 'concat', 'inject']);

gulp.task('default', ['build']);
