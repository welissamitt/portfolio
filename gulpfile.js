/**
imports
*/

var fs     = require('fs');
var gulp   = require('gulp');
var jade   = require('gulp-jade');
var stylus = require('gulp-stylus');
var prefix = require('gulp-autoprefixer');
var config = require('npm-config');
var ENV = process.env.NODE_ENV || 'development';


/**
gulp tasks list
*/

gulp.task('content', function(){
  var locals = {};
  locals.googleAnalyticsKey = config(ENV, 'googleAnalyticsKey');

  gulp.src('source/content/*.jade')
    .pipe(jade({ pretty: true, locals: locals }))
    .pipe(gulp.dest('public'));
});


gulp.task('styles', function() {
  gulp.src('source/styles/*.styl')
    .pipe(stylus({errors: true}))
    .pipe(prefix())
    .pipe(gulp.dest('public/styles'));

  gulp.src('source/styles/lib/*.css')
    .pipe(stylus({errors: true}))
    .pipe(gulp.dest('public/styles/lib'));
});


gulp.task('scripts', function() {
  gulp.src('source/scripts/**/*.js')
    .pipe(gulp.dest('public/scripts'));
});


gulp.task('images', function() {
  gulp.src('source/images/**/*')
    .pipe(gulp.dest('public/images'));
});


/**
gulp tasks used from cli
*/

gulp.task('default', ['content', 'styles', 'scripts', 'images']);

gulp.task('watch', function () {
  gulp.watch('source/**/*', ['default']);
});
