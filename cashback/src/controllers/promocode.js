const { knex } = require("../database");

const create = async (req, res) => {
  try {
    const { cashback, exploitation, company_id, user_id, product_id } =
      req.body;

    const [data] = await knex("promocode")
      .insert({
        cashback,
        exploitation,
        company_id,
        user_id,
        product_id,
      })
      .returning("*");

    res.status(201).json({ message: "Success", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const find = async (req, res) => {
  try {
    const promocode = await knex("promocode")
      .select(
        knex.ref("id").withSchema("promocode"),
        knex.ref("cashback").withSchema("promocode"),
        knex.ref("exploitation").withSchema("promocode"),
        knex.ref("cashback as promocode").withSchema("promocode")
      )
      .innerJoin("company", "promocode.company_id", "company.id");

    res.json({ message: "Success", data: promocode });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await knex("promocode").del().where({ id });

    res.json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  find,
  remove,
};
