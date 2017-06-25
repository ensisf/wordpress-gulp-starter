const config = require('./config');

module.exports = (gulp, plugins) => {
    return () => {
        gulp.src(config.path.src.html)
            .pipe(plugins.plumber({
                errorHandler: config.onError
            }))
            .pipe(plugins.rigger())
            .pipe(gulp.dest(config.path.build.html))
            .pipe(plugins.browserSync.reload({
                stream: true
            }));
    }
}