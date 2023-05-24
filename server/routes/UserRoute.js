// "/user" route

import express from "express";
import { getUser, updateUser, deleteUser } from "../controllers/UserController";

const router = express.Router();

// For testing purposes
// router.get("/", async (req, res) => {
//   res.send("User Route");
// });

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
