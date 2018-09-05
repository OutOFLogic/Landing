var menu = $('.mobile');
var link = $('.header__hamburger');
var icon = $('.icon');

$(function() {
  link.on('click', function(event) {
    event.preventDefault();
    menu.toggleClass('mobile-menu__active');
    icon.toggleClass('icon-cancel');
    icon.toggleClass('icon-menu')
  });
});

$(window).resize(function () {
  menu.removeClass('mobile-menu__active');
  icon.removeClass('icon-cancel');
  icon.addClass('icon-menu')
});
