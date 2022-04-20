// Login Handler
async function onClickHandler() {
  let username = document.getElementById("u_name").value;
  let password = document.getElementById("u_pass").value;

  console.log(username, password);

  let url = "http://localhost/drupal_movie/web/user/login?_format=json";

  const userData = {
    name: username,
    pass: password,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  document.cookie = "username=" + data.current_user.name;
  document.cookie = "token=" + data.csrf_token;
  document.cookie = "logout_token=" + data.logout_token;
  const auth_tokenData = await authorizeUser(username);
  console.log(auth_tokenData);
  document.cookie = "authorize_token=" + auth_tokenData.access_token;

  window.location = "home.php";
}

// Logout Handler
async function onLogoutHandler() {
  console.log(document.cookie.split(";")[2]);
  logout_token_cookie = document.cookie.split(";")[2];
  logout_token = document.cookie.split(";")[2].split("=")[1];
  console.log(logout_token);

  let url =
    "http://localhost/drupal_movie/web/user/logout?_format=json%token=" +
    logout_token;

  const response = await fetch(url, {
    method: "GET",
  });
  const result = response.json();

  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "logout_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "authorize_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

  window.location = "login.php";
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
