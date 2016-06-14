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

renderTemplate('currentInfo/dayInfo', '.current-info', { info: dayData, type: 'day' }, function () {
  $('#day-scrollbar').scrollbar();
});


