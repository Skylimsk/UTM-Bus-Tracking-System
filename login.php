<!DOCTYPE html>
<html>
<head>
  <title>Login Interface</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      background-image: url('images/MG_6405-Edit-2048x1536.jpg'); 
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    
    .container {
      width: 600px;
      height: 400px;
      padding: 30px;
      border: 1px solid #ccc;
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.8); /* Background color with transparency */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    .container h2 {
      text-align: center;
    }
    
    .input-wrapper {
      width: 300px;
      max-width: 300px;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
    }
    
    .input-wrapper input[type="text"],
    .input-wrapper input[type="password"] {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
    }
    
    .container input[type="submit"] {
      width: 100px;
      max-width: 200px;
      background-color: #fff;
      border: 1px solid black;
      border-radius: 20px;
      padding: 10px;
      cursor: pointer;
      margin: 0 auto; 
      display: block; 
      box-shadow: 2px 2px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2><img src="images/UTM-LOGO-FULL.png" alt="UTM Logo" width="300px"></h2>
    <br>
    <form action="check_login.php" method="post">
      <div class="input-wrapper">
        <input type="text" name="utmid" placeholder="UTM ID" required>
      </div>
      <div class="input-wrapper">
        <input type="password" name="password" placeholder="Password" required>
      </div>
      <br>
      <input type="submit" value="Login">
    </form>
  </div>
</body>
</html>
