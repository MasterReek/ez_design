// var minifycss = require('gulp-minify-css');
// var sourcemaps = require('gulp-sourcemaps');
var postcss = require("gulp-postcss");
var gulp = require('gulp');
var watch = require("gulp-watch");

var plumber = require("gulp-plumber");
var sass = require('gulp-sass');

const notifier = require('node-notifier');

var errorHandler = function(error) {
  console.log('message: '+error.message);
  console.log('plugin:  '+error.plugin);
        notifier.notify({
            message: error.message,
            title: error.plugin,
            sound: 'Glass'
        });
    };

var browsers = ['last 2 versions', "ie >= 11"];
// 最新2バージョン+safari 8(webkit)までプレフィックス付与

var sort_options = {
  'order': [
    'custom-properties', 'dollar-variables', 'declarations', 'at-rules', 'rules'
  ],

  'properties-order': 'alphabetical',

  'unspecified-properties-position': 'bottom'
}


//setting : paths
var paths = {
  'scss': '/opt/assets/scss/',
  'css': '/opt/assets/css/',
}
//setting : Sass Options
var sassOptions = {
  outputStyle: 'expanded'
}

//Sass
gulp.task('scss', function () {
  gulp.src(paths.scss + '**/*.scss')
    // .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(sass(sassOptions))
      .pipe(postcss([
        require('postcss-sorting')(sort_options),
        require('autoprefixer')({browsers: browsers, grid: true}),
        require('css-mqpacker'),
      ]))
    .pipe(gulp.dest(paths.css))
});

gulp.task("watch", function () {
  watch([paths.scss + '**/*.scss'], function(event){
      gulp.start("scss");
  });
});

//watch
// gulp.task('watch', function () {
//   gulp.watch(paths.scss + '**/*.scss', ['scss']);
// });

gulp.task('default', ['watch']);
