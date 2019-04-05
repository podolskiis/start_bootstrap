var
  del             = require('del'),
  pngquant        = require('imagemin-pngquant'),
  gulp            = require('gulp'),
  gulpif          = require('gulp-if'),
  uglify          = require('gulp-uglify'),
  useref          = require('gulp-useref'),
  rev             = require('gulp-rev-append'),
  cleanCSS        = require('gulp-clean-css'),
  imagemin        = require('gulp-imagemin'),
  cache           = require('gulp-cache'),
  gulpSequence    = require('gulp-sequence'),
  config          = require('../config');


/* PROCESSING
********************************************************/

// Clean (dir)
gulp.task('clean', function() {
	return del.sync(config.dist.home);
});


// Import and compress (img)
gulp.task('img', function() {
	return gulp.src(config.dist.img.src)
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest(config.dist.img.dest));
});


// Import and compress (css, js)
gulp.task('useref', function () {
  return gulp.src(config.dist.useref.src)
    .pipe(useref())
    .pipe(gulpif('*.js',  uglify({output: {comments: /^!/}})))
    .pipe(gulpif('*.css', cleanCSS({specialComments: '/*!'})))
    .pipe(rev())
    .pipe(gulp.dest(config.dist.useref.dest));
});


gulp.task('minify-css', function() {
  return gulp.src(config.dist.css.src)
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.dist.css.dest));
});


// Import all files
gulp.task('files', function() {
  var cat = config.dist.import;
  for (var url in cat) {
    gulp.src(cat[url].src).pipe(gulp.dest(cat[url].dest));
  }
});


/* START BUILD
 ********************************************************/
 gulp.task('b', function(cb) {
   gulpSequence('clean', ['img', 'useref', 'minify-css', 'files'], cb);
 });

 /* CLEAR ALL CACHE
  ********************************************************/
gulp.task('clear', function () { return cache.clearAll(); });
