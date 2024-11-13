import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    const userAgent = req.get('User-Agent');
    res.send(`Your User-Agent is: ${userAgent}`);
});

export default router;
