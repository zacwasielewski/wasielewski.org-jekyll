var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var shell = require('gulp-shell');

var appDir = './src/'

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: appDir + "_site/"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('images', function(){
  gulp.src('app/src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(appDir + 'dist/images/'));
});

gulp.task('styles', function(){
  gulp.src([appDir + '_sass/main.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass({includePaths: ['bower_components']}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest(appDir + 'css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(appDir + 'css/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function(){
  return gulp.src(appDir + 'src/scripts/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(gulp.dest(appDir + 'dist/scripts/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(appDir + 'dist/scripts/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('jekyll', function () {
  return gulp.src(appDir + '_config.yml')
    .pipe(shell([
      //'jekyll build --config <%= file.path %> --source ' + appDir + ' --destination ' + appDir + '_site/'
      'jekyll build --config <%= file.path %>'
    ]))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function(){
  gulp.watch([
    appDir + "*.+(html|markdown|md)",
    appDir + "+(_includes|_layouts)/*.html",
    appDir + "_posts/*.+(markdown|md)"
  ], ['jekyll']);
  gulp.watch( appDir + "_sass/**/*.scss", ['styles', 'jekyll']);
  //gulp.watch("src/scripts/**/*.js", ['scripts']);
  //gulp.watch("*.html", ['bs-reload']);
});
