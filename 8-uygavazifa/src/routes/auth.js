const { Router } = require("express");
const { login } = require("../controllers/auth");
const isAuth = require("../middlewares/is-Auth");

const router = Router();

router.post("/login", login);

module.exports = router;
