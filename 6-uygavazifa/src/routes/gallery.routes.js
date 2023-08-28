const { Router } = require("express");
const { remove, create, get } = require("../controllers/gallery.controller");
const isAuth = require("../middlewares/is-auth.middleware");
const router = Router();

router.post("/gallery", isAuth, create);
router.get("/gallery", get);
router.delete("/gallery/:id", isAuth, remove);

module.exports = router;
