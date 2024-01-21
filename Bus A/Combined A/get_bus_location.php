<?php
$busData = [
    [
        'name' => 'Bus A1',
        'lat' => 1.558779718785141, 
        'lng' => 103.64712401085824
    ],
    [
        'name' => 'Bus A2',
        'lat' => 1.5596913681451503, 
        'lng' => 103.6347644178383
    ],
];

header('Content-Type: application/json');
echo json_encode($busData);
?>
