const gulp = require('gulp');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const historyApiFallback = require('connect-history-api-fallback');

gulp.task('css', async function() {
  gulp.src('./src/css/style.css')
    .pipe(postcss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('html', async function () {
  gulp.src(['./src/**/.*html', './src/*.html'])
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('assets', async function () {
  gulp.src('./src/assets/**')
    .pipe(gulp.dest('./dist/assets/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js', async function () {
  gulp.src('./src/js/**')
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('data', async function () {
  gulp.src('./src/data/**')
    .pipe(gulp.dest('./dist/data/'))
    .pipe(browserSync.reload({
      stream: true
    }));
})

gulp.task('watch', async function () {
  gulp.watch('./src/assets/**', gulp.series('assets'));
  gulp.watch('./src/js/**', gulp.series('js'));
  gulp.watch('./src/data/**', gulp.series('data'));
  gulp.watch(['./src/**/*.html'], gulp.series('html', 'css')).on('change', browserSync.reload);
  gulp.watch('./src/css/style.css', gulp.series('css')).on('change', browserSync.reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    watch: true,
    server: {
      baseDir: "./dist/",
      middleware: [ historyApiFallback() ]
    }
  });
});

// For production
gulp.task('build', gulp.series('html', 'css', 'assets', 'js', 'data'));

// For development
gulp.task('default', gulp.series('build', 'watch', 'browserSync'));