import { Pool } from "pg";
import url from "url";
import env2 from "env2";
env2("./config.env");
let options = {};

let DATABASE_URL = process.env.DATABASE_URL;
if (process.env.TRAVIS === "true") {
  options = {
    database: "travis_ci_test"
  };
} else {
  if (!DATABASE_URL && process.env.TRAVIS !== "true") {
    throw new Error("Enivroment varabiale DATABASE_URL must be set");
  } else if (process.env.NODE_ENV === "test") {
    DATABASE_URL = process.env.TEST_DB_URL;
  }
  const params = url.parse(DATABASE_URL);
  const [username, password] = params.auth.split(":");

  options = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split("/")[1],
    max: process.env.DB_MAX_CONNECTIONS || 2,
    user: username,
    password: password
  };
  options.ssl = options.host !== "localhost";
}

export default new Pool(options);
