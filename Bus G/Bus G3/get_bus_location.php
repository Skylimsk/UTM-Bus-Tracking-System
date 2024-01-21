<?php
$busData = [
    [
        'name' => 'Bus G3',
        'lat' => 1.5644249147426192,
        'lng' => 103.63847319398143 
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
