// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery.turbolinks
//= require jquery.easing
//= require jquery.slick
//= require tether
//= require popper
//= require mixitup
//= require bootstrap-sprockets
//= require rails-ujs
//= require turbolinks

$(document).on("turbolinks:load", function () {

 $(window).scroll(function () {
    if ($(".navbar").offset().top > 100) {
      $(".fixed-top").addClass("top-nav-collapse");
      $(".fixed-top").css("background-color", "#333");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
      $(".fixed-top").css("background-color", "transparent");
    }
  });

  $(document).on('click', '.page-scroll', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  $(document).on('click', '.page-scroll', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  $('#productList').mixItUp();
});
