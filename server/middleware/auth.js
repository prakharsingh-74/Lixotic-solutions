const jwt = require('jsonwebtoken');
const Session = require('../models/Session');

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const session = await Session.findOne({ token });
    if (!session) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = auth;