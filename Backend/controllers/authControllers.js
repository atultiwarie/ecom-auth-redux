const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password, userName } = req.body;
  if (!name || !email || !password || !userName)
    return res.status(400).json({ message: "All fields are required" });
  const singleUser = await User.findOne({ email });
  if (singleUser)
    return res.status(400).json({ message: "User already exists" });
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      userName,
      password: hashedPassword,
    });
    res.status(201).json({
      name: newUser.name,
      email: newUser.email,
      userName: newUser.userName,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.login = async (req, res) => {
  const { validate, password } = req.body;
  if (!validate || !password)
    return res.status(400).json({ message: "All fields are required" });
  try {
    const existingUser = await User.findOne({
      $or: [{ email: validate }, { userName: validate }],
    });
    if (!existingUser)
      return res.status(401).json({ message: "Invalid Credentials" });
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid Credentials" });
    const token = jwt.sign(
      { userName: existingUser.userName, email: existingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.cookie('token',token)
    res.status(200).json({
        message:"Login Successful"
    })
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Logged out successfully",
  });
};


