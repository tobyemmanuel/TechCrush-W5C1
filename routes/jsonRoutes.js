import express from 'express';

const router = express.Router();

router.post('/data', (req, res) => {
  const { userId, message } = req.body;
  res.json({
    status: 'success',
    userId: userId,
    message: message
  });
});

export default router;
