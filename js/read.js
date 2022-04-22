async function onReadHandler() {
  let articleList = document.getElementById("article__list");
  let articlesValue;

  let articles = fetchArticles();
  await Promise.resolve(articles).then(function (value) {
    articlesValue = value;
  });

  for (let i = 0; i < articlesValue.length; i++) {
    let entity = `<h2>${articlesValue[i].attributes.title}</h2>
    <p>${articlesValue[i].attributes.body.value}</p>`;
    articleList.innerHTML += entity;
  }
}

async function fetchArticles() {
  let articles = await axios.get(
    "http://localhost/drupal_movie/web/jsonapi/node/article"
  );
  return articles.data.data;
}

async function onSearchHandler() {
  let articleData;
  let imageData;
  let articleList = document.getElementById("article__list");
  let searchValue = document.getElementById("search__input").value;

  let response = await fetchArticleByTitle(searchValue);
  await Promise.resolve(response).then(async function (value) {
    articleData = value.data[0];
    imageData = await fetchImageofArticle(
      articleData.relationships.field_image.links.related.href
    );
  });

  if (
    articleData.attributes.title == null ||
    articleData.attributes.body.value == null
  ) {
    let entity = `<h2>Please enter all the details</h2>`;
    articleList.innerHTML += entity;
  }

  let entity = `<h2>${articleData.attributes.title}</h2>
    <img src="http://localhost${imageData.uri.url}" />
    <p>${articleData.attributes.body.value}</p>`;
  articleList.innerHTML += entity;
}

async function fetchArticleByUUID(node_uuid) {
  let article = await axios.get(
    "http://localhost/drupal_movie/web/jsonapi/node/article/" + node_uuid
  );

  return article.data.data;
}

async function fetchArticleByTitle(node_title) {
  let article = await axios.get(
    "http://localhost/drupal_movie/web/jsonapi/node/article?filter[title][value]=" +
      node_title
  );

  return article.data;
}

async function fetchImageofArticle(image_resource_link) {
  let imageData = await axios.get(image_resource_link);
  return imageData.data.data.attributes;
}
