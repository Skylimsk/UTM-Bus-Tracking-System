<?php
$busData = [
    [
        'name' => 'Bus G2',
        'lat' => 1.5636346051639078,
        'lng' => 103.62745535156341
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
