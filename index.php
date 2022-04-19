<?php 
    session_start();

    echo $_SESSION['username']

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decoupled Drupal | Home </title>
</head>

<body>

    <div class="home">
        <h3>Home</h3>
    </div>

    <nav>
        <ul>
            <li>
                <a href="components/login.php">Login</a>
            </li>
        </ul>
    </nav>

</body>

</html>
