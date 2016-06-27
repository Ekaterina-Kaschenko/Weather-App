$(function() {
	var currentWeather = {
	  weatherIcon: 'icon-cloudy',
	  temperature: '-2',
	  iconTime: 'icon-rain-snow',
	  time: '6:20',
	  description: 'some text'
	};

	window.renderTemplate('current-info/current-weather', '.current-info', 'add', {weather: currentWeather});
});