<?php
$busData = [
    [
        'name' => 'Bus B3',
        'lat' => 1.560262208840294, 
        'lng' => 103.65629179909186
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
