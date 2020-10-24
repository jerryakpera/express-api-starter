// *** IMPORT EXPRESS APP ***
const app = require('../index');

// *** IMPORT ENV VARIABLES ***
const _config = require('../config');

// *** START SERVER ***
app.listen(_config.app.port, () => {
  console.log(`App listening on port ${_config.app.port}`);
});
