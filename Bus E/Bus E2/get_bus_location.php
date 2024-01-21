<?php
$busData = [
    [
        'name' => 'Bus E2',
        'lat' => 1.5578064388788055, 
        'lng' => 103.62932738220668
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
