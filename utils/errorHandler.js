module.exports = (err, req, res, next) => {
  res
    .status(500)
    .json({ success: false, message: err.message, errors: err.errors });
};
