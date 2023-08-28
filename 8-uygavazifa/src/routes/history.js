const { Router } = require("express");
const { create, find } = require("../controllers/history");
const isAuth = require("../middlewares/is-Auth");

const router = Router();

router.post("/history", isAuth, create);
router.get("/history", isAuth, find);

module.exports = router;
