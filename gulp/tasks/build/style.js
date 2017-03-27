const gulp = require('gulp');
const less = require('gulp-less');
const reload = require('browser-sync').reload;
const sourcemaps = require('gulp-sourcemaps');
const config = require('../../config').style;
const autoprefixer = require('gulp-autoprefixer');

gulp.task('build:style', function () {
  gulp.src(config.src)
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(autoprefixer())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dest))
      .pipe(reload({ stream: true }));
});
