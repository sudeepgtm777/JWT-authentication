import express from 'express';

const router = express.Router();

router.get('/check', (_, res) => {
  res.sendStatus(200);
});

export default router;
