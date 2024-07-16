require('dotenv').config();
import express from 'express';
import config from 'config';
import connectToDB from './utils/connectToDB';
import log from './utils/logger';

const app = express();

const port = config.get('port');

app.listen(port, () => {
  log.info(`App Started at http://localhost:${port}`);

  connectToDB();
});
