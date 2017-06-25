///////////////////////////////////////////////////VENDORS
/*
= vendor/sprite-svg.js
= vendor/fotorama.js
= vendor/jquery.magnific-popup.js
= vendor/jquery.maskedinput.min.js
= vendor/jquery.pickmeup.min.js
= vendor/jquery.smoothscroll.js
= vendor/jquery.sticky.js
= vendor/slick.min.js
= vendor/parallax.min.js
= vendor/wow.min.js
*/

jQuery(document).ready(function($) {
  //get max height
  function getMax(elems) {
    var max = elems.eq(0).outerHeight();
    elems.each(function () {
      max = ( $(this).outerHeight() > max ) ? $(this).outerHeight() : max;
    });
    return max;
  }

    //globals vars
    var $window = $(window),
        $doc = $('html'),
        $body = $('body');


        // //get scroll width
        //
        // function scrollWidth(){
        //     var div = $('<div>').css({
        //         position: "absolute",
        //         top: "0px",
        //         left: "0px",
        //         width: "100px",
        //         height: "100px",
        //         visibility: "hidden",
        //         overflow: "scroll"
        //     });
        //     $('body').eq(0).append(div);
        //     var width = div.get(0).offsetWidth - div.get(0).clientWidth;
        //     div.remove();
        //     return width;
        // }
        //
        // var scrollWidth = scrollWidth();

        // close by outer click

        // $doc.mouseup(function (e) {
        //   closeOut(e, elem, closeClass);
        // });

        function closeOut(e, elem, closeClass) {
          // e - event
          // elem - jquery element
          // closeClass - class tat hide element

          if (elem.hasClass(closeClass)) {
            return;
          }
          if (!elem.is(e.target) // click outer element
              && elem.has(e.target).length === 0) { // and not his children
            elem.addClass(closeClass); // hide him
          }
        }

        //scroll to anchor
        $doc.on('click', '.js-btnAnchor', scrollToAnchor);

        function scrollToAnchor(e) {
          e.preventDefault();
          var id = $(this).data('href'),
            top = $('#' + id).offset().top;

          $('body,html').animate({
            scrollTop: top
          }, 500);
        };

    //nav

    //debounce
  //   var scrollTimeout;
  //   window.addEventListener('scroll', function(evt){
  //     clearTimeout(scrollTimeout);
  //     scrollTimeout = setTimeout(function(){
  //
  //     }, 100);
  //  });

    //sticky nav
    // $(window).scroll(function() {
    //
    //
    //     var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    //     var nav = $('.nav');
    //     if (nav.length != 0) {
    //       if (scrolled >= 250) {
    //           nav.addClass('fixed');
    //       }
    //       if (scrolled >= 350) {
    //           nav.addClass('shown');
    //       }
    //       if (scrolled <= 300) {
    //           nav.removeClass('shown');
    //           nav.removeClass('fixed');
    //       }
    //     }
    // });

    var btnToggleNav = $('.js-toggle-nav');

    btnToggleNav.on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('opened');
      $($(this).data('href')).toggleClass('nav--hidden');
    });

    //modals
    var modalLink = $('.modal-link');

  //   modalLink.magnificPopup({
  //     type: 'inline',
  //     preloader: false,
  //     closeBtnInside: true,
  //     removalDelay: 200,
  //     mainClass: 'fade-zoom',
  //     callbacks: {
  //       beforeOpen: function() {
  //
  //       },
  //       afterClose: function() {
  //
  //       }
  //     }
  // });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////MASKEDINPUT jQuery

    // $.mask.definitions['~']='[+-]';
    //  $('#date').mask('99/99/9999',{
    //  	placeholder:"mm/dd/yyyy"
    //  });
    //  $('#phone').mask('(999) 999-9999');
    //  $('#phoneext').mask("(999) 999-9999? x99999");
    //  $("#tin").mask("99-9999999");
    //  $("#ssn").mask("999-99-9999");
    //  $("#product").mask("a*-999-a999",{
    //  	placeholder:" ",
    //  	completed:function(){
    //  		alert("You typed the following: "+this.val());
    //  	}
    //  });
    //  $("#eyescript").mask("~9.99 ~9.99 999");

    ////////////////////////////////////////////////////////////////////////////////////////////////////////Кнопка наверх на jQuery

    $body.append('<style>\
	.scrollTop{\
		display:none; z-index:9999; position:fixed; bottom:8px; padding:5px 10px; right:8px; border-radius:.2em;\
		background:rgba(0,0,0,0.4); color:#fff;\
	}\
	.scrollTop:hover{ background:rgba(41, 58, 114,0.8); color:#fff; text-decoration:none; }\
	.scrollTop:before{ content:"↑" }\
	</style>');
    var
        speed = 500,
        $scrollTop = $('<a href="#" class="scrollTop"></a>').appendTo('body');

    $scrollTop.click(function(e) {
        e.preventDefault();
        $('html:not(:animated),body:not(:animated)').animate({
            scrollTop: 0
        }, speed);
    });
    //появление
    function show_scrollTop() {
        ($(window).scrollTop() > 100) ? $scrollTop.fadeIn(600): $scrollTop.fadeOut(600);
    }
    $(window).scroll(function() {
        show_scrollTop();
    });
    show_scrollTop();






});

////////////////////////////////////////////////////////////////////////////////////////replace span and gaps in href
// function replaceSpan(elem){
//   for (let i = 0; i < elem.length; i++) {
//     let href = elem[i].getAttribute('href').replace(/\s+/g, '').replace('<span>', '').replace('</span>', '');
//     elem[i].setAttribute('href', href)
//   }
// }
// replaceSpan(document.querySelectorAll('.rep'));
