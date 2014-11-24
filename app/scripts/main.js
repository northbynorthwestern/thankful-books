$(document).ready(function() {
  $(function() {
    // init Isotope
    var $container = $('.isotope').isotope({
      itemSelector: '.element-item'
    });
  });
  // show/hide overlays
  $('.md-trigger').on('click', function() {
    $('.md-overlay').css('visibility', 'visible');
  });

  $('.md-close').on('click', function() {
    $('.md-overlay').css('visibility', 'hidden');
  });

  $('.md-overlay').on('click', function() {
    $('.md-overlay').css('visibility', 'hidden');
  });
});