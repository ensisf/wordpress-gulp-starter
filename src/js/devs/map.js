 //element id = map, data-zoom, data-marker, data-lats, data-lons, data-title, data-address
 export default function () {
     const mapElement = document.getElementById('map');
     
     if (mapElement) {
         const dSet = mapElement.dataset;

         const lats = JSON.parse(dSet.lats);
         const lons = JSON.parse(dSet.lons);

         const titles = JSON.parse(dSet.title);
         const address = JSON.parse(dSet.address);

         function initialize() {
            const map = new google.maps.Map(mapElement, {
                 center: new google.maps.LatLng(lats[0], lons[0]),
                 zoom: parseFloat(dSet.zoom)
             });

             lats.forEach((el, i, lats) => {
                 const marker = new google.maps.Marker({
                     position: new google.maps.LatLng(lats[i], lons[i]),
                     icon: dSet.marker,
                     map: map
                 });

                 const infowindow = new google.maps.InfoWindow({
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
 }