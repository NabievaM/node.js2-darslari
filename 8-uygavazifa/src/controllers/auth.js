const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const query = require("../query/auth");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const { error } = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }).validate({ username, password });
    if (error) {
      res.json({ message: error.message });
      return res.status(400).json({ message: error.message });
    }
    const data = await query.login(username, password);
    console.log(data);

    const token = jwt.sign({ id: data.id }, config.JWT_SECRET_KEY, {
      expiresIn: "72h",
    });
    res.json({ message: "successfully", token });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { login };
