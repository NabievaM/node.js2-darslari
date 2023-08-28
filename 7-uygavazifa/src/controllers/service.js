const Joi = require("joi");
const query = require("../query/service");
const { fetchOne } = require("../utils/pg");

const create = async (req, res) => {
  try {
    const { service, price } = req.body;
    const userId = req.id;

    const { error } = Joi.object({
      service: Joi.string().required(),
      price: Joi.string().required(),
    }).validate({ service, price });

    if (error) {
      res.json({ message: error.message });
      return res.status(400).json({ message: error.message });
    }
    const data = await query.insert(userId, service, price);
    console.log(data);
    res.json({ message: "Created", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const find = async (req, res) => {
  try {
    const data = await query.find();
    res.json({ message: "success", data });
  } catch (error) {
    console.log(error.message);
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const userid = req.id;

    const serviceId = await query.findOne(id);
    const user_id = await query.finduserFrom(userid);
    const user2_id = await query.finduserTo(serviceId.id);

    if (user_id.balance > serviceId.price) {
      await query.beginTransaction();

      console.log("balance", user_id.balance);
      console.log("service", serviceId.price);
      console.log(user_id.id, user2_id.id);

      const data1 = await fetchOne(
        "update register set balance = balance - $1 where id = $2 returning*",
        serviceId.price,
        user_id.id
      );
      const data2 = await fetchOne(
        "update register set balance = balance + $1 where id = $2 returning*",
        serviceId.price,
        user2_id.id
      );

      await query.commitTransaction();
      res.json({ message: "success" });
    } else {
      res.json({ message: "Money not enough." });
    }
  } catch (error) {
    await query.rollBackTransaction();
    console.log(error.message);
  }
};

module.exports = { create, find, findOne };
