<?php
$busData = [
    [
        'name' => 'Bus H',
        'lat' => 1.559710, 
        'lng' => 103.634789
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
