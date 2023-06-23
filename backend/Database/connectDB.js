const mongoose = require("mongoose");

const connectDB = async (uri) => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
