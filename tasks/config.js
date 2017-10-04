const plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'browser-sync', 'gulp.*', '@*/gulp{-,.}*','webpack']
      });
      
const config = {
  path: {
    build: {
      html: 'build/',
      js: 'js/',
      css: 'css/',
      img: 'img/',
      fonts: 'fonts/',
      spriteImg : 'src/img/images/',
      spriteSass : 'src/sass/components/'
    },
    src: {
      html: 'src/*.html',
      js: 'src/js/main.js',
      style: 'src/sass/style.scss',
      img: 'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*',
      spriteIcons: 'src/icons/'
    },
    watch: {
      html: 'src/**/*.html',
      js: 'src/js/**/*.js',
      style: 'src/sass/**/*.scss',
      img: 'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*',
      sprite: 'src/icons/'
    },
    serverDir: ['./', './build/']
  },
  isDev: !process.env.NODE_ENV || process.env.NODE_ENV === 'production',
  onError: function (err) {
    plugins.notify.onError({
      title: "Gulp",
      subtitle: "Failure!",
      message: "Error: <%= error %> ",
      sound: "Beep"
    })(err);
    this.emit('end');
  }
};

module.exports = config;

// By default - dev environment
// set production - set NODE_ENV=production gulp style:build
// Return to dev - set NODE_ENV=