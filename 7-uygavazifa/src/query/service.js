const { fetch, fetchOne } = require("../utils/pg");
const insertservice =
  "insert into service(register_id, service, price) values($1, $2, $3) returning *";
const findservices = "select * from services;";

const findOneservice = "select * from service where id = $1;";

const findUserFrom = "select * from register where id = $1;";

const findUserTo = "select * from register where id = $1;";

const insert = async (userId, service, price) => {
  const data = await fetchOne(insertservice, userId, service, price);
  return data;
};

const find = async () => {
  const data = await fetch(findservices);
  return data;
};

const findOne = async id => {
  const serviceId = await fetchOne(findOneservice, id);
  return serviceId;
};

const finduserFrom = async registerId => {
  const data = await fetchOne(findUserFrom, registerId);
  return data;
};

const finduserTo = async registerId => {
  const data = await fetchOne(findUserTo, registerId);
  return data;
};

module.exports = {
  insert,
  find,
  findOne,
  finduserFrom,
  finduserTo,
  beginTransaction: async () => await fetchOne("BEGIN TRANSACTION"),
  rollBackTransaction: async () => await fetchOne("ROLLBACK"),
  commitTransaction: async () => await fetchOne("COMMIT"),
};
