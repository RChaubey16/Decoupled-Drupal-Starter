<?php

if (strlen($_COOKIE['token']) === 0) {
    header('location: login.php');
}

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
    <nav>
        <ul>
            <li>
                <h5><?php echo $_COOKIE['username'] ?></h5>
            </li>
            <li>
                <button onclick="onLogoutHandler()">Logout</button>
            </li>
        </ul>
    </nav>

    <section>

        <div>
            <button>
                <a href="create.php"> Create Article </a>
            </button>
        </div>
        <div>
            <button>Read Article</button>
        </div>
        <div>

            <button>Update Article</button>
        </div>
        <div>
            <button>Delete Article</button>

        </div>

    </section>

    <script src="../js/login.js"></script>
</body>

</html>
