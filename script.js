// set access token
mapboxgl.accessToken = 'YOUR_ACCESS_TOKEN';

// create map instance
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-122.4194, 37.7749],
  zoom: 12
});

// add event listener for map click
map.on('click', function(e) {
  // add code for event action here
});
