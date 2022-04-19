<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decoupled Drupal | Login</title>
</head>

<body>
    <div>
        <label for="u_name">Username</label>
        <input type="text" name="username" id="u_name" />
    </div>
    <div>
        <label for="u_pass">Password</label>
        <input type="password" name="password" id="u_pass" />
    </div>
    <div>
        <button onclick="onClickHandler()"> Login </button>
    </div>

    <script src="../js/login.js"></script>
</body>

</html>
