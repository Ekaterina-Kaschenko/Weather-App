$(function() {
  var dayData = [
    {
      time: '6:22',
      icon: 'icon-rain-snow',
      temperature: '-2'
    },
    {
      time: '6:22',
      icon: 'icon-rain-snow',
      temperature: '-2'
    },
    {
      time: '6:22',
      icon: 'icon-rain-snow',
      temperature: '-2'
    },
    {
      time: '6:22',
      icon: 'icon-rain-snow',
      temperature: '-2'
    },
    {
      time: '6:22',
      icon: 'icon-rain-snow',
      temperature: '-2'
    },
    {
      time: '6:22',
      icon: 'icon-rain-snow',
      temperature: '-2'
    },
    {
      time: '6:22',
      icon: 'icon-rain-snow',
      temperature: '-2'
    },
    {
      time: '6:22',
      icon: 'icon-rain-snow',
      temperature: '-2'
    }
  ];

  window.renderTemplate('current-info/day-info', '.current-info', 'add', { info: dayData, type: 'day' }, function () {
    $('#day-scrollbar').scrollbar();
  });
});

