const fs = require('fs');

const buildSvgIcons = icons =>
  icons.reduce(
    (prev, current) => `${prev}
      <div class="icon-box">
        <code class="icon-box__txt">${current}</code>
        <svg class="svg-icon" width="50" height="50" aria-hidden="true">
          <use xlink:href="#${current}"></use>
        </svg>
      </div>`,
    ``
  );


  fs.readdir('src/icons/', (err, icons) => {
    console.log(icons);
    const svgIconsNames = [];
    // const iconsNames = [];
    const svgFileName = 'src/template/icons-svg.html';
    // const rastrIconsFileName = 'src/template/blocks/icons.html';
    const stream1 = fs.createWriteStream(svgFileName);
    // const stream2 = fs.createWriteStream(rastrIconsFileName);
  
    icons.forEach(icon => {
      if (icon.indexOf('svg') !== -1) {
        svgIconsNames.push(icon.split('.')[0]);
      } 
      // else {
      //   iconsNames.push(icon.split('.')[0]);
      // }
    });
  
    stream1.once('open', () => {
      const html = buildSvgIcons(svgIconsNames);
      stream1.end(html);
    });
  
    // stream2.once('open', () => {
    //   const html = buildIcons(iconsNames);
    //   stream2.end(html);
    // });
  });