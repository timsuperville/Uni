const handleError = (err, res) => {
  console.error(err);
  res.status(500).send({ error: "Something went wrong!" });
};

module.exports = { handleError };