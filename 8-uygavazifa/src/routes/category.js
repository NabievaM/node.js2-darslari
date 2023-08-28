const { Router } = require("express");
const { create, find } = require("../controllers/category");
const isAuth = require("../middlewares/is-Auth");

const router = Router();

router.post("/category", isAuth, create);
router.get("/category", isAuth, find);

module.exports = router;
