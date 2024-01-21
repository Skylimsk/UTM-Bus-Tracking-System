function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 1.559991, lng: 103.638258 }, // Set initial map center
        zoom: 16 // Set initial zoom level
    });

    var markers = [];
    var busRoutes = [
        [
            //Route Bus C1
            { lat: 1.5603863412809642, lng: 103.64889728035999}, //K10
            { lat: 1.5586801614928818, lng: 103.64927548764577},  //K9
            { lat: 1.5547382149665407, lng: 103.64844327358087},  //KTC Start here (S47)
            { lat: 1.555224953009357, lng: 103.64682035508731},  //KTC S04
            { lat: 1.5551932462691325, lng: 103.64476418778969}, //KTC S02
            { lat: 1.5580125094633928, lng: 103.64022551062934}, //FKE P19
            { lat: 1.5597270142182693, lng: 103.63475255366706}, //CP
            { lat: 1.561254881177892, lng: 103.6365571739043}, //D01
            { lat: 1.5615322356267183, lng: 103.63797194103779},
            { lat: 1.5610068217257924, lng: 103.63949205608415}, //E01
            { lat: 1.556695601884112, lng: 103.64259930696532}, //KTC to K10 Start here
            { lat: 1.554979140402175, lng: 103.64421421948214}, //S15
            { lat: 1.5550607908279634, lng: 103.64761837949185}, //Court near to S43
            { lat: 1.554902226358791, lng: 103.64801416761829}, //S43
            { lat: 1.558680089510581, lng: 103.64908066272476}, // Oppo K9
            { lat: 1.5603863412809642, lng: 103.64889728035999}
            
        ],
    ];
    var busIndex = 0;
    var routeIndex = 0;
    

    function updateBusLocation() {
        var now = new Date();
        var dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        var hour = now.getHours();
    

        if (dayOfWeek >= 0 && dayOfWeek <= 7 && hour >= 7 && hour <= 18) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        var busData = JSON.parse(xhr.responseText);
                        updateMap(busData);
                    }
                }
            };
            xhr.open('GET', 'get_bus_location.php', true);
            xhr.send();
        }
    }
    

    function updateMap(busData) {
        // Remove previous bus markers from the map
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // Get the current bus location based on the bus index and route index
        var currentLocation = busRoutes[busIndex][routeIndex];

        // Add markers for each bus
        busData.forEach(function (bus) {
            var marker = new google.maps.Marker({
                position: currentLocation,
                map: map,
                icon: {
                    url: 'icon-C1.jpeg',
                    scaledSize: new google.maps.Size(40, 40) // Set the size of the bus icon
                },
                title: bus.name
            });
            markers.push(marker);

            // Update the route index for the next bus location
            routeIndex = (routeIndex + 1) % busRoutes[busIndex].length;
        });

        // Update the bus index for the next bus
        busIndex = (busIndex + 1) % busRoutes.length;
    }

    updateBusLocation();
    setInterval(updateBusLocation, 10000); // Update bus location every 20 seconds
}
