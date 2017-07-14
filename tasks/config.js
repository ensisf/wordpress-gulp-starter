const plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'browser-sync', 'gulp.*', '@*/gulp{-,.}*','webpack']
      });
      
const config = {
  path: {
    build: {
      html: '',
      js: 'js/',
      css: '',
      img: 'img/',
      fonts: 'fonts/'
    },
    src: {
      html: 'src/*.html',
      js: 'src/js/main.js',
      style: 'src/sass/style.scss',
      img: 'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*',
      spriteImg: 'src/img/images/',
      spriteSass: 'src/sass/components/',
      spriteIcons: 'src/design/icons/**/*.png'
    },
    watch: {
      html: 'src/**/*.html',
      js: 'src/js/**/*.js',
      style: 'src/sass/**/*.scss',
      img: 'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*',
      sprite: 'src/design/icons/**/*.png',
      svgSprite: 'src/design/svg/icons/**/*.svg'
    }
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