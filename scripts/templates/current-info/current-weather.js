var currentWeather = {
  weatherIcon: 'icon-cloudy',
  temperature: '-2',
  iconTime: 'icon-rain-snow',
  time: '6:20',
  description: 'some text'
};

renderTemplate('currentInfo/currentWeather', '.current-info', {weather: currentWeather});
