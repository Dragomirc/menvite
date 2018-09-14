// import fs from "fs";
// import db from "./db_connections";
// const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

// const runDbBuild = () => {
//   return db
//     .query(sql)
//     .then(res => console.log("res", res))
//     .catch(e => console.error("error", e));
// };

// if (require.main === module) {
//   runDbBuild();
// }

// export default runDbBuild;

const fs = require("fs");
const db = require("./db_connections");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
const runDbBuild = function() {
  return db
    .query(sql)
    .then(res => console.log("res", res))
    .catch(e => console.error("error", e));
  // return db.query(
  //   sql,
  //   (error, result) =>
  //     error ? console.log("Error", error) : console.log("Result", result)
  // );
};

if (require.main === module) {
  runDbBuild();
}

module.exports = runDbBuild;
