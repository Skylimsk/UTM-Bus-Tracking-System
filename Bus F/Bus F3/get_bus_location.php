<?php
$busData = [
    [
        'name' => 'Bus F3',
        'lat' => 1.5580098194330902,
        'lng' => 103.6402236269778
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
