<?php
$busData = [
    [
        'name' => 'Bus C1',
        'lat' => 1.5603863412809642, 
        'lng' => 103.64889728035999
    ],
    [
        'name' => 'Bus C2',
        'lat' => 1.5580125094633928, 
        'lng' => 103.64022551062934
    ],
    [
        'name' => 'Bus C3',
        'lat' => 1.5610068217257924,
        'lng' => 103.63949205608415
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
