const config = require('./config');

module.exports = (gulp, plugins) => {
    return () => {
        gulp.src(config.path.src.fonts)
            .pipe(gulp.dest(config.path.build.fonts))
    }
}