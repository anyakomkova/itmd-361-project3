// Initialize and add the map
let map;

function initMap() {
  // The location of Wasabi Ramen
  var wasabiMap = new google.maps.Map(document.getElementById('d2233a8408ed3065'), {
  // The map, centered at Wasabi Ramen
    zoom: 10,
    center: {lat: 41.920119875987375, lng: -87.68949370382387},
    mapId:'d2233a8408ed3065',
  });

  // Add an info window to the Wasabi Ramen marker
    var wasabiRamenInfo = new google.maps.InfoWindow({
    content: '<h3>Wasabi Ramen</h3><p>A ramen spot located in Logan Suare</p>4.6 Well-loved by the locals<p>'
    });
    wasabiRamenInfo.open(map, wasabiMap);
}

