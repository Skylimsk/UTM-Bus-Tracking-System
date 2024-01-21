<?php
//1
	     // login to MySQL Server from PHP, change username and password to your own 
	     $conn = mysqli_connect("localhost","BusProject","BusProject");

	     // If login failed, terminate the page (using function 'die')
	     if (!$conn) die("Error! Cannot connect to server: ". mysqli_connect_error() );

	     // Login was successful. Then choose a database to work with (change to your own database)
		 $selected = mysqli_select_db($conn, "db_session");

	     // If required database cannot be used, terminate the page
	     if (!$selected) die ("Cannot use database: " . mysqli_connect_error() );
?>
