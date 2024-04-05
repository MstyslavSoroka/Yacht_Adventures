$(document).ready(function(){
    $('.slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      adaptiveHeight: true,
    });

    $('.prev').click(function(){
      $('.slider').slick('slickPrev');
    });

    $('.next').click(function(){
      $('.slider').slick('slickNext');
    });

    $('.prev-desk').click(function(){
      $('.slider').slick('slickPrev');
    });

    $('.next-desk').click(function(){
      $('.slider').slick('slickNext');
    });


  $(window)
  .on('resize', function () {
    if ($(window).width() > 768) {
      $('.slider').slick('slickSetOption', 'slidesToShow', 2, true);
    } 
    else {
      $('.slider').slick('slickSetOption', 'slidesToShow', 1, true);
    }
  })
  .resize();
});