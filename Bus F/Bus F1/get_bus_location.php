<?php
$busData = [
    [
        'name' => 'Bus F1',
        'lat' => 1.5617196965218783,
        'lng' => 103.62914429271736
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
