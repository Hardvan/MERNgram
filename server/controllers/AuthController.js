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

// Login User

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Checking if the user exists & password is correct
    const user = await UserModel.findOne({ username: username });
    if (user) {
      const valid = await bcrypt.compare(password, user.password);

      // Convert the above to ternary operator
      valid
        ? res.status(200).json(user) // If password is correct
        : res.status(400).json({ message: "Wrong password" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
