const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
