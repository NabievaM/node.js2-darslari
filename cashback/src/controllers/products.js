const { knex } = require("../database");

const create = async (req, res) => {
  try {
    const { name, price, company_id } = req.body;

    const [data] = await knex("products")
      .insert({
        name,
        price,
        company_id,
      })
      .returning("*");

    res.status(201).json({ message: "Success", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const find = async (req, res) => {
  try {
    const products = await knex("products").select(
      "price",
      knex.ref("id").withSchema("products"),
      knex.ref("name").withSchema("products"),
      knex.ref("company_id").withSchema("products")
    );

    res.json({ message: "Success", data: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { name } = req.body;
    const { price } = req.body;
    const { company_id } = req.body;
    const { user_id } = req.body;
    const { id } = req.params;

    const oldData = await knex("products").select("*").where({ id }).first();

    const [data] = await knex("products")
      .update({ name, price, company_id, user_id })
      .where({ id })
      .returning("*");

    res.json({ message: "Success", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await knex("products").del().where({ id });

    res.json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  find,
  update,
  remove,
};
