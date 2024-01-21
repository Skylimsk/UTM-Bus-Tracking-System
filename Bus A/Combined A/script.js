function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 1.559991, lng: 103.638258 },
        zoom: 16
    });

    var markers = [];
    var busRoutes = [
        [
            //Route Bus A1
            { lat: 1.558779718785141, lng: 103.64712401085824}, //U6 
            { lat: 1.5582504332039961, lng: 103.6466013933369 }, //U5
            { lat: 1.5596913681451503, lng: 103.6347644178383 }, //CP
            { lat: 1.561254881177892, lng: 103.6365571739043}, //D01
            { lat: 1.5615322356267183, lng: 103.63797194103779},
            { lat: 1.5610068217257924, lng: 103.63949205608415}, //E01
            { lat: 1.556195209433989, lng: 103.64338197506402}, //UTMi
            { lat: 1.5582504332039961, lng: 103.6466013933369 }, //U5
            { lat: 1.558779718785141, lng: 103.64712401085824}, //U6  

        ],
        [
            //Route Bus A2
            { lat: 1.5596913681451503, lng: 103.6347644178383 }, //CP
            { lat: 1.561254881177892, lng: 103.6365571739043}, //D01
            { lat: 1.5615322356267183, lng: 103.63797194103779},
            { lat: 1.5610068217257924, lng: 103.63949205608415}, //E01
            { lat: 1.556195209433989, lng: 103.64338197506402}, //UTMi
            { lat: 1.5582504332039961, lng: 103.6466013933369 }, //U5
            { lat: 1.558779718785141, lng: 103.64712401085824}, //U6
            { lat: 1.5582504332039961, lng: 103.6466013933369 }, //U5 
        ]

    ];

    var busIcons = [
        // Icon for Bus A1
        {
            url: 'icon-A1.jpeg',
            scaledSize: new google.maps.Size(40, 40)
        },
        // Icon for Bus A2
        {
            url: 'icon-A2.jpeg',
            scaledSize: new google.maps.Size(40, 40)
        }
    ];

    var busIndices = [0, 0, 0]; // Separate bus indices for each bus
    var routeIndices = [0, 0, 0]; // Separate route indices for each bus

    function updateBusLocation() {
        var now = new Date();
        var dayOfWeek = now.getDay();
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

        busData.forEach(function (bus, index) {
            // Get the current bus location based on the bus index and route index
            var currentLocation = busRoutes[index][routeIndices[index]];

            var marker = new google.maps.Marker({
                position: currentLocation,
                map: map,
                icon: busIcons[index], // Use the corresponding icon for each bus
                title: bus.name
            });
            markers.push(marker);

            // Update the route index for the next bus location
            routeIndices[index] = (routeIndices[index] + 1) % busRoutes[index].length;
        });

        // Update the bus indices for the next buses
        busIndices = busIndices.map(function (index) {
            return (index + 1) % busRoutes.length;
        });
    }

    updateBusLocation();
    setInterval(updateBusLocation, 10000);
}
