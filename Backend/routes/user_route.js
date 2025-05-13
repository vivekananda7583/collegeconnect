import express from "express";
import { register,login,logout,updateuser} from "../controllers/user_controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";


const router=express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/update-user/:id").put(isAuthenticated,updateuser);

export default router;