var
  vinylFtp        = require('vinyl-ftp'),
  gulp            = require('gulp'),
  rsync           = require('gulp-rsync'),
  gulpSequence    = require('gulp-sequence'),
  config          = require('../config');


/* PROCESSING FTP
 ********************************************************/

gulp.task('f', function () {
 var
   conn = vinylFtp.create(config.ftp.conn);
 return gulp.src(config.ftp.globs, {base: config.ftp.home, buffer: false})
   .pipe(conn.dest(config.ftp.url));
});

gulp.task('b:f', gulpSequence('b', 'f'));


/* PROCESSING SYNC
********************************************************/

gulp.task('s', function() {
  return gulp.src(config.ssh.src)
    .pipe(rsync(config.ssh.host));
});

gulp.task('b:s', gulpSequence('b', 's'));
