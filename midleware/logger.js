const moment = require('moment');

// midleware function
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get('host')}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};

module.exports = logger;
