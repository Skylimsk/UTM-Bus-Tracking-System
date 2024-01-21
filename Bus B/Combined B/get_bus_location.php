<?php
$busData = [
    [
        'name' => 'Bus B1',
        'lat' => 1.5617196965218783,
        'lng' => 103.62914429271736
    ],
    [
        'name' => 'Bus B2',
        'lat' => 1.5644579259965699, 
        'lng' => 103.653387494133
    ],
    [
        'name' => 'Bus B3',
        'lat' => 1.560262208840294, 
        'lng' => 103.65629179909186
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
