var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var exec = require('child_process').exec;
var reactify = require('reactify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var path = {
  HTML: 'index.html',
  WATCH: ['react_app/components/*.js','react_app/actions/*.js', 'react_app/stores/*.js','*.html'],
  DEST: 'react_app/dist'
};

// 
gulp.task('scripts', function(){
  var b = browserify();
  b.transform(reactify);
  b.add('react_app/App.js');
  return b.bundle()
  //  .pipe(react())
    .pipe(source('App.js'))
    .pipe(gulp.dest(path.DEST));
});

// Task to run Node server app
gulp.task('server', function() {
exec('node node_app/server.js', function (err, stdout, stderr) {
  console.log(stdout);
  console.log(stderr);
  });
});

//Open browser with app in it, reload on any change
gulp.task('browser', function() {
  browserSync({
    server: {
      baseDir: 'react_app'
      }
    });
    gulp.watch(['*.html', path.WATCH], {cwd: ''}, reload);
});

gulp.task('watch', function() {
  gulp.watch([path.WATCH], ['scripts']);
});

gulp.task('default', [ 'scripts', 'browser', 'server', 'watch' ]);
