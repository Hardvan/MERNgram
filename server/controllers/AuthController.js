import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";

// Registering a new User
export const registerUser = async (req, res) => {
  // Destructuring the request body
  const { username, password, firstName, lastName } = req.body;

  // Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Creating a new User
  const newUser = new UserModel({
    username, // Same as username: username
    password: hashedPassword,
    firstName,
    lastName,
  });

  try {
    // Saving the new User to the database
    await newUser.save();

    // Sending the response
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
