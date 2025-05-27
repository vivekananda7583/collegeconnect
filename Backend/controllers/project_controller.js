// controllers/project_controller.js
import { Projects } from "../models/project_model.js"; // Ensure path and extension are correct

export const postproject = async (req, res) => {
  try {
    const { title, summary, tags, owner } = req.body;

    if (!title || !summary || !tags || !owner) {
      return res.status(400).json({
        message: "Missing required fields",
        success: false,
      });
    }

    // Ensure tags are properly split into an array
    const tagArray = tags.split(" ").map(tag => tag.trim()).filter(tag => tag);

    const project = await Projects.create({
      title,
      summary,
      positions: tagArray, // Store tags as an array
      owner,
    });

    return res.status(200).json({
      message: "Project Idea Created successfully",
      project,
      success: true,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const getproject = async (req, res) => {
  try {
    const  owner  = req.params.id;

    if (!owner) {
      return res.status(400).json({ message: "Owner is required", success: false });
    }

    const projects = await Projects.findById(owner);
    console.log(projects);

    if (!projects.length) {
      return res.status(404).json({
        message: "No Projects Found",
        success: false,
      });
    }

    return res.status(200).json({
      projects,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const getallprojects = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const projects = await Projects.find({
      title: { $regex: keyword, $options: "i" },
    });

    if (!projects.length) {
      return res.status(404).json({
        message: "Projects Not Found",
        success: false,
      });
    }

    return res.status(200).json({
      projects,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching all projects:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};
