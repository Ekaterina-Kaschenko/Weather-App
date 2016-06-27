$(function() {
  var weekData = [
    {
      day: 'Today',
      icon: 'icon-rain-snow',
      minTemperature: '41',
      maxTemperature: '65'
    },
    {
      day: 'Today',
      icon: 'icon-rain-snow',
      minTemperature: '41',
      maxTemperature: '65'
    },
    {
      day: 'Today',
      icon: 'icon-rain-snow',
      minTemperature: '41',
      maxTemperature: '65'
    },
    {
      day: 'Today',
      icon: 'icon-rain-snow',
      minTemperature: '41',
      maxTemperature: '65'
    },
    {
      day: 'Today',
      icon: 'icon-rain-snow',
      minTemperature: '41',
      maxTemperature: '65'
    },
    {
      day: 'Today',
      icon: 'icon-rain-snow',
      minTemperature: '41',
      maxTemperature: '65'
    },
    {
      day: 'Today',
      icon: 'icon-rain-snow',
      minTemperature: '41',
      maxTemperature: '65'
    }
  ];

  window.renderTemplate('week-info/week-info', '.week-info', 'add', {week: weekData});
});
