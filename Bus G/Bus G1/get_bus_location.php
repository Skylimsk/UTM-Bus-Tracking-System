<?php
$busData = [
    [
        'name' => 'Bus G1',
        'lat' => 1.5597270142182693,
        'lng' => 103.63475255366706
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
