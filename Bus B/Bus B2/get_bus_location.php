<?php
$busData = [
    [
        'name' => 'Bus B2',
        'lat' => 1.5644579259965699, 
        'lng' => 103.653387494133
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
