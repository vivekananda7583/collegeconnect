import express from "express";
import {postproject,getproject,getallprojects} from "../controllers/project_controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router=express.Router();
router.route("/post").post(isAuthenticated,postproject);
router.route("/adminprojects").get(isAuthenticated,getproject);
router.route("/getall").get(isAuthenticated,getallprojects);

export default router;