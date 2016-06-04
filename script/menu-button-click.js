$(function() {
  $('.header__menu').click(function () {
    $(this).toggleClass('header__menu_show');
    $('.sidebar').toggleClass('sidebar_show');
  });

  $('.header__icons-icon_add-active').click(function () {
    $('.search-field_show').toggleClass('search-field_hide');
    $(this).toggleClass('header__icons-icon_add');
  });
});