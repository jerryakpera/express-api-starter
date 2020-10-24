// *** CORS PACKAGE ***
const cors = require('cors');

// *** CORS OPTIONS ***
const corsOptions = {
  optionsSuccessStatus: 200,
  credentials: true,
};

module.exports = cors(corsOptions);
