const { fetchOne, fetch } = require("../utils/pg");

const create = async (req, res) => {
  try {
    const { name } = req.body;
    await fetch("insert into category (name) values ($1)", name);
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const find = async (req, res) => {
  try {
    const data = await fetch("select * from category");
    res.json({ message: "success", data });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { create, find };
