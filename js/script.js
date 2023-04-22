// Initialize and add the map
let map;

function initMap() {
  // The location of Wasabi Ramen
  var map = new google.maps.Map(document.getElementById('map'), {
  // The map, centered at Wasabi Ramen
    zoom: 13,
    center: {lat: 41.91951, lng: -87.69151},
  });

  const marker = new google.maps.Marker({
    position: {lat: 41.91951, lng: -87.69151},
    map: map,
    title: 'Wasabi Ramen'
  });

}

initMap();

