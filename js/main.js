var $topMenu = $('#main-menu'),
  $showMenuBtn = $('#show-menu');

$showMenuBtn.on('click', function(){
  if ( $topMenu.hasClass('open')){
    $topMenu.removeClass('open');
  }
  else{
    $topMenu.addClass('open');
  }
});

$(window).resize(function(){
  if ($(window).width() > 885){
    $topMenu.removeClass('animation')
            .removeClass('open');


  }else{
    $topMenu.addClass('animation');
  }
});

$topMenu.on('click', 'a', function(){
  $topMenu.removeClass('open');
});




$(document).ready(function() {


  /*slick*/

  $('.ba-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 100,
      infinite:true,
    slide: ".slide-show",
    prevArrow: ".ba-slider__prev",
    nextArrow: ".ba-slider__next",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          slidesToScroll: 1,
          speed: 100,
            infinite:true
          }
        }
      ] // на экране шириной менее 1024
  });

  $('.slide-btn').on('mouseleave', function(){
    $(this).blur();
  }); // убираем фокус, если мышку увели и не нажали в другом месте

  /*плавная прокрутка по клику на меню*/
  function clickMenuAndBtn(event) {
    event.preventDefault();
    var link = $(this).attr('href');
    var distance = $(link).offset().top;

    $('html, body').animate({
      scrollTop: distance
    }, 500);
  }

  $('.menu__list').on('click', '.menu__link', clickMenuAndBtn);
  /*end*/

}); // конец doc.ready

/* событие скролл */



$(window).scroll(function(){


  /* полупрозрачность фиксированного меню*/

  var dist = $('#about').offset().top;
  //console.log('window ' + $(window).scrollTop() + 'dist ' + dist);
  if ($(window).scrollTop() >= dist){
    $('.header').css('background', 'rgba(0, 0, 0, 0.3)');
  } else {
    $('.header').css('background', 'transparent');
  }

});



