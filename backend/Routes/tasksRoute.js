const router = require("express").Router();
const {
  getAllTasks,
  getSingleTask,
  createTask,
  editTask,
  deleteTask,
} = require("../Controllers/tasksController");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(editTask).delete(deleteTask);

module.exports = router;
