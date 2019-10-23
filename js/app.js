$(document).ready(function () {

  //Toggler button
  $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change')
  })

  //sticky navbar less padding 718 to 640

  $(window).scroll(function () {
    let position = $(this).scrollTop();

    if (position >= 640) {
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  })

  //smooth scroll

  $('.nav-item a, .header-link, #back-to-top').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25
    }, 3000)

  })










  //ripples
  $(".banner, .info").ripples({
    dropRadius: 25,
    perturbance: 0.6,
  });

  //popup
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',

    gallery: {
      enabled: true
    }
    // other options
  });


})