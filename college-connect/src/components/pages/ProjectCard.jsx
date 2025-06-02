import React from "react";
import axios from "axios";

const ProjectCard = ({ project }) => {
  if (!project) return null;
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const description = project.summary || "";
  const tags = (project.positions || []).join(" ");
  const owner = project.owner || "Unknown Owner";

  const handleInterestClick = async () => {
  if (!loggedInUser) {
    alert("Please log in first!");
    return;
  }

  console.log("Sending email with data:", {
  projectCreatorEmail: project.ownerEmail,
  projectTitle: project.title,
  interestedUserName: loggedInUser.username,
  interestedUserEmail: loggedInUser.email,
});


  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/email/send-interest-email",
      payload,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    if (response.data.success) {
      alert("Interest email sent successfully!");
    } else {
      alert("Failed to send email: " + response.data.message);
    }
  } catch (error) {
    alert("Error sending email: " + (error.response?.data?.message || error.message));
  }
};


  return (
    <div className="card m-2" style={{ width: "18rem", minHeight: "20rem" }}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-primary">{project.title}</h5>

        <p className="card-text small text-muted mb-2">
          {description.length > 100 ? description.slice(0, 100) + "..." : description}
        </p>

        <div className="mb-2">
          <strong className="d-block mb-1">Required Positions:</strong>
          <div className="d-flex flex-wrap gap-1">
            {tags
              .split(" ")
              .filter(tag => tag.trim())
              .map((tag, index) => (
                <span key={index} className="badge bg-primary">{tag}</span>
              ))}
          </div>
        </div>

        <div className="mt-auto">
          <p className="small mb-2">
            <strong>Owner:</strong> {owner}
          </p>
          <button
            className="btn btn-outline-success btn-sm w-100"
            onClick={handleInterestClick}
          >
            I'm Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
