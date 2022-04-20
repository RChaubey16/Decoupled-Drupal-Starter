<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decoupled Drupal | Delete</title>
</head>

<body>

    <h1>Delete Article</h1>
    <div>
        <label>Title UUID</label>
        <input type="text" name="title_uuid" id = "article_uuid"/>
    </div>
    
    <input type="submit" value="Submit" onclick="onDeleteHandler()" />


    <script src="../js/delete.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</body>

</html>
