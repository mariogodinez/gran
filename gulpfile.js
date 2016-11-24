var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var	connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var stylus = require('gulp-stylus');
var nib = require('nib');
var rename = require('gulp-rename');

gulp.task('server', function(){
	connect.server({
		root: './app',
		hostname: '0.0.0.0',
		port: 8080,
		livereload: true

	})
});

gulp.task('css', function(){
	gulp.src('./main.styl')
		.pipe(stylus({use:nib()}))
		.pipe(rename('main.css'))
		.pipe(gulp.dest('./app/stylesheets'))
		.pipe(connect.reload());
});


gulp.task('html', function(){
	gulp.src('./*.html')
		.pipe(gulp.dest('./app'))
		.pipe(connect.reload());
});


function compile(watch){
	var bundle = watchify(browserify('./index.js'));
	function rebundle(){
		bundle
			.bundle()
			.on('error', function(err){
				console.log(err);
				this.emit('end')
			})
			.pipe(source('index.js'))
			.pipe(rename('app.js'))
			.pipe(gulp.dest('app/scripts'))
	}
	if(watch){
		bundle.on('update', function(){
			console.log('=>Bundling...')
			rebundle();
		})
	}

	rebundle();
}

gulp.task('build', function(){
	return compile();
})

gulp.task('bundleWatch', function(){
	return compile(true);

})

gulp.task('watch', function(){
	gulp.watch(['./*.html'], ['html']);
	gulp.watch(['./*.styl'], ['css']);
})

gulp.task('default', ['server', 'watch', 'bundleWatch']);


