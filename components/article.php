<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decoupled Drupal | Article</title>
    <script type="text/javascript">

        async function fetchImageofArticle(image_resource_link) {
            let imageInfo;
            let imageData = await fetch(image_resource_link)
                .then(response => response.json())
                .then(data => imageInfo = data.data);
            console.log(imageInfo);
            return imageInfo;
        }

        async function fetchArticleByUUID(node_uuid) {
            let article = fetch(
                    "http://localhost/drupal_movie/web/jsonapi/node/article/" + node_uuid
                )
                .then(response => response.json())
                .then(data => {

                    var imageValue;
                    article_info = data.data;
                    let image_link = data.data.relationships.field_image.links.related.href;
                    let articleMain = document.getElementById("article__main");

                    let imageInfo = fetchImageofArticle(image_link);
                    Promise.resolve(imageInfo).then(function(value) {
                        imageValue = value;
                        console.log(imageValue.attributes.uri.url);

                        let articleData = `
                    <h1>${data.data.attributes.title}</h1>
                    <img src=http://localhost${imageValue.attributes.uri.url} />
                    <p>${data.data.attributes.body.value}</p>
                `;
                        articleMain.innerHTML += articleData;
                    });

                });
        }
    </script>
</head>

<body>

    <script type="text/javascript">
        let article_uuid = document.URL.split('?')[1];
        fetchArticleByUUID(article_uuid);
    </script>

    <div id="article__main">

    </div>

</body>

</html>
