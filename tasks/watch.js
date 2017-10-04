const config = require('./config');

module.exports = (gulp, plugins) => {
    return () => {
        plugins.watch([config.path.watch.html], function () {
            gulp.start('html:build');
        });
        plugins.watch([config.path.watch.style], function () {
            gulp.start('style:build');
        });
        plugins.watch([config.path.watch.js], function () {
            gulp.start('webpack');
        });
        plugins.watch([config.path.watch.img], function () {
            gulp.start('image:build');
        });
        plugins.watch([config.path.watch.fonts], function () {
            gulp.start('fonts:build');
        });
        plugins.watch([`${config.path.src.spriteIcons}/*.svg`], function () {
            gulp.start('svg-sprite:build');
        });
        plugins.watch([`${config.path.src.spriteIcons}/*.png`], function () {
            gulp.start('sprite:build');
        });
    }
}