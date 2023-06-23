const Task = require("../Database/Models/Task");
const { StatusCodes } = require("http-status-codes");
require("express-async-errors");
const { NotFoundError, BadRequestError } = require("../errors");
const validateObjectId = require("../utils");

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});

  return res.status(StatusCodes.OK).send(tasks);
};

const getSingleTask = async (req, res) => {
  const { id: taskId } = req.params;

  validateObjectId(taskId);

  const singleTask = await Task.findById(taskId);

  if (!singleTask) {
    throw new NotFoundError(`task not found`);
  }

  return res.status(StatusCodes.OK).send(singleTask);
};

const createTask = async (req, res) => {
  const task = await Task.create({ ...req.body });

  if (!task) {
    throw new BadRequestError("Could not create task");
  }

  return res.status(StatusCodes.CREATED).send(task);
};

const editTask = async (req, res) => {
  const { id: taskId } = req.params;

  validateObjectId(taskId);

  const task = await Task.findByIdAndUpdate(taskId, req.body, { new: true });

  if (!task) {
    throw new BadRequestError("Could not update task");
  }

  return res.status(StatusCodes.OK).send(task);
};

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;

  validateObjectId(taskId);

  const task = await Task.findOneAndDelete({ _id: taskId });

  if (!task) {
    throw new BadRequestError("Could not delete task");
  }

  return res.status(StatusCodes.OK).send(task);
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  editTask,
  deleteTask,
};
