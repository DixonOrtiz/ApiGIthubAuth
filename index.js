const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

app.get("/login", (req, res) => {
  let url = `https://github.com/login/oauth/authorize?client_id=${clientID}`;
  res.redirect(url);
});

app.get("/callback", async (req, res, next) => {
  const { query } = req;

  const { code } = query;

  if (!code) {
    return res.send({
      success: "false",
      messasge: "Error: no code",
    });
  }

  const githubCredentials = {
    client_id: clientID,
    client_secret: clientSecret,
    code,
  };

  const resp = await axios.post(
    `https://github.com/login/oauth/access_token`,
    githubCredentials
  );

  res.send(resp.data);
});

app.listen(3000, () => {
  console.log("Listening in port 3000");
});
