const { Router } = require("express");
const { remove, create, get, getAll, edit } = require("../controllers/services.controller");
const isAuth = require("../middlewares/is-auth.middleware");
const router = Router();

router.post("/services", isAuth, create);
router.get("/services",  get);
router.get("/services/:id", getAll);
router.put("/services/:id", isAuth , edit);
router.delete("/services/:id", isAuth, remove);

module.exports = router;
