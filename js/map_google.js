function initialize() {
  var mapOptions = {
    zoom: 16,
    scrollwheel: false,
    center: new google.maps.LatLng(55.715614, 37.100634)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);

  // var image = 'img/icon.png';
  var myLatLng = new google.maps.LatLng(55.715614, 37.100634);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'TEXT'
      // icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initialize);