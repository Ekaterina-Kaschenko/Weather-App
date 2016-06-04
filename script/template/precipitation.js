var precipitation = [
  {
    icon: 'icon-rain-snow',
    info: '50%'
  },
  {
    icon: 'icon-rain-snow',
    info: '50%'
  },
  {
    icon: 'icon-rain-snow',
    info: '50%'
  },
  {
    icon: 'icon-rain-snow',
    info: '50%'
  }
];


renderTemplate('currentInfo/dayInfo', '.current-info', { info: precipitation, type: 'week' }, function () {
  $('.scrollbar-macosx').scrollbar();
});
