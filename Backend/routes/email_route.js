import express from "express";
import { sendInterestEmail } from "../controllers/email_controller.js";

const router = express.Router();

router.post("/send-interest-email", sendInterestEmail);

export default router;
