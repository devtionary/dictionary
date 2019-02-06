const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const nodemon = require('nodemon');

gulp.task('js', () => {
  gulp
    .src('./client/index.js')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('serve', function() {
  return nodemon({
    script: 'server/server.js',
    env: {'NODE_ENV': 'production'}
  }).on('restart', function() {
    console.log('restarted');
  });
});

// Watch JS/JSX
gulp.task('watch', function() {
  gulp.watch('client/**/*.{js,jsx}', ['js']);
  gulp.watch('server/**/*.{js,jsx}', ['js']);
});

// Set production enviornment
gulp.task('set-prod-node-env', function() {
  return (process.env.NODE_ENV = 'production');
});

gulp.task('default', ['set-prod-node-env', 'js', 'serve', 'watch']);
