<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login</title>
<style>
    body {
        font-family: Arial, sans-serif;
    }
    .container {
        width: 300px;
        margin: 0 auto;
        margin-top: 100px;
    }
    input[type="text"], input[type="password"] {
        width: 100%;
        padding: 10px;
        margin: 5px 0;
        box-sizing: border-box;
    }
    input[type="submit"] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 10px 0;
        border: none;
        cursor: pointer;
    }
</style>
</head>
<body>
<div class="container">
    <h2>Login</h2>
    <form id="loginForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <input type="submit" value="Login">
    </form>
</div>

<script>
    document.getElementById("loginForm").addEventListener("submit", function(event){
        event.preventDefault(); // Prevent default form submission
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        // Here you would typically perform validation and authentication checks
        // For simplicity, let's just display the entered username and password
        alert("Username: " + username + "\nPassword: " + password);
    });
</script>
</body>
</html>