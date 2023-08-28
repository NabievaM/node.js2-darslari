const { Router } = require("express");
const { create, find, update, remove } = require("../controllers/products");

const router = Router();

router.post("/products", create);
router.get("/products", find);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

module.exports = router;
