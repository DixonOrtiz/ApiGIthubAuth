require("dotenv").config();

const PORT = process.env.PORT;
if (PORT === undefined) {
  console.log(
    "[Github Auth Api][Error] No PORT environment variable in .env file"
  );
  process.exit(1);
}

const CLIENT_ID = process.env.CLIENT_ID;
if (CLIENT_ID === undefined) {
  console.log(
    "[Github Auth Api][Error] No CLIENT_ID environment variable in .env file"
  );
  process.exit(1);
}

const CLIENT_SECRET = process.env.CLIENT_SECRET;
if (CLIENT_SECRET === undefined) {
  console.log(
    "[Github Auth Api][Error] No CLIENT_SECRET environment variable in .env file"
  );
  process.exit(1);
}

module.exports = {
  PORT,
  CLIENT_ID,
  CLIENT_SECRET,
};
