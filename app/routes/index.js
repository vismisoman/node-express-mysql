const router = require("express").Router();
const {
  list_all_tasks,
  create_a_task,
  read_a_task,
  update_a_task,
  delete_a_task,
} = require("../controller/appController");

router.get("/listtasks", list_all_tasks);
router.post("/createtask", create_a_task);
router.get("/readtask/:taskId", read_a_task);
router.put("/updatetask/:taskId", update_a_task);
router.delete("/deletetask/:taskId", delete_a_task);
module.exports = router;
