<?php
$con = mysqli_connect("localhost", "BusProject","BusProject");
if(!$con){
    die("Could not connect: " . mysqli_connect_error());
}

mysqli_select_db($con, "db_project");

// Function to sanitize user input
function sanitizeInput($input)
{
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get user input
    $utmid = sanitizeInput($_POST["utmid"]);
    $password = sanitizeInput($_POST["password"]);

    $conn = $con;

    // Query to retrieve user from the database
    $query = "SELECT * FROM Users WHERE utmid = '$utmid' AND password = '$password'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) == 1) {
        // Authentication successful
        session_start();
        $_SESSION["utmid"] = $utmid;
        // Redirect to the authenticated user's dashboard or another page
        header("Location: mainPage.php"); 
        exit();
    } else {
        // Authentication failed
        echo '<script>alert("Invalid ID or password. Please login again.");';
        echo 'window.location.href = "login.php";</script>';
    }

    // Close the database connection
    mysqli_close($conn);
}
?>
