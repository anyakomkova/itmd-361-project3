// Initialize and add the map
let map;

function initMap() {
  // The location of Wasabi Ramen
  var wasabiMap = new google.maps.Map(document.getElementById('map'), {
  // The map, centered at Wasabi Ramen
    zoom: 13,
    center: {lat: 41.920119875987375, lng: -87.68949370382387},
  });

  let marker = new google.maps.Marker({
    position: {lat: 41.920119875987375, lng: -87.68949370382387},
    map: wasabiMap,
    title: 'Wasabi Ramen'
  });

  const location = [{lat: 41.920119875987375, lng: -87.68949370382387}, "Wasabi Ramen", "media/"],
}

initMap();

