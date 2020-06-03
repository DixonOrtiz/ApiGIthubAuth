const bodyParser = require("body-parser");
const router = require("../routes/auth");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(router);
};
