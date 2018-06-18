const getElem = (selector, context) => {
  const ctx = context || document;
  return ctx.querySelector(selector);
};

const getElems = (selector, context) => {
  const ctx = context || document;
  return ctx.querySelectorAll(selector);
};

const $globals = {
  window: $(window),
  doc: $('html'),
  body: $('body'),
};

const setSvgIcon = (name, width, height) => {
  const w = width || 30;
  const h = height || 30;
  return `<svg class="icon" width="${w}" height="${h}"><use xlink:href="#${name}" aria-hidden="true"/></svg>`;
};

const getMax = elems => {
  let max = elems.eq(0).outerHeight();
  elems.each((idx, elem) => {
    max = $(elem).outerHeight() > max ? $(this).outerHeight() : max;
  });
  return max;
};

const scrollTo = id => {
  $('body,html').animate(
    {
      scrollTop: $(id).offset().top,
    },
    500
  );
};

const declension = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

const scrollWidth = () => {
  const div = $('<div>').css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100px',
    height: '100px',
    visibility: 'hidden',
    overflow: 'scroll',
  });

  $('body')
    .eq(0)
    .append(div);
  const width = div.get(0).offsetWidth - div.get(0).clientWidth;
  div.remove();
  return width;
};

const splitNumbers = (number) => number
  .toString()
  .replace(/[^0-9]/gim, '')
  .split('')
  .reverse()
  .reduce((prev, current, index)=> index%3 === 0 ? `${prev} ${current}` : prev + current, '')
  .split('')
  .reverse()
  .join('');

export {
  getElem,
  getElems,
  $globals,
  setSvgIcon,
  getMax,
  scrollTo,
  splitNumbers,
  declension,
  scrollWidth,
};
