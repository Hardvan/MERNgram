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

// Update a User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      // Update user by id & return it
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true, // We will get info about updated user, not the old one
      });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
