<?php
$busData = [
    [
        'name' => 'Bus A1',
        'lat' => 1.558779718785141, 
        'lng' => 103.64712401085824
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
