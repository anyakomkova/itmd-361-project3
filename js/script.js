// Initialize and add the map
let map;

async function initMap() {

    const wasabiRamen = {lat: 38.872, lng: -104.996};
    const { map } = await google.maps.importLibrary("map");

    // The map, centered at Wasabi Ramen
  
    map = new Map(document.getElementById("map"), {
      center: wasabiRamen,
      zoom: 10,
      mapId: "RAMEN_MAP",
    });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: wasabiRamen,
    title: "Wasabi",
  });
}
  
  initMap();
