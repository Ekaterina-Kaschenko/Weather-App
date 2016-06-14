$(function() {
  var celsius = $('.measuring-temperature-celsius'),
      fahrenheit = $('.measuring-temperature-fahrenheit');

  $(celsius).click(function(){
    fahrenheit.removeClass('active-temperature');
    $(this).addClass('active-temperature');
  });

  $(fahrenheit).click(function(){
    celsius.removeClass('active-temperature');
    $(this).addClass('active-temperature');
  });

});

