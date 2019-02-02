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
  config          = require('../config');


/* PROCESSING
********************************************************/

// Clean (dir)
function clean() {
  return del([config.dist.home]);
}

// Import and compress (img)
function imgs() {
	return gulp.src(config.dist.img.src)
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest(config.dist.img.dest));
}

// Import and compress (css, js)
function userefs() {
  return gulp.src(config.dist.useref.src)
    .pipe(useref())
    .pipe(gulpif('*.js',  uglify({output: {comments: /^!/}})))
    .pipe(gulpif('*.css', cleanCSS({specialComments: '/*!'})))
    .pipe(rev())
    .pipe(gulp.dest(config.dist.useref.dest));
}

function minifyCss() {
  return gulp.src(config.dist.css.src)
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.dist.css.dest));
}

// Import all files
function files(cb) {
  var cat = config.dist.import;
  for (var url in cat) {
    gulp.src(cat[url].src).pipe(gulp.dest(cat[url].dest));
  }
  cb();
}


/* START BUILD
********************************************************/
var build = gulp.series(clean, gulp.parallel(imgs, userefs, minifyCss, files));

gulp.task( 'b', build);

/* CLEAR ALL CACHE
********************************************************/
gulp.task('clear', function () { return cache.clearAll(); });
