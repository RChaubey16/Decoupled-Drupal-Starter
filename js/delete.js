async function onDeleteHandler(){
    let uuid = document.getElementById('article_uuid').value;
    let csrf_token = document.cookie.split(';')[1].split('=')[1];
    let authorize_token = document.cookie.split(';')[3].split('=')[1];

    console.log(uuid, csrf_token, authorize_token);

    let response = await axios({
        method: 'DELETE',
        url: `http://localhost/drupal_movie/web/jsonapi/node/article/${uuid}`,
        headers: {
            Authorization: `Bearer ${authorize_token}`,
            // "X-CSRF-Token": csrf_token,
        }
    });
}
