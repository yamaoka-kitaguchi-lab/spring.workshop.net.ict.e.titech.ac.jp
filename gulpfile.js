const gulp = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');

const paths = {
  pug: './spring-workshop/',
  dist: './public/'
};

gulp.task('pug', () => {
  return gulp.src([paths.pug + '**/*.pug', '!' + paths.pug + '**/_*.pug'])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(dist_dir));
});

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: paths.dist,
      index: 'index.html'
    }
  });
});

gulp.task('reload', () => {
  browserSync.reload();
});

gulp.task('watch', () => {
  gulp.watch([paths.pug + '**/*.pug', '!' + paths.pug + '**/_*.pug'], gulp.task('pug'));
});

gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'reload')));
