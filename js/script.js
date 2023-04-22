// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { 41.941182201383675: -87.69221501336075 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  wasabiMap = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: wasabiMap,
    position: position,
    title: "Wasabi Ramen Logan Square",
  });

  // Add an info window to the Empire State Building marker
    var wasabiRamenInfo = new google.maps.InfoWindow({
    content: '<h2>Wasabi Ramen</h2><p>A ramen spot located in Logan Suare</p>4.6 Well-loved by the locals<p>'
    });
    wasabiRamenInfo.open(map, wasabiMap);
}

initMap();
