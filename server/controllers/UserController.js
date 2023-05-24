import UserModel from "../models/userModel.js";

// Get a User
export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    // Find user by id & return it
    const user = await UserModel.findById(id);
    if (user) {
      // Remove password from user object
      const { password, ...otherDetails } = user._doc;

      res.status(200).json(otherDetails);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
