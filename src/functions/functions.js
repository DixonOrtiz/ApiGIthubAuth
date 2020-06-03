const axios = require("axios");

const getAccessToken = (stringGithubResponse) => {
  const arrayGithubResponse = stringGithubResponse.split("&");
  accessToken = arrayGithubResponse[0].split("=")[1];

  return accessToken;
};

const filterUserData = (userData) => {
  const { id, login, name, email, avatar_url } = userData;

  const user = {
    githubID: id,
    nickname: login,
    name,
    email,
    image: avatar_url,
  };

  return user;
};

exports.getGithubUserData = async (code, client_id, client_secret) => {
  const githubCredentials = {
    client_id,
    client_secret,
    code: code.code,
  };

  const githubResponse = await axios.post(
    `https://github.com/login/oauth/access_token`,
    githubCredentials
  );

  const accessToken = getAccessToken(githubResponse.data);

  const userResponse = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: "token " + accessToken,
    },
  });

  userData = filterUserData(userResponse.data);

  return userData;
};
