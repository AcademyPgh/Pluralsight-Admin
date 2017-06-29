"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //runs a local dev server
var open = require('gulp-open'); // opens url in web browser
var browserify = require('browserify') //Bundles JS
var reactify = require('reactify'); //transforms JSX to JS
var source = require('vinyl-source-stream'); //Use conventional text streams with Gulp
var concat = require('gulp-concat'); //concatenates files
var lint = require('gulp-eslint'); //lint js files including JSX

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    ],
    dist: './dist',
    mainJs: './src/main.js',
  },
}

//Start a local dev server
gulp.task('connect', function(){
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
    .pipe(open({  uri: config.devBaseUrl + ':' + config.port+ '/'}));
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

//JS taks
gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()  //put all into one file to save http requests
    .on('error', console.error.bind(console)) //log errors to the console
    .pipe(source('bundle.js')) //define name of bundle
    .pipe(gulp.dest(config.paths.dist + '/scripts') ) // define destinaiton for the bundle
    .pipe(connect.reload()); // reload browser so that as it changes it reloads;
});

gulp.task('css', function () {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', function() {
  return gulp.src(config.paths.js)
    .pipe(lint({config: 'eslint.config.json'}))
    .pipe(lint.format());
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js','lint']); //as our Javascript is changed, js task run automatically
});

gulp.task('default',['html','js','css','lint', 'open', 'watch']) // simply type "gulp" in the commandline (must update PATH first);
