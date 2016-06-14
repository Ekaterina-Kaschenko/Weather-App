$(function() {
  var screenHeight = window.innerHeight,
    screenWidth = window.innerWidth;

  function sunTraektoria(x, y) {
    var radius, h, alpha, beta, gamma, phi, sun, radiusSun;

    sun = $('.sun');
    radiusSun = parseFloat(sun.css('height')) / 2;
    h = screenHeight / 2;
    if (screenHeight > screenWidth) {
      h = screenHeight / 2;
    }
    radius = h / 2 + Math.pow(screenWidth, 2) / (8 * h);
    alpha = 2 * Math.acos((radius - h) / radius);
    gamma = 2 * Math.asin(radiusSun / (2 * radiusSun));
    phi = alpha + 2 * gamma;
    beta = Math.PI / 2 - phi / 2;

    x = screenWidth / 2;// trajectory of center
    y = screenHeight + radius - h; // trajectory of center

    for (var i = 0; i < 1; i += 0.002) {
      sun.animate({
        left: x - radius * Math.cos(beta + phi * i),
        top: y - radius * Math.sin(beta + phi * i)

      }, 10);
    }
  }

  sunTraektoria(screenWidth, screenHeight);
});


