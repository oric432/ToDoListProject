const { BadRequestError } = require("./errors");
const { ObjectId } = require("mongoose").Types;

const validateObjectId = (taskId) => {
  console.log(taskId);
  if (!ObjectId.isValid(taskId)) {
    throw new BadRequestError(`id - '${taskId}' is not a valid id`);
  }
};

module.exports = validateObjectId;
