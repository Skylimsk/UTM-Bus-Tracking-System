<?php
//4
$con = mysqli_connect("localhost", "BusProject","BusProject");
if(!$con){
    die("Could not connect: " . mysqli_connect_error());
}

//Select database
mysqli_select_db($con, "db_project");

//Insert data to table
mysqli_query($con, "INSERT INTO Users(utmid, password) Values('A21EC0211', 'ngkengkeat')");
mysqli_query($con, "INSERT INTO Users(utmid, password) Values('A21EC0220', 'phangsengsoon')");
mysqli_query($con, "INSERT INTO Users(utmid, password) Values('A21EC00196', 'limshikai')");
mysqli_query($con, "INSERT INTO Users(utmid, password) Values('A21EC0229', 'tanchunming')");


//Close connection
mysqli_close($con);
?>