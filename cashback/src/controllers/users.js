const { knex } = require("../database");

const find = async (req, res) => {
  try {
    const users = await knex.select("*").from("users");

    res.json({ message: "Success", data: users });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      rows: [users],
    } = await knex.raw(`select * from users where id = :id`, { id });

    res.json({ message: "Success", data: users });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const create = async (req, res) => {
  try {
    const { fullname } = req.body;
    const [newData] = await knex("users").insert({ fullname }).returning("*");

    res.status(201).json({ message: "Success", data: newData });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await knex("users").del().where({ id });

    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  find,
  findOne,
  create,
  remove,
};
