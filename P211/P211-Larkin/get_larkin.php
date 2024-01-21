<?php
$busData = [
    [
        'name' => 'P211 (Larkin)',
        'lat' => 1.53849,
        'lng' => 103.62878
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
