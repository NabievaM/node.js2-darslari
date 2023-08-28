require("dotenv/config");
const { env } = process;
const config = {
  PORT: env.PORT,
  DB_URL: env.DB_URL,
  JWT_SECRET_KEY: env.JWT_SECRET_KEY,
};

module.exports = config;
