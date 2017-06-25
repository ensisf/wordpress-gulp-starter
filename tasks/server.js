const config = require('./config');

module.exports = (plugins) => {
    return () => {
        plugins.browserSync({
            server: {
                baseDir: "./"
            },
            tunnel: false,
            host: 'localhost',
            port: 9000,
            logPrefix: "frontensis"
        });
    }
}