
const config = require('./config');

module.exports = (gulp, plugins) => {

    return () => {
        gulp.src(config.path.src.style)
            .pipe(plugins.plumber({
                errorHandler: config.onError
            }))
            .pipe(plugins.if(config.isDev, plugins.sourcemaps.init()))
            .pipe(plugins.sass({
                includePaths: ['./node_modules']
            }))
            .pipe(plugins.if(!config.isDev, plugins.autoprefixer()))
            .pipe(plugins.if(!config.isDev, plugins.csso({
                comments: false
            })))
            .pipe(plugins.rename({suffix: ".min"}))
            .pipe(plugins.if(config.isDev, plugins.sourcemaps.write('../maps/')))
            .pipe(gulp.dest(config.path.build.css))
            .pipe(plugins.browserSync.reload({
                stream: true
            }));
    }
}