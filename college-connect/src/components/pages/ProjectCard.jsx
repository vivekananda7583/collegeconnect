import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  if (!project) return null;  // Safeguard if project is not passed or is null/undefined
  const navigate = useNavigate();

  const description = project.summary || "";  // Fallback to empty string if description is undefined
  const tags = (project.positions || []).join(" ");
  // Fallback to empty string if tags is undefined
  const owner = project.owner || "Unknown Owner";  // Fallback to a default owner name if not available
  const handleMessageClick = (recipient) => {
    // Handle message click logic here
    navigate("/Chat",{state:{recipient}});
  };
  return (
    <div className="card m-2" style={{ width: "18rem", minHeight: "18rem" }}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-primary">{project.title}</h5>
        
        <p className="card-text small text-muted mb-2">
          {description.length > 100
            ? description.slice(0, 100) + "..."  // Truncate description if too long
            : description}
        </p>

        <div className="mb-2">
          <strong className="d-block mb-1">Required Positions:</strong>
          <div className="d-flex flex-wrap gap-1">
            {tags
              .split(" ")  // Split the tags based on spaces
              .filter(tag => tag.trim())  // Filter out any empty tags
              .map((tag, index) => (
                <span key={index} className="badge bg-primary">{tag}</span>
              ))}
          </div>
        </div>

        <div className="mt-auto">
          <p className="small mb-2">
            <strong>Owner:</strong> {owner}
          </p>
          <button className="btn btn-outline-primary btn-sm w-100" onClick={() => handleMessageClick(project.owner)}>
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
