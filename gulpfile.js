var gulp = require('gulp'),
	watch = require('gulp-watch'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	stripjs = require('gulp-strip-comments'),
	stripcss = require('gulp-strip-css-comments'),
	csso = require('gulp-csso');

var paths = {
	css : [
		'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'assets/css/highlightdefault.css',
        'assets/css/style.css'
	],
	js : [
		'bower_components/jquery/dist/jquery.min.js',
        'bower_components/angular/angular.min.js',
        'assets/js/highlight.pack.js',
        'assets/js/main.js'
	]
};

gulp.task('css', function() {
	return gulp.src(paths.css)
		.pipe(stripcss({preserve: false}))
		.pipe(concat('style.min.css'))
		.pipe(csso())
		.pipe(gulp.dest('public/css'));
});

gulp.task('js', function() {
	return gulp.src(paths.js)
		.pipe(concat('main.min.js'))
		.pipe(stripjs())
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
});

gulp.task('watch', function() {
	gulp.watch(paths.css, ['css']);
	gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['watch', 'css', 'js']);