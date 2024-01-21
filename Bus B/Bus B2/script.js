function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 1.559991, lng: 103.638258 }, // Set initial map center
        zoom: 16 // Set initial zoom level
    });

    var markers = [];
    var busRoutes = [
        [
           //Route Bus B2
           
           { lat: 1.5644579259965699, lng: 103.653387494133}, //T02
           { lat: 1.5623828208114294, lng: 103.65596196425754}, //T06
           { lat: 1.560262208840294, lng: 103.65629179909186}, //T08
           { lat: 1.5603863412809642, lng: 103.64889728035999}, //K10
           { lat: 1.5586801614928818, lng: 103.64927548764577},  //K9
           { lat: 1.5587650335424927, lng: 103.64710122413277}, //U6
           { lat: 1.5582504332039961, lng: 103.6466013933369 }, //U5
           { lat: 1.5603863412809642, lng: 103.64889728035999}, //K10
           { lat: 1.5586801614928818, lng: 103.64927548764577},  //K9
            
        ],
    ];
    var busIndex = 0;
    var routeIndex = 0;

    function updateBusLocation() {
        var now = new Date();
        var dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        var hour = now.getHours();
    
        if (dayOfWeek >= 0 && dayOfWeek <= 7 && hour >= 7 && hour <= 18){
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
                    url: 'icon-B2.jpeg',
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
