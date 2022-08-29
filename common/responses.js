
module.exports = () => (req, res, next) => {

  // success response
  res.success = (data, message) => {
    return res.send({ statusCode: 200, message, data: data || {} });
  };

  // error resposne
  res.error = (code, message, data) => {
    res.status(code || 400).send({ statusCode: code, message, data: data || {} });
  };

  // proceed forward
  next();
};
