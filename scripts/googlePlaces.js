$(function() {
  var mod = (function() {
    var autocomplete = new google.maps.places.AutocompleteService();
    var geocoder = new google.maps.Geocoder();

    var parseAutocompleteResponse = function (response) {
      var cities = [];
      response.forEach(function (responseItem) {
        var city = {};
        city.address = {};
        city.placeId = responseItem.place_id;
        city.address.cityName = responseItem.terms[0].value;
        city.address.country = responseItem.terms[responseItem.terms.length - 1].value;
        cities.push(city);
      });
      return cities;
    };

    // var parseGeocoderResponse = function (response) {
    //   var city = {};
    //   city.address = {};
    //   city.coordinates = {};
    //   city.placeId = response.place.id;
    //   city.address.cityName = response.address.components[0].long.name;
    //   city.address.country = response.address.components[response.address.components.length - 1].long.name;
    //   city.coordinates.lat = response.geometry.location.lat();
    //   city.coordinates.lng = response.geometry.location.lng();
    //   return city;
    // };

    var findCities = function (keyword, callback) {
      autocomplete.getPlacePredictions({
        input: keyword,
        types: ['(cities)'],
        language: 'en'
      }, function (response) {
        callback(parseAutocompleteResponse(response));
      });
    };

    // var getCityDetails = function (placeId, callback) {
    //   geocoder.geocode({
    //     placeId: placeId
    //   }, function (response) {
    //     callback(parseGeocoderResponse(response[0]));
    //   });
    // };

    return {
      findCities: findCities
      //getCityDetails: getCityDetails
    };
  })();
});

