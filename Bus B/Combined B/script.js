function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 1.559991, lng: 103.638258 },
        zoom: 16
    });

    var markers = [];
    var busRoutes = [
        [
            //Route Bus B1
           { lat: 1.5582504332039961, lng: 103.6466013933369 }, //U5
           { lat: 1.5603863412809642, lng: 103.64889728035999}, //K10
           { lat: 1.5586801614928818, lng: 103.64927548764577},  //K9
           { lat: 1.5644579259965699, lng: 103.653387494133}, //T02
           { lat: 1.5623828208114294, lng: 103.65596196425754}, //T06
           { lat: 1.560262208840294, lng: 103.65629179909186}, //T08
           { lat: 1.5603863412809642, lng: 103.64889728035999}, //K10
           { lat: 1.5586801614928818, lng: 103.64927548764577},  //K9
           { lat: 1.5587650335424927, lng: 103.64710122413277}//U6

        ],
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
           { lat: 1.5586801614928818, lng: 103.64927548764577} //K9
        ],
        [
             //Route Bus B3
           
           
           { lat: 1.5623828208114294, lng: 103.65596196425754},//T06
           { lat: 1.560262208840294, lng: 103.65629179909186}, //T08
           { lat: 1.5603863412809642, lng: 103.64889728035999}, //K10
           { lat: 1.5586801614928818, lng: 103.64927548764577},  //K9
           { lat: 1.5587650335424927, lng: 103.64710122413277}, //U6
           { lat: 1.5582504332039961, lng: 103.6466013933369 }, //U5
           { lat: 1.5603863412809642, lng: 103.64889728035999}, //K10
           { lat: 1.5586801614928818, lng: 103.64927548764577},  //K9
           { lat: 1.5644579259965699, lng: 103.653387494133}, //T02
           
        ]
        
    ];

    var busIcons = [
        // Icon for Bus B1
        {
            url: 'icon-B1.jpeg',
            scaledSize: new google.maps.Size(40, 40)
        },
        // Icon for Bus B2
        {
            url: 'icon-B2.jpeg',
            scaledSize: new google.maps.Size(40, 40)
        },
        // Icon for Bus B3
        {
            url: 'icon-B3.jpeg',
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
