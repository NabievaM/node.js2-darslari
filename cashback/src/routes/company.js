const { Router } = require("express");
const { create } = require("../controllers/company");

const router = Router();
router.post("/company", create);

module.exports = router;
