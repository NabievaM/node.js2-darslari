const { Router } = require("express");
const { create, getAll } = require("../controllers/contact.controller");
const isAuth = require("../middlewares/is-auth.middleware");
const router = Router();

router.post("/contact", create);
router.get("/contact", isAuth, getAll);

module.exports = router;