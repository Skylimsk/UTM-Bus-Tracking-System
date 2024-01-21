<?php
$busData = [
    [
        'name' => 'Bus F2',
        'lat' => 1.5611928518356433,
        'lng' => 103.63252574299217
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
