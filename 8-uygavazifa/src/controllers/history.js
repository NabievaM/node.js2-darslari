const { fetchOne, fetch } = require("../utils/pg");

const create = async (req, res) => {
  try {
    const { workers_id, product_id, is_sell, kg, price } = req.body;
    await fetch(
      "insert into history (workers_id, product_id, is_sell, kg, price) values ($1, $2, $3, $4, $5)",
      workers_id,
      product_id,
      is_sell,
      kg,
      price
    );
    res.status(201).json({ message: "Ishladi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const find = async (req, res) => {
  try {
    const data = await fetch("select * from history");
    res.json({ message: "success", data });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  create,
  find,
  beginTransaction: async () => await fetch("BEGIN TRANSACTION"),
  rollBackTransaction: async () => await fetch("ROLLBACK"),
  commitTransaction: async () => await fetch("COMMIT"),
};
