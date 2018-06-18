const config = require('./config');

function buildImages(gulp, plugins) {
  return () => {
    gulp.src(config.path.src.img)
      .pipe(plugins.plumber({
        errorHandler: config.onError
      }))
      .pipe(gulp.dest(config.path.build.img))
      .pipe(plugins.browserSync.reload({
        stream: true
      }));
  }
}


function buildSprite(gulp, plugins) {
  return () => {
    const spriteData = gulp.src(`${config.path.src.spriteIcons}/*.png`)
      .pipe(plugins.plumber({
        errorHandler: config.onError
      }))
      .pipe(plugins.spritesmith({
        imgName: 'sprite.png', //sprite name
        cssName: '_sprite.scss', //sass file name
        imgPath: `../img/images/sprite.png`, //the path to sprite image
        // cssFormat: 'scss', //format
        padding: 5, // paddings between icons
        // retinaSrcFilter: [`${config.path.src.spriteIcons}/**/*-2x.png`],
        // retinaImgName: 'sprite-2x.png',
        // retinaImgPath : `../img//images/sprite-2x.png`,
      })); 
    spriteData.img.pipe(gulp.dest(config.path.build.spriteImg)); // put sprite image
    spriteData.css.pipe(gulp.dest(config.path.build.spriteSass)); // put sprite stylesheet
  }
}

function buildSpriteSvg(gulp, plugins) {
  return () => {
    gulp.src(`${config.path.src.spriteIcons}/*.svg`)
      .pipe(plugins.plumber({
        errorHandler: config.onError
      }))
      .pipe(plugins.svgmin({
        js2svg: {
          pretty: true
        }
      })) //minify svg
      .pipe(plugins.cheerio({
      	run: function ($) { // replace some attributes
      		$('[fill]').removeAttr('fill');
      		$('[style]').removeAttr('style');
      	},
      	parserOptions: { xmlMode: true }
      }))
      .pipe(plugins.replace('&gt;', '>')) //replace '&gt;'
      .pipe(plugins.svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite_symbol.svg",
            // render: {
            // 	scss: {
            // 		dest:'../../../sass/components/_svg_sprite.scss',
            // 		template: "src/sass/templates/_svg_sprite_template.scss"
            // 	}
            // }
          }
        }
      }))
      .pipe(plugins.cheerio(function ($) {
        $('svg').attr('style', 'display:none');
      }))
      .pipe(gulp.dest(config.path.build.spriteImg));
  }
}

module.exports.buildImages = buildImages;
module.exports.buildSprite = buildSprite;
module.exports.buildSpriteSvg = buildSpriteSvg;