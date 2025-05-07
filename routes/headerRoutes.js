import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    const userAgent = req.get('User-Agent');
    const accept = req.headers['User-Agent'];
    res.send(`Your User-Agent is: ${userAgent} ${accept}`);
});

export default router;
