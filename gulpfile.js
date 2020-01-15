const gulp = require('gulp');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('gulp-purgecss');

/**
 * Custom PurgeCSS Extractor
 * https://github.com/FullHuman/purgecss
 */
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

gulp.task('css', async function() {
  const postcss = require('gulp-postcss');
  const plugins = [
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
    cssnano({
      preset: 'default'
    }),
  ]
  gulp.src('src/css/style.css')
    .pipe(postcss(plugins))
    .pipe(purgecss({
      // Specify the paths to all of the template files in your project
      content: [
        './src/**/*.html',
        './src/*.html'
      ],

      // Include any special characters you're using in this regular expression
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["html"]
        }
      ]
    }))
    .pipe(rename('css/style.min.css'))
    .pipe(gulp.dest('./dist/'))
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

gulp.task('js-plugins', async function () {
  gulp.src('./src/js/plugins/**')
    .pipe(gulp.dest('./dist/js/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', async function () {
  gulp.src('./src/js/app.js')
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', async function () {
  gulp.watch('./src/css/style.css', gulp.series('css'));
  gulp.watch(['./src/**/*.html'], gulp.series('html', 'css')).on('change', browserSync.reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: './dist'
  })
});

// For production
gulp.task('build', gulp.series('html', 'css', 'assets', 'js-plugins', 'js'));

// For development
gulp.task('default', gulp.series('build', 'watch', 'browserSync'));