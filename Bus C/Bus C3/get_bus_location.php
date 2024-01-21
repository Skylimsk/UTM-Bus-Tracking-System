<?php
$busData = [
    [
        'name' => 'Bus C3',
        'lat' => 1.5610068217257924,
        'lng' => 103.63949205608415
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
