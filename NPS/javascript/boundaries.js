
var queryUrl = "https://raw.githubusercontent.com/nationalparkservice/data/gh-pages/base_data/boundaries/parks/parks.geojson";

d3.json(queryUrl, function(data) {
  createFeatures(data.features);
});

function createFeatures(parkData) {
  console.log(parkData);

  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.UNIT_NAME +
      "</h3><hr><p>" + "State: " + feature.properties.STATE + "</p>" + 
      "<p>" + "Type: " + feature.properties.UNIT_TYPE + "</p>");
  }

  var parks = L.geoJSON(parkData, {
    onEachFeature: onEachFeature
  });

  createMap(parks);
}

function createMap(parks) {

  let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
  let accessToken = 'pk.eyJ1IjoicmluY2tkIiwiYSI6ImNpamc3ODR1aDAxMmx0c2x0Zm9lc3E1OTAifQ.pIkP7PdJMrR5TBIp93Dlbg';
  let parkMap = L.tileLayer(mapboxUrl, {id: 'mapbox.streets-satellite', maxZoom: 20, accessToken: accessToken});
  let satelliteMap = L.tileLayer(mapboxUrl, {id: 'mapbox.outdoors', maxZoom: 20, accessToken: accessToken});

  var baseMaps = {
    "Satellite Map": parkMap,
    "Streets Map": satelliteMap
  };

  var overlayMaps = {
    parks: parks
  };

  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [parkMap, parks, satelliteMap]
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}

