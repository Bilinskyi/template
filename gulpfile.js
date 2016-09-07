'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename'),
browserSync = require('browser-sync').create(),
imageop = require('gulp-image-optimization'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		},
	})
})

gulp.task('images', function(cb) {
  gulp.src(['dev/**/*.png','dev/**/*.jpg','dev/**/*.gif','dev/**/*.jpeg']).pipe(imageop({
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
  })).pipe(gulp.dest('./')).on('end', cb).on('error', cb);
});

gulp.task('sass', function () {
	return gulp.src('./sass/**/*.scss')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.reload({
		stream: true
	}));
});



gulp.task('watch', ['browserSync'], function () {
	gulp.watch('./sass/**/*.scss', ['sass']);
// Reloads the browser whenever HTML or JS files change
gulp.watch('./*.html', browserSync.reload); 
gulp.watch('./js/**/*.js', browserSync.reload);
});
