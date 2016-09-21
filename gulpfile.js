var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	filesJS = [
			'script_components/EventEmitter.js',
			'script_components/App.js',
			'script_components/List.js',
			'script_components/Form.js'
		];

// Javascript
gulp.task('js', function () {
	return gulp.src(filesJS)
		.pipe(concat('script.min.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
	gulp.watch(filesJS, ['js']);
});

gulp.task('default', ['watch','js']);
