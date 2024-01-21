function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 1.559991, lng: 103.638258 },
        zoom: 16
    });

    var markers = [];
    var busRoutes = [
        [
            // Route for Bus F2
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
            { lat: 1.5643311616538471, lng: 103.63609929870154},
            { lat: 1.561254881177892, lng: 103.6365571739043},
            { lat: 1.5615322356267183, lng: 103.63797194103779},
            { lat: 1.5610068217257924, lng: 103.63949205608415},
            { lat: 1.5580098194330902, lng: 103.6402236269778},
            { lat: 1.5611928518356433, lng: 103.63252574299217},
        ],
        [
            // Route for Bus F3
            { lat: 1.5611928518356433, lng: 103.63252574299217},
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
            { lat: 1.5643311616538471, lng: 103.63609929870154},
            { lat: 1.561254881177892, lng: 103.6365571739043},
            { lat: 1.5615322356267183, lng: 103.63797194103779},
            { lat: 1.5610068217257924, lng: 103.63949205608415},
            { lat: 1.5580098194330902, lng: 103.6402236269778},
        ],
        [
            // Route for Bus F3
            { lat: 1.5580098194330902, lng: 103.6402236269778},
            { lat: 1.5611928518356433, lng: 103.63252574299217},
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
            { lat: 1.5643311616538471, lng: 103.63609929870154},
            { lat: 1.561254881177892, lng: 103.6365571739043},
            { lat: 1.5615322356267183, lng: 103.63797194103779},
            { lat: 1.5610068217257924, lng: 103.63949205608415},
            { lat: 1.5580098194330902, lng: 103.6402236269778},
        ]
        
    ];

    var busIcons = [
        // Icon for Bus F1
        {
            url: 'icon-F1.jpeg',
            scaledSize: new google.maps.Size(40, 40)
        },
        // Icon for Bus F2
        {
            url: 'icon-F2.jpeg',
            scaledSize: new google.maps.Size(40, 40)
        },
        // Icon for Bus F3
        {
            url: 'icon-F3.jpeg',
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
