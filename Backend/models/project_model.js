// models/project_model.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  positions: {
    type: [String],
    required: true,
  },
  owner: {
    type: String, // Changed from ObjectId to String
    required: true,
  },
});

export const Projects = mongoose.model("Projects", projectSchema);
