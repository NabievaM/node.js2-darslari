const { fetchOne, fetch } = require("../utils/pg");

const create = async (req, res) => {
  try {
    const { name, kg, price, category_id, is_active } = req.body;

    await fetch(
      "insert into product (name, kg, price, category_id, is_active) values ($1, $2, $3, $4, $5)",
      name,
      kg,
      price,
      category_id,
      is_active
    );
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const find = async (req, res) => {
  const product = await fetch("select * from product");

  res.json({ product });
};

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await fetchOne("select * from product where id = $1", id);

    res.json({ message: "Success", data: product });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, kg, price, category_id, is_active } = req.body;

    const data = await fetchOne(
      "update product set name = $1, kg = $2, price = $3, category_id = $4, is_active = $5 where id = $6 returning*",
      name,
      kg,
      price,
      category_id,
      is_active,
      id
    );
    res.json({ message: "Success", data });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await fetchOne(
      "delete from product where id = $1 returning*",
      id
    );
    res.status(200).json({ message: "Success", data });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  find,
  findOne,
  update,
  remove,
  beginTransaction: async () => await fetch("BEGIN TRANSACTION"),
  rollBackTransaction: async () => await fetch("ROLLBACK"),
  commitTransaction: async () => await fetch("COMMIT"),
};
