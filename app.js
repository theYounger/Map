var tileOpts = {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 15,
    id: "mapbox.light",
    accessToken: 'pk.eyJ1Ijoia3V5ZWhhcmEiLCJhIjoiY2l5bnZsbm5mMDAyNTRlbnpwbnpra2lwbyJ9.DmBIXGUHlZpZpU_MI8uMQQ',
};

// initialize map
var mymap = L.map("mapid").setView([36, -97], 4);

// add tiles to map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', tileOpts)
    .addTo(mymap);

// var myLayer = L.geoJSON().addTo(mymap);
// for(var i = 0; i < data.length; i++) {
//     if(data[i].geometry.coordinates.length === 2) {
//         myLayer.addData(data[i]);
//     }
// }