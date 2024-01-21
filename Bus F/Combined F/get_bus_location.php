<?php
$busData = [
    [
        'name' => 'Bus F1',
        'lat' => 1.5617196965218783,
        'lng' => 103.62914429271736
    ],
    [
        'name' => 'Bus F2',
        'lat' => 1.5611928518356433,
        'lng' => 103.63252574299217
    ],
    [
        'name' => 'Bus F3',
        'lat' => 1.5580098194330902,
        'lng' => 103.6402236269778
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
