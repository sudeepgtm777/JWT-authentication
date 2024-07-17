import express from 'express';
import user from './user';
import auth from './auth';

const router = express.Router();

router.get('/check', (_, res) => {
  res.sendStatus(200);
});

export default router;
