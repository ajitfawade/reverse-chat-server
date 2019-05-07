import express from 'express';
import User from '../models/User';
import { createUser } from '../services/userService';
const router = express.Router();

router.post('/', async (req, res) => {
  console.log('Body:', req.body);
  try {
    const savedUser = await createUser(req.body);
    res.json(savedUser);
  } catch (error) {
    res.status(500).send('Unable to create user');
  }
});

export default router;
