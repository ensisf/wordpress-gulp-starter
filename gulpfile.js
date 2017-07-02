'use strict';

const gulp    = require('gulp'),
      images = require('./tasks/images'),
      plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'browser-sync', 'gulp.*', '@*/gulp{-,.}*','webpack']
      });

//==========html==========//
gulp.task('html:build', require('./tasks/html')(gulp, plugins));

//==========webpack==========//
gulp.task('webpack', require('./tasks/webpack')(plugins));

//==========styles==========//
gulp.task('style:build', require('./tasks/styles')(gulp, plugins));

//==========images==========//
gulp.task('image:build', images.buildImages(gulp, plugins));

//==========rastr sprite==========//
gulp.task('sprite:build', images.buildSprite(gulp, plugins));

//==========svg sprite==========//
gulp.task('svg-sprite:build', images.buildSpriteSvg(gulp, plugins));

//==========fonts==========//
gulp.task('fonts:build', require('./tasks/fonts')(gulp, plugins));

//==========webserver==========//
gulp.task('webserver', require('./tasks/server')(plugins));

//==========watch==========//
gulp.task('watch', require('./tasks/watch')(gulp, plugins));

//==========build==========//
gulp.task('build', ['html:build','webpack','style:build','fonts:build','image:build']);

//==========default==========//
gulp.task('default', ['build', 'webserver', 'watch']);