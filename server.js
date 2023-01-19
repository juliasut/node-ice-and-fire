//import dependencies
const express = require("express");
const dotenv = require("dotenv").config();
const {
  errorHandler,
  invalidPathHandler,
} = require("./middleware/errorMiddleware");
const app = express();
const port = process.env.PORT || 3000;

//configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//import routes
const characterRoutes = require("./routes/characterRoutes");

//register routes
app.use("/api", characterRoutes);

//implement errorMiddleware
app.use(errorHandler);
app.use(invalidPathHandler);
//listen for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
