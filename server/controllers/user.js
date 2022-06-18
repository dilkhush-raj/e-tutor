import User from "../models/user.js";
import bycrypt from "bcryptjs";

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let exitingUser;
  try {
    exitingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (exitingUser) {
    return res.status(400).json({message: "User Already Exists! Login Instead"})
  }
  
  const hashedPassword = bycrypt.hashSync(password);
  const user = new User ({
    name,
    email,
    password: hashedPassword,
    courses: []
  });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({user})
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let exitingUser;
  try {
    exitingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!exitingUser) {
    return res
    .status(404)
    .json({ message: "Could not find user by this email"})
  }

  const isPasswordCorrect = bycrypt.compareSync(password, exitingUser.password);
  if (!isPasswordCorrect) {
    return res.status(404).json({message: "Incorrect Password"})
  }
  return res.status(200).json({message: "Login Successful", user: exitingUser })
}