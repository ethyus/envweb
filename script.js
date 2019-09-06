require(["esri/Map",
    "esri/views/MapView",
    "esri/layers/TileLayer"
], function(Map, MapView, TileLayer) {
    var map = new Map({
        basemap: "streets"
    });
    var view = new MapView({
        container: "viewDiv", // Reference to the scene div created in step 5
        map: map, // Reference to the map object created before the scene
        zoom: 3, // Sets zoom level based on level of detail (LOD)
        center: [15, 65], // Sets center point of view using longitude,latitude
        minScale: 490
    });
    var protectedarea = new TileLayer({
        url: "http://ec2-54-204-216-109.compute-1.amazonaws.com:6080/arcgis/rest/services/wdpa/wdpa/MapServer",

    });
    map.add(protectedarea);
});