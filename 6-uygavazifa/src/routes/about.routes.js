const { Router } = require("express");
const { remove, create, get } = require("../controllers/about.controller");
const isAuth = require("../middlewares/is-auth.middleware");
const router = Router();

router.post("/about", isAuth, create);
router.get("/about", get);
router.delete("/about/:id", isAuth, remove);

module.exports = router;