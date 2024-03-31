$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    appendDots: $('.slider'),
    dotsClass: 'slick-dots',
  });

  $(window)
    .on('resize', function () {
      if ($(window).width() > 768) {
        $('.slider').slick('slickSetOption', 'slidesToShow', 2, true);
      } else {
        $('.slider').slick('slickSetOption', 'slidesToShow', 1, true);
      }
    })
    .resize();
});
