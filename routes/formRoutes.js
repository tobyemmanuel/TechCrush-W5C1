import express from 'express';

const router = express.Router();

router.get('/load-form', (req, res) => {
  res.render('form'); // Render the form.ejs view
});

router.post('/submit-form', (req, res) => {
  const { name, email } = req.body;
  res.send(`Form submitted by: ${name}, Email: ${email}`);
});

export default router;
