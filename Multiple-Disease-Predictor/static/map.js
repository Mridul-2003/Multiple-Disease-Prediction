<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjHn2bJQrgjelkrMdWpCSAktPnYcW-Qio"></script>

var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7749, lng: -122.4194},
    zoom: 12
  });

  var service = new google.maps.places.PlacesService(map);

  var request = {
    location: {lat: 37.7749, lng: -122.4194},
    radius: 5000,
    type: ['hospital']
  };
  
  service.nearbySearch(request, callback);
  
  function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      // Do something with the place data, such as creating a marker on the map
    }
  }
}
