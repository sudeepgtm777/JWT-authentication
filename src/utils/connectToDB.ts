import mongoose from 'mongoose';
import config from 'config';
import log from './logger';

async function connectToDB() {
  const dbUrl = config.get<string>('dbUrl');

  try {
    await mongoose.connect(dbUrl);
    log.info('Connected to db');
  } catch (err) {
    process.exit(1);
  }
}

export default connectToDB;
