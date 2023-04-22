// Initialize and add the map

function initMap() {
 var map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 38.872, lng: -104.996},
    zoom: 10
  });

  var wasabiMarker = new google.maps.Marker({
    position: {lat: 38.872, lng: -104.996},
    map: map,
    title: 'Wasabi Ramen Logan Square'
  });
}

