/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var newer = require('gulp-newer');
var notify = require('gulp-notify');
var reunSequence = require('run-sequence');
var ignore = require('gulp-ignore');
var rimraf = require('gulp-rimraf');
var zip = require('gulp-zip');
var cache = require('gulp-cache');
var pngquant = require('imagemin-pngquant');
var server = require('karma').Server;
//var config = require('./glup-config.json');
var pjconfig = require('./package.json');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});