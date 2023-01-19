const errorHandler = (err, req, res, next) => {
  console.log(`errorHandler: ${err.message}`);
  const status = err.status || 500;
  res.status(status).json(err.message);
};
// 404 error for undefined paths
const invalidPathHandler = (request, response, next) => {
  response.status(404);
  response.send("Invalid path");
};
module.exports = { errorHandler, invalidPathHandler };
