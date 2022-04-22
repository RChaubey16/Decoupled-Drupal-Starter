async function onUpdateHandler() {
  let title = document.getElementById("article_title").value;
  let summary = document.getElementById("article_summary").value;
  let body = document.getElementById("article_body").value;
  let uuid = document.getElementById("article_uuid").value;

  console.log(title, summary, body, uuid);

  let auth_token = document.cookie.split(";")[3].split('=')[1];
  let csrf_token = document.cookie.split(";")[1].split('=')[1];;

//   console.log(document.cookie.split(";")[3].split('=')[1])

  console.log(auth_token, csrf_token);

  let url = "http://localhost/drupal_movie/web/jsonapi/node/article/" + uuid;

  const reqBody = {
    data: {
      type: "node--article",
      id: uuid,
      attributes: {
        title: title,
        body: {
          value: body,
          format: "basic_html",
          summary: summary,
        },
      },
    },
  };

  let response = await axios({
    method: "PATCH",
    url: url,
    headers: {
      "Content-Type": "application/vnd.api+json",
      "X-CSRF-Token": csrf_token,
    },
    data: reqBody,
  });
  console.log(response);
  window.location = "home.php";
}
