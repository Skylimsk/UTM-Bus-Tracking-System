<?php
//2
$con = mysqli_connect("localhost", "BusProject","BusProject");
if(!$con){
    die("Could not connect: " . mysqli_connect_error());
}

if(mysqli_query($con,"CREATE DATABASE db_project")){
    echo "Database created";
}else{
    echo "Error creating database: " . mysqli_connect_error();
}
mysqli_close($con);
?>