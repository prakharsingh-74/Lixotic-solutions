const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/Session');
const Session = require('../models/Session');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.comparePassword(password)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

  const session = new Session({ userId: user._id, token });
  await session.save();

  res.json({ token });
});

module.exports = router;