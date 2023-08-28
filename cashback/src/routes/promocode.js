const { Router } = require("express");
const { create, find, remove } = require("../controllers/promocode");
const router = Router();

router.post("/promocode", create);
router.get("/promocode", find);
router.delete("/promocode/:id", remove);

module.exports = router;
