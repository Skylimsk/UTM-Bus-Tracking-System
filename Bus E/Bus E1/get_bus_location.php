<?php
$busData = [
    [
        'name' => 'Bus E1',
        'lat' => 1.5755802205964098, 
        'lng' => 103.61967634722234
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
