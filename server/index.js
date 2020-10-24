const app = require('../index');

const _config = require('../config');

app.listen(_config.app.port, () => {
  console.log(`App listening on port ${_config.app.port}`);
});
