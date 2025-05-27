import express from "express";
import { postproject, getproject, getallprojects } from "../controllers/project_controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// The POST route to create a project
router.route("/post").post(isAuthenticated, postproject);

// The GET route to fetch user-specific projects
router.route("/adminprojects/:id").get(isAuthenticated, getproject);

// The GET route to fetch all projects
router.route("/getall").get(isAuthenticated, getallprojects);

export default router;
