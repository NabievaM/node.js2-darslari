const {Router} = require("express");
const {
  find,
  findOne,
  create,
  update,
  changeStatus,
  remove,
} = require("../controllers/todos.controller");

const router = Router();

router.get("/todos/", find);
router.get("/todos/:id", findOne);
router.post("/todos", create);
router.put("/todos/:id", update);
router.put("/todos/status/:id", changeStatus);
router.delete("/todos/:id", remove);

module.exports = router;
