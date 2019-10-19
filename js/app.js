$(document).ready(function () {
  //ripples
  $(".banner, .info").ripples({
    dropRadius: 25,
    perturbance: 0.6,
  });

  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',

    gallery: {
      enabled: true
    }
    // other options
  });


})