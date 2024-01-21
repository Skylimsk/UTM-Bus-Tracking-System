<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION["utmid"])) {
    // Redirect to the login page if not logged in
    header("Location: login.php");
    exit();
}

// Retrieve the user's information from the database
$con = mysqli_connect("localhost", "BusProject", "BusProject", "db_project");
if (!$con) {
    die("Could not connect: " . mysqli_connect_error());
}

$utmid = $_SESSION["utmid"];
$query = "SELECT * FROM Users WHERE utmid = '$utmid'";
$result = mysqli_query($con, $query);

if (mysqli_num_rows($result) == 1) {
    $row = mysqli_fetch_assoc($result);
    $name = $row["password"];
    $utmid = $row["utmid"];

    $name = strtoupper($name);
} else {
    // If user not found, handle the error or redirect to an appropriate page
    echo "User not found.";
    exit();
}

mysqli_close($con);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Main Page</title>
    <style>
        body {
            font-family: Serif, Helvetica, sans-serif;
            background-image: url('images/UTMimage14.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
            margin: 0;
        }

        .header {
            background-color: #F5DEB3;
            text-align: left;
            padding: 5px 20px;
        }

        .header img {
            width: 150px;
            height: auto;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #FFF5EE;
            border: 1px solid #ccc;
            border-radius: 50px;
            margin-top: 120px;
            flex-direction: column;
        }

        .profile-info {
            display: flex;
            align-items: center;
            margin-left: 100px;
            margin-bottom: 20px;
        }

        .Bus-picture {
            width: 200px;
            height: 200px;
            object-fit: cover;
            margin-right: 20px;  
            border: 2px solid #ccc;
            border-radius: 100px;
            flex-direction: column;
        }

        .user-info {
            margin-left: 50px;
            text-align: left;
        }

        h2, h3 {
            text-align: center;
            margin: 20px;
        }

        h3{
            margin-top:50px;
        }

        .welcome-message {
            text-align: right;
            margin-bottom: 20px;
        }

        .link {
            text-align: center;
            margin-top: 30px;
            font-weight: bold;
            display: block;
            margin: 5px 10px;
            padding: 10px 20px;
            border-radius: 25px;
            background-color: #F5DEB3 ;

        }

        .link a {
            display: inline-block;
            margin: 5px 10px 10px;;
            padding: 10px 20px;
            background-color: #efeff5;
            color: #000000;
            text-decoration: none;
            border-radius: 5px;
            
        }
        .icon {
            width: 20px;
            height: 20px;
            background-color: #FFF5EE;
            margin-top: 10px;
            margin-left: 5px;
            border: 2px solid #ccc;
            border-radius:5px;
            margin-right:10px;    
          
        }

        .logout {
            position: absolute;
            top: 20px;
            right: 20px;
        }

        .logout a {
            display: inline-block;
            padding: 5px 10px;
            background-color: #F5DEB3;
            color: #000000;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        .logout a:hover {
            background-color: #13506b;
        }
    </style>
</head>
<body>
    <div class="header">
        <img src="images/UTM-LOGO-FULL.png" alt="UTM Logo">
    </div>
    <div class="container">
        <div class="logout">
            <a href="logout.php">Logout</a>
        </div>
        <div class="profile-info">
            <img src="images/Bus.jpg" alt="Bus Picture" class="Bus-picture">
            <div class="user-info">
                <h2>Welcome to Bus Tracking System</h2>
                <h3> <?php echo $name." ".$utmid; ?></h3>
            </div>
        </div>

        <div class="welcome-message">
            <h2>Discover the future of bus travel &amp; simplifying your journey like never before.</h2>
        </div>

        <div class="link">
            <a href="Route.php">
                <img src="images/RouteIcon.png" alt="Route" class="icon">Bus Route</a>
            <a href="live_tracking.html">
            <img src="images/LiveTrackingIcon.jpg" alt="Route" class="icon">Live Tracking</a>
        </div>
    </div>
</body>
</html>
