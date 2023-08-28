const { fetchOne } = require("../utils/pg");

const insertUser =
  "insert into register(name, email, password) values($1,$2,$3) returning *;";

const insertLogin = "select * from register where name=$1 and password=$2;";

const insert = async (name, email, password) => {
  const data = await fetchOne(insertUser, name, email, password);
  return data;
};
const login = async (name, password) => {
  const data = await fetchOne(insertLogin, name, password);
  return data;
};

module.exports = {
  insert,
  login,
  beginTransaction: async () => await fetchOne("BEGIN TRANSACTION"),
  rollBackTransaction: async () => await fetchOne("ROLLBACK"),
  commitTransaction: async () => await fetchOne("COMMIT"),
};
