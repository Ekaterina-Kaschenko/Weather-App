$(function() {
  $('.scrollbar-macosx').scrollbar();
  $(window).on('resize', function() {
    $('.scrollbar-macosx').scrollbar();
  });
});
