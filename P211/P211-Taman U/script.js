function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 1.523024360572785, lng: 103.67949572556913 }, // Set initial map center
        zoom: 13 // Set initial zoom level
    });

    var markers = [];
    var busRoutes = [
        [
            //Route Bus P211(Taman U)
            { lat: 1.49538, lng: 103.74338}, //Larkin Sentral
            { lat: 1.49167, lng: 103.74089}, //Dewan JKR
            { lat: 1.48845, lng: 103.72762 }, //Kampung Baru Emapt Setenfah Skudai Kanan
            { lat: 1.48675, lng: 103.72430 }, //Taman Tasek
            { lat: 1.48882, lng: 103.71242 }, //Bandar Baru Uda(OPP)
            { lat: 1.49248, lng: 103.70707 }, //Klinik Kesihatan Tampoi
            { lat: 1.49670, lng: 103.70121 }, //Kampung Pasir
            { lat: 1.49891, lng: 103.69803}, //Sekolah Kebangsaan Kampung Pasir
            { lat: 1.50087, lng: 103.69532}, //Kampung Sri Jaya
            { lat: 1.50814, lng: 103.68916}, //KIP Mart
            { lat: 1.51618, lng: 103.68365}, //Paradigm Mall (OPP)
            { lat: 1.52299, lng: 103.67896}, //Taman Sutera Utama
            { lat: 1.52794, lng: 103.67045}, //SJK( C ) Kua Kuang
            { lat: 1.53500, lng: 103.66475}, //Kampung Skudai
            { lat: 1.53648, lng: 103.66344}, //MBIP
            { lat: 1.53966, lng: 103.66051}, //Sekolah Kebangsaan Skudai Batu 10
            { lat: 1.54488, lng: 103.65728}, //Shell Taman Sri Skudai
            { lat: 1.54858, lng: 103.65410}, //SMK Skudai
            { lat: 1.54960, lng: 103.65181}, //Taman Skudai
            { lat: 1.55970, lng: 103.63479 }, //UTM CP
            { lat: 1.56289, lng: 103.63638 }, //UTM FKA
            { lat: 1.56264, lng: 103.63914 }, //UTM N24
            { lat: 1.56025, lng: 103.64160}, //UTM P07
            { lat: 1.55803, lng: 103.64026}, //UTM P19a
            { lat: 1.54186, lng: 103.62971}, //AEON Taman U (OPP)
            { lat: 1.53849, lng: 103.62872}, //Terminal Taman U                      
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
