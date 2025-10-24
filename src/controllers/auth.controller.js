const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User Registration Controller
async function registerUser(req, res) {
  const { fullName, email, password } = req.body;

  const isAlreadyRegistered = await userModel.findOne({ email });

  if (isAlreadyRegistered) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullName,
    email,
    password: hashPassword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    },
  });
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (!user) {
    res.status(400).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    res.status(400).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    },
  });
}
module.exports = {
  registerUser,
  loginUser,
};
