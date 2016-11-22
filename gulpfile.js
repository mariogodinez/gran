var gulp = require('gulp');
var	connect = require('gulp-connect');
var stylus = require('gulp-stylus');
var nib = require('nib');

gulp.task('server', function(){
	connect.server({
		root: './app',
		hostname: '0.0.0.0',
		port: 8080,
		livereload: true

	})
});

gulp.task('css', function(){
	gulp.src('./app/stylesheets/main.styl')
		.pipe(stylus({use:nib()}))
		.pipe(gulp.dest('./app/stylesheets'))
		.pipe(connect.reload());
});


gulp.task('html', function(){
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});


gulp.task('watch', function(){
	gulp.watch(['./app/**/*.html'], ['html']);
	gulp.watch(['./app/stylesheets/**/*.styl'], ['css']);
})



gulp.task('default', ['server', 'watch']);


