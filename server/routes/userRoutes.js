import express from "express";
const router = express.Router();
import { login, signup, forgotPassword, resetPassword } from "../controllers/userControllers.js";

router.post("/login", login);
router.post("/signup", signup);
router.post("/forgot-password", forgotPassword);
router.patch("/reset-password", resetPassword);

export default router;
