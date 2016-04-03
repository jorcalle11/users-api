'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var config = {
  scripts : {
    watch: './src/**/*.js',
    input: './build/app.js',
    output: './build'
  }
};

gulp.task('nodemon', function () {
  nodemon({
    script: config.scripts.input,
    watch: ['./src'],
    env: {
      port: 3000
    },
    tasks: ['jshint','transpilate']
  });
});

gulp.task('transpilate', function () {
  gulp.src(config.scripts.watch)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest(config.scripts.output));
});

gulp.task('jshint', function () {
  gulp.src(config.scripts.watch)
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter(stylish));
});

gulp.task('default', ['nodemon']);
