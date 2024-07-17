import express from 'express';
import user from './userRoute';
import auth from './authRoute';

const router = express.Router();

router.get('/check', (_, res) => {
  res.sendStatus(200);
});

export default router;
