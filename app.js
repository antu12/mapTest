//Make a map variable and add it to a variable
var map = L.map('map').setView([23.534, 90.325], 7); //center, zoom, min-zoom, max-zoom
var icon = L.Icon.extend({
    options: {
        iconSize: [15,15]
    }
});
//Make Icons
var cusIcon = new icon({iconUrl: 'pin.png'});



//add a layer of OSM/Google Map to the map variable to make the map 

// OSM view
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
// 	attribution: '<img src="https://www.grameenphone.com/sites/default/files/favicon.ico">Grameenphone</img>'
// }).addTo(map);

// Google Streets View
googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: 'OBHAI'
}).addTo(map);

// Google Satelite
// googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3'],
//     attribution: '<img src="https://www.grameenphone.com/sites/default/files/favicon.ico">Grameenphone</img>'
// }).addTo(map); 

// Google Hybrid View
// googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3'],
//     attribution: '<img src="https://www.grameenphone.com/sites/default/files/favicon.ico">Grameenphone</img>'
// }).addTo(map);
 
// Google Terrain View
// googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3'],
//     attribution: '<img src="https://www.grameenphone.com/sites/default/files/favicon.ico">Grameenphone</img>'
// }).addTo(map);

// If map theme needs changes "Mapbox" has a lot of free thmes
// L.tileLayer('http:/{s}.tiles.mapbox.com/v3/ianmule.bg2v5cdi/{z}/{x}/{y}.png',{attribution: "Mapbox"}).addTo(map);

//Add GEOJSON data to the map
// L.geoJson(territory,{
// 	onEachFeature: popInfo, style,
// }).addTo(map);

//adding the marker
var latlng = Array();
for (i in pos.track) {
	point=[parseFloat(pos.track[i].latitude),parseFloat(pos.track[i].longitude)];
	latlng.push(point);
	L.marker(point, {icon: cusIcon}).addTo(map).bindPopup(pos.track[i].latitude+", "+pos.track[i].longitude);
};
var polyline = L.polyline(latlng, {color: 'blue'}).addTo(map);
map.fitBounds(polyline.getBounds());
