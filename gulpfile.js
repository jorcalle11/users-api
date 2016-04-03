'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var files = { api: './src/**/*.js' };

gulp.task('nodemon', function () {
  nodemon({
    script: './build/app.js',
    watch: ['./src'],
    env: {
      port: 3000
    },
    tasks: ['jshint','transpilate']
  });
});

gulp.task('transpilate', function () {
  gulp.src(files.api)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('jshint', function () {
  gulp.src(files.api)
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter(stylish));
});

gulp.task('default', ['nodemon']);
