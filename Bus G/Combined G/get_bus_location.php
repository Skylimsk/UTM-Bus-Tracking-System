<?php
$busData = [
    [
        'name' => 'Bus G1',
        'lat' => 1.5597270142182693,
        'lng' => 103.63475255366706
    ],
    [
        'name' => 'Bus G2',
        'lat' => 1.5636346051639078,
        'lng' => 103.62745535156341
    ],
    [
        'name' => 'Bus G3',
        'lat' => 1.5644249147426192,
        'lng' => 103.63847319398143 
    ]

];

header('Content-Type: application/json');
echo json_encode($busData);
?>