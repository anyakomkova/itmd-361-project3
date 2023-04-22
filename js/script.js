// Initialize and add the map

let map;

async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("map");
  
    map = new Map(document.getElementById("map"), {
      center: {lat: 38.872, lng: -104.996},
      zoom: 10,
    });

  }
  
  initMap();
