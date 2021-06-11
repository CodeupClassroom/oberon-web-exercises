var map;
initMapbox();

// Initializes and sets all Mapbox dependencies
// ie: map, marker, popups, events
function initMapbox() {

    //create and authenticate map object
    mapboxgl.accessToken = MAPBOX_TOKEN;
    map = getMap();

    //create marker and attach map event to move marker
    let myMarker = setMarker([-97.1081, 32.7357]);
    setMapClickEvent(myMarker);

    //create geocoder, add to map object, and attach event to move marker
    let myGeocoder = getGeocoder();
    setGeocoderToMap(myGeocoder);
    setGeocoderEvent(myGeocoder, myMarker);
}

// Creates and returns a new instance of the mapboxgl.Map object, with initial properties set
function getMap() {
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [-97.1081, 32.7357],
        zoom: 12
    });
}

// Creates the maboxgl.Marker, sets the point, and adds to the maboxgl.Map
function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point)
                                .addTo(map);
}

// Adds click event to map with a callback
// which changes the location of marker
// based on where the user clicks
function setMapClickEvent(marker) {
    map.on('click', function (event) {

        if (marker.getLngLat().lat === event.lngLat.lat){
            return;
        }

        marker.setLngLat(event.lngLat)
        console.log(event.lngLat)
        let point = [event.lngLat.lng, event.lngLat.lat];

        getReverseGeocode(point, marker);

    })
}

// Creates and returns a new mapboxgl.GeoCoder (search box)
function getGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

// Adds mapboxgl.Geocoder object to map
function setGeocoderToMap(geocoder) {
    map.addControl(geocoder);
}

// Adds 'result' event listener to mapboxgl.Geocoder
// and sets new marker location to location of geocoder result
function setGeocoderEvent(geocoder, marker) {
    geocoder.on("result", function (event) {
        marker.setLngLat(event.result.geometry.coordinates)
        marker.setPopup(getPopup(event.result.place_name))
              .togglePopup();
    })
}

// Creates and returns a new mapboxgl.Popup object, sets its html, and adds to map
function getPopup(textDetails) {
    return new mapboxgl.Popup()
        .setHTML(`<p>${textDetails}</p>`)
        .addTo(map)
}

// Makes a call to the MapBox Geocoding endpoint
// Because this runs asynchronously, we use the success property's callback function to call for other actions to be taken
// In this case, we wait for the response and then get the popup and set it to the marker
function getReverseGeocode(point, marker) {

    $.ajax({
            url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${point}.json?access_token=${mapboxgl.accessToken}`,
            success: function (data) {
                marker.setPopup(getPopup(data.features[0].place_name))
                      .togglePopup();
            }
        }
    );
}
