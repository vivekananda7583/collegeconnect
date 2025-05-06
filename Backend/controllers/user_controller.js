import { User } from "../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { username, email, collegename, password } = req.body;

    if (!username || !email || !collegename || !password) {
      return res.status(400).json({
        message: "Something went wrong",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      username,
      email,
      collegename,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: "Account Created Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY);
    user = {
      _id: user._id,
      username: user.username,
      email: user.email,
      collegename: user.collegename,
    };
    return res
      .status(200)
      .cookie("token", token)
      .json({
        message: `Welcome back ${user.username}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "").json({
      message: "Logged Out Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
