const { knex } = require("../database");

const create = async (req, res) => {
  try {
    const { name } = req.body;

    const [newData] = await knex("company").insert({ name }).returning("*");

    res.status(201).json({ message: "Success", data: newData });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  create,
};
