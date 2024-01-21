function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 1.559991, lng: 103.638258 },
        zoom: 16
    });

    var markers = [];
    var busRoutes = [
        [
            //Route Bus E1
            { lat: 1.5755802205964098, lng: 103.61967634722234}, //KDOJ
            { lat: 1.5726880079023646, lng: 103.62094000242122 }, //Opp KLG
            { lat: 1.5664791107175131, lng: 103.62711597091308}, //Opp KDSE
            { lat: 1.558683156617396, lng: 103.62771395529154 }, //PKU
            { lat: 1.5578064388788055, lng: 103.62932738220668}, //H16
            { lat: 1.5594466548224728, lng: 103.63182474598784 }, //H01
            { lat: 1.5594796171253842, lng: 103.6329851367633}, //Next to Arked Meranti
            { lat: 1.5597063236277235, lng: 103.63475148751571},  //CP
            { lat: 1.562725363344942, lng: 103.63644078911703}, //FKA
            { lat: 1.5627016269110652, lng: 103.6391453009265}, //N24
            { lat: 1.5603267375390375, lng: 103.64160863433918}, //P01
            { lat: 1.556695601884112, lng: 103.64259930696532}, //KTC to K10 Start here
            { lat: 1.554979140402175, lng: 103.64421421948214}, //S15
            { lat: 1.5550607908279634, lng: 103.64761837949185}, //Court near to S43
            { lat: 1.554902226358791, lng: 103.64801416761829}, //S43
            { lat: 1.5644579259965699, lng: 103.653387494133}, //T02
            { lat: 1.5623828208114294, lng: 103.65596196425754}, //T06
            { lat: 1.560262208840294, lng: 103.65629179909186}, //T08
            { lat: 1.5547382149665407, lng: 103.64844327358087},  //KTC Start here (S47)
            { lat: 1.555224953009357, lng: 103.64682035508731},  //KTC S04
            { lat: 1.5551932462691325, lng: 103.64476418778969}, //KTC S02
            { lat: 1.5580098194330902, lng: 103.6402236269778}, //P19a
            { lat: 1.5593683508319105, lng: 103.63281648793283}, //G11
            { lat: 1.5582229068742635, lng: 103.6301562248394}, //G17
            { lat: 1.5583417762693144, lng: 103.62773986176967}, //Opp PKU
            { lat: 1.5665946524936778, lng: 103.62693472263548}, //KDSE
            { lat: 1.5725800202023386, lng: 103.62084878138073} //KLG
        ],
        [
           //Route Bus E2
             
           { lat: 1.5578064388788055, lng: 103.62932738220668}, //H16
           { lat: 1.5594466548224728, lng: 103.63182474598784 }, //H01
           { lat: 1.5594796171253842, lng: 103.6329851367633}, //Next to Arked Meranti
           { lat: 1.5597063236277235, lng: 103.63475148751571},  //CP
           { lat: 1.562725363344942, lng: 103.63644078911703}, //FKA
           { lat: 1.5627016269110652, lng: 103.6391453009265}, //N24
           { lat: 1.5603267375390375, lng: 103.64160863433918}, //P01
           { lat: 1.556695601884112, lng: 103.64259930696532}, //KTC to K10 Start here
           { lat: 1.554979140402175, lng: 103.64421421948214}, //S15
           { lat: 1.5550607908279634, lng: 103.64761837949185}, //Court near to S43
           { lat: 1.554902226358791, lng: 103.64801416761829}, //S43
           { lat: 1.5644579259965699, lng: 103.653387494133}, //T02
           { lat: 1.5623828208114294, lng: 103.65596196425754}, //T06
           { lat: 1.560262208840294, lng: 103.65629179909186}, //T08
           { lat: 1.5547382149665407, lng: 103.64844327358087},  //KTC Start here (S47)
           { lat: 1.555224953009357, lng: 103.64682035508731},  //KTC S04
           { lat: 1.5551932462691325, lng: 103.64476418778969}, //KTC S02
           { lat: 1.5580098194330902, lng: 103.6402236269778}, //P19a
           { lat: 1.5593683508319105, lng: 103.63281648793283}, //G11
           { lat: 1.5582229068742635, lng: 103.6301562248394}, //G17
           { lat: 1.5583417762693144, lng: 103.62773986176967}, //Opp PKU
           { lat: 1.5665946524936778, lng: 103.62693472263548}, //KDSE
           { lat: 1.5725800202023386, lng: 103.62084878138073}, //KLG
           { lat: 1.5755802205964098, lng: 103.61967634722234}, //KDOJ
           { lat: 1.5726880079023646, lng: 103.62094000242122 }, //Opp KLG
           { lat: 1.5664791107175131, lng: 103.62711597091308}, //Opp KDSE
           { lat: 1.558683156617396, lng: 103.62771395529154 } //PKU
        ]
        
    ];

    var busIcons = [
        // Icon for Bus E1
        {
            url: 'icon-E1.jpeg',
            scaledSize: new google.maps.Size(40, 40)
        },
        // Icon for Bus E2
        {
            url: 'icon-E2.jpeg',
            scaledSize: new google.maps.Size(40, 40)
        }
    ];

    var busIndices = [0, 0, 0]; // Separate bus indices for each bus
    var routeIndices = [0, 0, 0]; // Separate route indices for each bus

    function updateBusLocation() {
        var now = new Date();
        var dayOfWeek = now.getDay();
        var hour = now.getHours();

        if (dayOfWeek >= 0 && dayOfWeek <= 7 && hour >= E && hour <= 18) {
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
