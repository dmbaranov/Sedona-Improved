function initialize() {
  var coords = {lat: 34.8544438, lng: -111.8301578};

  var mapCanvas = document.getElementById('footer__map');
  var mapOptions = {
    center: coords,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: false
  };

  var map = new google.maps.Map(mapCanvas, mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
