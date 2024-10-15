const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Session = require('../models/Session');

// Helper function to generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// @desc    Register a new user
// @route   POST /api/register
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, password, address, phoneNumber } = req.body;

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create new user
  const user = new User({
    name,
    email,
    password, // Password will be hashed by the User model pre-save middleware
    address,
    phoneNumber,
  });

  await user.save();
  
  // Generate token
  const token = generateToken(user._id);

  // Store token in MongoDB session
  const session = new Session({ userId: user._id, token });
  await session.save();

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token,
  });
};

// @desc    Authenticate user & get token
// @route   POST /api/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    // Generate token
    const token = generateToken(user._id);

    // Store token in MongoDB session
    const session = new Session({ userId: user._id, token });
    await session.save();

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

// @desc    Get user profile
// @route   GET /api/user/:id
// @access  Private (protected by auth middleware)
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      phoneNumber: user.phoneNumber,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      address: updatedUser.address,
      phoneNumber: updatedUser.phoneNumber,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
};