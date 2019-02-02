var
  vinylFtp        = require('vinyl-ftp'),
  gulp            = require('gulp'),
  rsync           = require('gulp-rsync'),
  config          = require('../config');


/* PROCESSING SSH
********************************************************/
function ssh() {
  return gulp.src(config.ssh.src)
    .pipe(rsync(config.ssh.host));
}

gulp.task('b:s', gulp.series('b', gulp.parallel(ssh)));
