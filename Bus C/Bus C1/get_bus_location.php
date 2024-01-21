<?php
$busData = [
    [
        'name' => 'Bus C1',
        'lat' => 1.5603863412809642, 
        'lng' => 103.64889728035999
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
