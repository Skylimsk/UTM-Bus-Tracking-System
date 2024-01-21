function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 1.523024360572785, lng: 103.67949572556913 }, // Set initial map center
        zoom: 13 // Set initial zoom level
    });

    var markers = [];
    var busRoutes = [
        [
            //Route Bus P211(Larkin)
            { lat: 1.53849, lng: 103.62872}, //Terminal Taman U
            { lat: 1.54235, lng: 103.62968 }, //AEON Taman U
            { lat: 1.55970, lng: 103.63479 }, //UTM CP
            { lat: 1.56289, lng: 103.63638 }, //UTM FKA
            { lat: 1.56264, lng: 103.63914 }, //UTM N24
            { lat: 1.56025, lng: 103.64160}, //UTM P07
            { lat: 1.55803, lng: 103.64026}, //UTM P19a
            { lat: 1.55535, lng: 103.64099}, //UTM Equine Park
            { lat: 1.54457, lng: 103.65778}, //Shell Taman Sri Skudai (OPP)
            { lat: 1.54141, lng: 103.65956}, //Skudai Parade
            { lat: 1.52816, lng: 103.67095}, //Taman UDA Tun Aminah
            { lat: 1.52341, lng: 103.67909}, //Taman Impian Skudai
            { lat: 1.51925, lng: 103.68206}, //Taman Industri Skudai
            { lat: 1.51476, lng: 103.68524}, //Paradigm Mall
            { lat: 1.51211, lng: 103.68706}, //Taman Dato Penggawa Barat
            { lat: 1.50886, lng: 103.68929}, //Taman Johor
            { lat: 1.50082, lng: 103.69598}, //Taman Kobena
            { lat: 1.49884, lng: 103.69886}, //Giant Tampoi
            { lat: 1.49695, lng: 103.70174}, //Taman Tampoi
            { lat: 1.49575, lng: 103.70359}, //Angsana Mall
            { lat: 1.48957, lng: 103.71214}, //Bandar Baru Uda
            { lat: 1.48708, lng: 103.72439}, //Taman Suria Muafakat
            { lat: 1.48875, lng: 103.72763}, //Pusat Kokurikulum Kem Tasek Utara
            { lat: 1.49538, lng: 103.74338}, //Larkin Sentral
                       
        ],
    ];
    var busIndex = 0;
    var routeIndex = 0;
    

    function updateBusLocation() {
        var now = new Date();
        var dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        var hour = now.getHours();
    

        if (dayOfWeek >= 0 && dayOfWeek <= 7 && hour >= 6 && hour <= 19) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        var busData = JSON.parse(xhr.responseText);
                        updateMap(busData);
                    }
                }
            };
            xhr.open('GET', 'get_larkin.php', true);
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
                    url: 'BMJ.png',
                    scaledSize: new google.maps.Size(60, 40) // Set the size of the bus icon
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
