<?php
$busData = [
    [
        'name' => 'Bus C2',
        'lat' => 1.5580125094633928, 
        'lng' => 103.64022551062934
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
