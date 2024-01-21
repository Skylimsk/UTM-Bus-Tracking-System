function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 1.559991, lng: 103.638258 }, // Set initial map center
        zoom: 12 // Set initial zoom level
    });

    var markers = [];
    var busRoutes = [
        [
            //Route Bus G3
            { lat: 1.5644249147426192, lng: 103.63847319398143}, //FKT Start here
            { lat: 1.5654161328343732, lng: 103.63816002408615},
            { lat: 1.5665370585612512, lng: 103.64035421128199},
            { lat: 1.5603245546237905, lng: 103.64159227716759}, //P19
            { lat: 1.5580116037609193, lng: 103.64020872621751}, //P19a 
            { lat: 1.5597270142182693, lng: 103.63475255366706},
            { lat: 1.5612349481115049, lng: 103.6324433898957}, //Arked Cengal
            { lat: 1.5617196965218783, lng: 103.62914429271736},
            { lat: 1.5624362190067675, lng: 103.62763003853843 }, 
            { lat: 1.5636346051639078, lng: 103.62745535156341 }, 
            { lat: 1.563771563535963, lng: 103.62946938967522 }, 
            { lat: 1.5630179829942783, lng: 103.62960626197275},
            { lat: 1.5630652875578668, lng: 103.63033803023357 },
            { lat: 1.563907187638053, lng: 103.63006712712198 },
            { lat: 1.5643678135349428, lng: 103.63198361888682 }, 
            { lat: 1.5649966124581447, lng: 103.63403367382301},
            { lat: 1.5653945780360408, lng: 103.63473091740087},
            { lat: 1.5643311616538471, lng: 103.63609929870154}, //KTDI M05 Here
            { lat: 1.5627199405974002, lng: 103.63644550737007},
            { lat: 1.5626996947782548, lng: 103.63914932914338}
                       
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
                    url: 'icon-G3.jpeg',
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
