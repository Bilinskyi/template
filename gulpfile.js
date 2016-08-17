'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename'),
browserSync = require('browser-sync').create(),
autoprefixer = require('gulp-autoprefixer');

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		},
	})
})

gulp.task('sass', function () {
	return gulp.src('./sass/**/style.scss')
	.pipe(sass().on('error', sass.logError))	
	.pipe(autoprefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('css'))
	.pipe(browserSync.reload({
		stream: true
	}));
});



gulp.task('watch', ['browserSync', 'sass'], function () {
	gulp.watch('./sass/**/style.scss', ['sass']);
// Reloads the browser whenever HTML or JS files change
gulp.watch('./*.html', browserSync.reload); 
gulp.watch('./js/**/*.js', browserSync.reload);
});
