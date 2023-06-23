const express = require("express");
const app = express();
const morgan = require("morgan");
const connectDB = require("./Database/connectDB");
require("dotenv").config();

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(express.json());

// Apply rate-limiting middleware
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);

//routes
const tasksRouter = require("./Routes/tasksRoute");
app.use("/api/v1/tasks", tasksRouter);

//custom middleware
const notFound = require("./Middleware/NotFoundMiddleware");
app.use(notFound);

//server setup
const port = process.env.PORT || 3001;

const startApp = async () => {
  try {
    app.listen(port, () => console.log(`server is listening on port ${port}`));
    await connectDB(process.env.MONGO_URI);
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
};

startApp();
