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
for (i in pos.track) {
	L.marker([parseFloat(pos.track[i].latitude),parseFloat(pos.track[i].longitude)], {icon: cusIcon}).addTo(map).bindPopup(pos.track[i].latitude+", "+pos.track[i].longitude);
};


//Functions to edit each feature
function popInfo(feature, layer) {
	// layer.bindPopup("<h3>ID: "+feature.properties.gp_id+"</h3><h3>Area: "+feature.properties.gp_area+"</h3><h4>Region: "+feature.properties.gp_region+"</h4><h4>Circle: "+feature.properties.gp_circle+"</h4>")
	layer.bindPopup("<h3>ID: "+feature.properties.t_id+"</h3><h3>Area: "+feature.properties.t_name+"</h3>")
};

function style(feature) {
	return {
			weight: 1,
			// color: "#000",
			// fillColor: "blue",
			// fillOpacity: 1
		}
	// if(feature.properties.t_id == "polygon2973"){
	// 	return {
	// 		fillColor: "red",
	// 		weight: 2,
	// 		opacity: 100,
	// 		color: "green",
	// 	}
	// }
};
