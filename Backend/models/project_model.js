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
    type: String,
    required: true,
  },
  ownerEmail: {                     // ✅ New field to store email
    type: String,
    required: true,
  },
});

export const Projects = mongoose.model("Projects", projectSchema);
