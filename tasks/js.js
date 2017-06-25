const config = require('./config');

module.exports = (gulp, plugins) => {
    return () => {
        gulp.src(config.path.src.js)
            .pipe(plugins.plumber({
                errorHandler: config.onError
            }))
            .pipe(plugins.if(config.isDev, plugins.sourcemaps.init()))
            .pipe(plugins.rigger())
            .pipe(plugins.if(!config.isDev, plugins.uglify()))
            .pipe(plugins.rename({
                suffix: '.min'
            }))
            .pipe(plugins.if(config.isDev, plugins.sourcemaps.write('../maps/')))
            .pipe(gulp.dest(config.path.build.js))
    }
}