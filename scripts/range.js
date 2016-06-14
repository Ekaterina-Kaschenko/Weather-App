$(function() {
  var rangeDays = $('#range-days');
  var rangeDaysOutput = $('#range-days-output');
  rangeDays.on('input', function () {
    rangeDaysOutput.html(rangeDays.val());
  });

  var rangeMins = $('#range-mins');
  var rangeMinsOutput = $('#range-mins-output');
  rangeMins.on('input', function () {
    rangeMinsOutput.html(rangeMins.val());
  });

  $('input[type=range]').rangeslider({
    polyfill: false
  });
});