$(function() {
  var renderTemplate = function(name, el, type, json, callback) {
    type     = type || 'insert';
    callback = callback || function () {};
    var url  = '/templates/:name.html';

    $.ajax({
      url:      url.replace(':name', name),
      method:   'GET',
      dataType: 'html',
      success:  function(data) {
        var tmpl = _.template(data);
        var html = tmpl(json);
        if (type === 'insert') { $(el).html(html);   }
        if (type === 'add')    { $(el).append(html); }
        callback(json);
      }
    });
  };

  window.renderTemplate = renderTemplate;
});
