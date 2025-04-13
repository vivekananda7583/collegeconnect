import React from "react";

const ProjectCard = () => {
    return (
        <div className="card shadow-sm p-3 m-4" style={{ width: "100%", maxWidth: "400px" }}>
            <div className="card-body">
                <h5 className="card-title">AI Chatbot for College Queries</h5>
                <p className="card-text text-muted">
                    A chatbot to assist students with common college-related queries.
                </p>
                
                <div>
                    <strong>Required Positions:</strong>
                    <ul className="list-unstyled mt-2">
                        <li className="badge bg-primary me-1">React Developer</li>
                        <li className="badge bg-primary me-1">Backend Developer</li>
                        <li className="badge bg-primary me-1">UI/UX Designer</li>
                    </ul>
                </div>

                <p className="mt-3"><strong>Project Owner:</strong> John Doe</p>

                <button className="btn btn-outline-primary w-100">Message</button>
            </div>
        </div>
    );
};

export default ProjectCard;
