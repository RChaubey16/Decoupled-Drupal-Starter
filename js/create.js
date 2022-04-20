async function onCreateHandler() {
  username = document.cookie.split(";")[0].split("=")[1];
  csrf_token = document.cookie.split(";")[1].split("=")[1];
  authorize_token = document.cookie.split(';')[3].split('=')[1]

  let title = document.getElementById("article_title").value;
  let summary = document.getElementById("article_summary").value;
  let body = document.getElementById("article_summary").value;
  let image = document.getElementById("article_image").files[0];

  //   console.log(title, summary, body, image);
  //   console.log(document.cookie);

  // const auth_tokenData = await authorizeUser(username);
  // console.log(auth_tokenData);
  // document.cookie = "authorize_token" + auth_tokenData;

  const imageData = await uploadImage(
    image,
    authorize_token,
    csrf_token
  );

  const addArticle = await uploadArticle(
    title,
    summary,
    body,
    imageData,
    authorize_token,
    csrf_token
  );

  title = "";
  summary = "";
  body = "";
}

// Getting authorize token - token generates every request, can be made better.
async function authorizeUser(username) {
  const axiosAPI = axios.create();
  axiosAPI.defaults.baseURL = "http://localhost/drupal_movie/web";
  axiosAPI.defaults.timeout = 30000;

  const params = new URLSearchParams();
  params.append("grant_type", "password");
  params.append("client_id", "77f47c69-a492-4f29-bb2b-c3a0a0e4b910");
  params.append("client_secret", "abc123");
  params.append("username", username);
  params.append("password", "12345");

  try {
    let response = await axiosAPI.post("/oauth/token", params);
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

// upload image
async function uploadImage(myImage, auth_token, csrf_token) {
  console.log(auth_token, csrf_token);

  let img_res = await axios({
    method: "POST",
    url: "http://localhost/drupal_movie/web/jsonapi/node/article/field_image",
    headers: {
      Authorization: `Bearer ${auth_token}`,
      "Content-Type": "application/octet-stream",
      Accept: "application/vnd.api+json",
      "X-CSRF-Token": csrf_token,
      "Content-Disposition": 'file; filename="jsonImage.jpg"',
    },
    data: myImage,
  });

  return img_res;
}

// upload article
async function uploadArticle(
  title,
  summary,
  body,
  imageData,
  auth_token,
  csrf_token
) {
  const reqBody = {
    data: {
      type: "node--article",
      attributes: {
        title: title,
        body: {
          value: body,
          format: "basic_html",
          summary: summary,
        },
      },

      relationships: {
        field_image: {
          data: {
            type: "file--file",
            id: imageData.data.data.id,
            meta: {
              alt: "JSON-Image-text",
              title: "JSON-Image-text",
              width: 400,
              height: 400,
            },
          },
        },
      },
    },
  };

  let response = await axios({
    method: "POST",
    url: "http://localhost/drupal_movie/web/jsonapi/node/article",
    headers: {
      Authentication: `Bearer ${auth_token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
      "Access-Control-Allow-Headers":
        "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
      "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json",
      "X-CSRF-Token": csrf_token,
    },
    data: reqBody,
  });
}
