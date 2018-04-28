// Store our API endpoint inside queryUrl
var queryUrl = "https://raw.githubusercontent.com/nationalparkservice/data/gh-pages/base_data/boundaries/parks/parks.geojson";


// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

function createFeatures(parkData) {
  console.log(parkData);
  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the park
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.UNIT_NAME +
      "</h3><hr><p>" + "State: " + feature.properties.STATE + "</p>" + 
      "<p>" + "Type: " + feature.properties.UNIT_TYPE + "</p>");
  }

  // Create a GeoJSON layer containing the features array on the parkData object
  // Run the onEachFeature function once for each piece of data in the array
  var parks = L.geoJSON(parkData, {
    onEachFeature: onEachFeature
  });

  // Sending our parks layer to the createMap function
  createMap(parks);
}

function createMap(parks) {

  // Define variables for our base layers
  let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
  let accessToken = 'pk.eyJ1IjoicmluY2tkIiwiYSI6ImNpamc3ODR1aDAxMmx0c2x0Zm9lc3E1OTAifQ.pIkP7PdJMrR5TBIp93Dlbg';
  let parkMap = L.tileLayer(mapboxUrl, {id: 'mapbox.outdoors', maxZoom: 20, accessToken: accessToken});
  let satelliteMap = L.tileLayer(mapboxUrl, {id: 'mapbox.streets-satellite', maxZoom: 20, accessToken: accessToken});

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": parkMap,
    "Satellite Map": satelliteMap
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

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}

