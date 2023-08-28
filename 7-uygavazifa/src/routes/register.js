const { Router } = require("express");
const { register, login } = require("../controllers/auth");
const isAuth = require("../middlewares/auth.middleware");

const router = Router();

router.post("/register", register);
router.post("/login", isAuth, login);

module.exports = router;
