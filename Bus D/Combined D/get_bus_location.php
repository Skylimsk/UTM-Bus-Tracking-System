<?php
$busData = [
    [
        'name' => 'Bus D1',
        'lat' => 1.5755802205964098,
        'lng' => 103.61967634722234
    ],
    [
        'name' => 'Bus D2',
        'lat' => 1.5597063236277235,
        'lng' => 103.63475148751571
    ]
];

header('Content-Type: application/json');
echo json_encode($busData);
?>