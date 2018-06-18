// import '../vendor/mfp';
// import {setSvgIcon} from '../utils/utils';

// const popupOpts = {
//   type: 'inline',
//   preloader: false,
//   closeBtnInside: true,
//   removalDelay: 500,
//   mainClass: 'fade-zoom',
//   closeMarkup: `<button title="%title%" type="button" class="mfp-close">${setSvgIcon('icon-close',26, 26)}</button>`,
//   callbacks: {
//     beforeOpen: function () {

//     },

//     afterClose: function () {

//     },

//     open: function () {

//     }
//   }
// }

// const galleyPopupOpts = {
//   delegate: '.js-gallery-link',
//   type: 'image',
//   tLoading: 'Loading image #%curr%...',
//   mainClass: 'fade-zoom',
//   gallery: {
//     enabled: true,
//     navigateByImgClick: true,
//     preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
//     arrowMarkup: `<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%">${utils.setSvgIcon('arrow-%dir%-2', 13, 25)}</button>`, // markup of an arrow button
//   },
//   // image: {
//   //   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
//   //   titleSrc: function(item) {
//   //     return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
//   //   }
//   // }
// }

// utils.globals.doc.on('click', '.js-popup-link', function (e) {
//   e.preventDefault();

//   $.magnificPopup.open(Object.assign({}, popupOpts, {
//     items: {
//       src: $(this).attr('href')
//     }
//   }));
// });
