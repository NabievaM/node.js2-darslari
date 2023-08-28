const { Router } = require("express");
const { create, find, findOne, remove } = require("../controllers/users");

const router = Router();

router.post("/users", create);
router.get("/users", find);
router.get("/users/:id", findOne);
router.delete("/users/:id", remove);

module.exports = router;
