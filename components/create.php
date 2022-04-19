<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decoupled Drupal | Create</title>
</head>

<body>

    <h1>Create Article</h1>
    <div>
        <label>Title</label>
        <input type="text" name="title" id = "article_title"/>
    </div>

    <div>
        <label>Summary</label>
        <textarea rows="10" col="30" type="text" name="summary" id = "article_summary"></textarea>
    </div>

    <div>
        <label>Body</label>
        <textarea rows="10" col="30" type="text" name="body" id="article_body"></textarea>
    </div>

    <div>
        <label>Image</label>
        <input type="file" name="imageFile" id="article_image" />
    </div>

    <input type="submit" value="Submit" onclick="onCreateHandler()" />


    <script src="../js/create.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</body>

</html>
