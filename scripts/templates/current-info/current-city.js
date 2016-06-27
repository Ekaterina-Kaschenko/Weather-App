$(function() {
	var cityData = {
	  time: '10:19',
	  name: 'Kharkiv',
	  data: 'Monday, November 3',
	  icon: 'icon-rain-snow',
	  temperature: '-2',
	  description: 'some text'
	};


	window.renderTemplate('current-info/current-city', '.current-info', 'add', {city: cityData});
});
