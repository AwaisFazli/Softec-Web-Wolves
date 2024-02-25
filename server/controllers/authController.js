const authController = {};
const User = require("../modals/userScehma");
const Admin = require("../modals/adminSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

authController.SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.imageUrl)

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email Already Exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
      paymentVerified: false
    });

    const savedUser = await newUser.save();

    res
      .status(200)
      .json({ message: "User registered Successfully", user: savedUser });
  } catch (error) {
    console.error("Error registering User", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

authController.SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      res.status(400).json({ message: "User with this email doesnot exist" });
    }

    if (password !== existingUser.password) {
      res.status(400).json({ message: "Invalud Username or Password" });
    }

    const tokenPayload = {
      userId: existingUser.id,
      userName: existingUser.name,
      email: existingUser.email,
    };

    const token = jwt.sign(tokenPayload, jwtSecret);
    res.status(200).json({
      token: token,
      user: tokenPayload,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

authController.addAdmin = async (req, res) => {
  try {
    const { role, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email Already Exists" });
    }

    const newUser = new Admin({
      role,
      email,
      password,
    });

    const savedUser = await newUser.save();

    res
      .status(200)
      .json({ message: "User registered Successfully", user: savedUser });
  } catch (error) {
    console.error("Error registering User", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

authController.adminSignin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Admin.findOne({ email: email });

    if (!existingUser) {
      res.status(400).json({ message: "Admin with this email doesnot exist" });
    }

    if (password !== existingUser.password) {
      res.status(400).json({ message: "Invalid Username or Password" });
    }

    const tokenPayload = {
      userId: existingUser.id,
      email: existingUser.email,
      role: existingUser.role,
    };

    const token = jwt.sign(tokenPayload, jwtSecret);
    res.status(200).json({
      token: token,
      user: tokenPayload,
    });
  
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports = authController;
