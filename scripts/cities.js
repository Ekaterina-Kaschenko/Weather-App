$(function() {
  var input = $('.search-field_show');
  input.on('input', function() {
    mod.findCities(input.val(), function(res) {
      var cityList = document.getElementsByClassName('city-list');
      cityList[0].innerHTML = '';
      window.renderTemplate('sidebar/city-list-item', '.city-list', 'add', {items: res});
    });
  });

  $('#city-list-form').on('change', function() {
    //check elements events
    console.log($(this).serializeArray());
  });
});
