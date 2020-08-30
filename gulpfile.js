const gulp = require('gulp');
const rename = require('gulp-rename');
const inject = require('gulp-inject-string');

gulp.task('inject:analytics', async function () {
  const GA_TRACKER_ID = process.env.GA_TRACKER_ID;
  if (GA_TRACKER_ID !== undefined) {
    gulp.src('src/index.html')
    .pipe(inject.before('</head>',  `
    <link rel="preconnect" href="https://www.google-analytics.com">
    <!-- Google Analytics -->
    <script defer>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.defer=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      
      ga('create', '${GA_TRACKER_ID}', 'auto');
      ga('send', 'pageview');
    </script>
    `))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist')); 
  } else {
    console.log("GA_TRACKER_ID doesn't exist");
  }
});