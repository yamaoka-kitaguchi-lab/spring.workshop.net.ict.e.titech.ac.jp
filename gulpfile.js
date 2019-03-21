const gulp = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');
const rimraf = require('rimraf');

const paths = {
  pug: './spring-workshop/',
  statics: './spring-workshop/static/',
  dist: './public/'
};

gulp.task('clean', (callback) => {
  return rimraf(paths.dist, callback);
});

gulp.task('pug', () => {
  return gulp.src([paths.pug + '**/*.pug', '!' + paths.pug + '**/_*.pug'])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(paths.dist));
});

gulp.task('copy', () => {
  return gulp.src([paths.static + '**/*.*'], {
    base: paths.statics
  })
  .pipe(gulp.dest(paths.dist));
});

gulp.task('build', gulp.series(['clean', 'pug', 'copy']));

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: paths.dist,
      index: 'index.html'
    }
  });
  gulp.watch([paths.dist + '**/*.html'], gulp.task('reload'));
  gulp.watch([paths.dist + '**/*.css'], gulp.task('reload'));
  gulp.watch([paths.dist + '**/*.js'], gulp.task('reload'));
});

gulp.task('reload', (done) => {
  browserSync.reload();
  done();
});

gulp.task('watch', () => {
  gulp.watch([paths.pug + '**/*.pug'], gulp.task('build'));
  gulp.watch([paths.pug + '**/*.js'], gulp.task('build'));
  gulp.watch([paths.pug + '**/*.css'], gulp.task('build'));
});

gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'watch')));
