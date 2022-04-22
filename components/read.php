<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decoupled Drupal | Read</title>
</head>

<body>

    <h1>Read Articles</h1>

    <input type="submit" value="Submit" onclick="onReadHandler()" />

    <div>
        <input type="text" id="search__input" name="search__field" />

        <input type="submit" value="Submit" onclick="onSearchHandler()" />
    </div>


    <div id="article__list">

    </div>


    <script src="../js/read.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</body>

</html>
