var renderTemplate = function(name, el, json, callback) {
  var url = '/templates/' + name + '.html';
  callback = callback || function () {};
  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'html',
    success: function(data) {
      var tmpl = _.template(data);
      var html = tmpl(json);
      $(el).append(html);
      callback(json);
    }
  });
};

window.renderTemplate = renderTemplate;
