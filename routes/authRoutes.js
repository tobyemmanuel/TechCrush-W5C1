import express from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Signup route with validation
router.post('/signup', [
  body('email').isEmail().withMessage('Please provide a valid email address'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  res.send(`Signup successful for ${email}`);
});

export default router;
