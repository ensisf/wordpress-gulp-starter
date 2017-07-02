const config = require('./config');

module.exports = (plugins) => {
    return (cb) => {
        plugins.webpack(
            require('../webpack.config.js'),
            function (err, stats) {
                const errors = stats.compilation.errors;

                plugins.browserSync.reload();

                if (err) throw new plugins.util.PluginError("webpack", err);
                
                if (errors.length > 0) {
                    plugins.notify.onError({
                        title: 'Webpack Error',
                        message: '<%= error.message %>',
                        sound: 'Submarine'
                    }).call(null, errors[0]);

                }

                plugins.util.log('[webpack]', stats.toString({
                    colors: true,
                    chunks: false
                }));

                cb();
            }
        )
    }
}