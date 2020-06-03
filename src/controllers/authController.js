const { CLIENT_ID, CLIENT_SECRET } = require("../config/env");
const axios = require("axios");
const { githubResponseToJson } = require("../functions/functions");

exports.handleLogin = async (request, response) => {
  let url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
  response.redirect(url);
};

exports.handleCallback = async (request, response) => {
  const { query } = request;
  const { code } = query;

  if (!code) {
    return response.send({
      success: "false",
      messasge: "Error: no code",
    });
  }

  const githubCredentials = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
  };

  const githubResponse = await axios.post(
    `https://github.com/login/oauth/access_token`,
    githubCredentials
  );

  const jsonResponse = githubResponseToJson(githubResponse.data);

  console.log(JSON.stringify(jsonResponse, null, 2));

  response.send(jsonResponse);
};
