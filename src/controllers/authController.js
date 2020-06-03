const { CLIENT_ID, CLIENT_SECRET } = require("../config/env");
const axios = require("axios");
const { getGithubUserData } = require("../functions/functions");

exports.handleLogin = async (request, response) => {
  let url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
  response.redirect(url);
};

exports.handleCallback = async (request, response) => {
  const code = request.query;

  if (!code) {
    return response.send({
      success: "false",
      messasge: "Error: no code",
    });
  }

  userData = await getGithubUserData(code, CLIENT_ID, CLIENT_SECRET);

  console.log(userData);
  response.send(userData);
};
