; //element id = map, data-zoom, data-marker, data-lats, data-lons, data-title, data-address
var mapElement = document.getElementById('map');
if (window.mapElement) {
    var map,
        dSet = mapElement.dataset,

        lats = JSON.parse(dSet.lats),
        lons = JSON.parse(dSet.lons),

        titles = JSON.parse(dSet.title),
        address = JSON.parse(dSet.address); 

    function initialize() {
        map = new google.maps.Map(mapElement, {
            center: new google.maps.LatLng(lats[0], lons[0]),
            zoom: parseFloat(dSet.zoom)
        });

        lats.forEach(function (el, i, lats) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lats[i], lons[i]),
                icon: dSet.marker,
                map: map
            });

            var infowindow = new google.maps.InfoWindow({
                content: '<div class="bubble"><strong>' + titles[i] + '</strong><p>' + address[i] + '</p></div>'
            });

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });

            infowindow.open(map, marker);
        })
    }

    google.maps.event.addDomListener(window, 'load', initialize);
}