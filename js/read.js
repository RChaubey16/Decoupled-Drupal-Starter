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
