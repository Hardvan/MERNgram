import UserModel from "../models/userModel.js";

// Registering a new User
export const registerUser = async (req, res) => {
  // Destructuring the request body
  const { username, password, firstName, lastName } = req.body;

  // Creating a new User
  const newUser = new UserModel({ username, password, firstName, lastName });

  try {
    // Saving the new User to the database
    await newUser.save();

    // Sending the response
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
