const { fetchOne } = require("../utils/pg");

const insertUser =
  "insert into login(username, password) values($1,$2) returning *;";

const login = async (username, password) => {
  const data = await fetchOne(insertUser, username, password);
  return data;
};

module.exports = {
  login,
  beginTransaction: async () => await fetchOne("BEGIN TRANSACTION"),
  rollBackTransaction: async () => await fetchOne("ROLLBACK"),
  commitTransaction: async () => await fetchOne("COMMIT"),
};
