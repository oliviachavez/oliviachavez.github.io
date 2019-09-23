function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: {lat:40.730610, lng: -73.935242}
    });
  
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
  }

