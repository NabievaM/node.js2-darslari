const { Router } = require("express");
const { create, find, findOne } = require("../controllers/service");
const isAuth = require("../middlewares/auth.middleware");

const router = Router();

router.post("/service", isAuth, create);
router.get("/service", isAuth, find);
router.get("/service/:id", isAuth, findOne);

module.exports = router;
