<?php
$busData = [
    [
        'name' => 'P211 (Taman U)', 
        'lat' => 1.49538,
        'lng' => 103.74338
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
