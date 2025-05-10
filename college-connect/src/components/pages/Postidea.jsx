import React, { useState, useContext, useEffect } from "react";
import { ProjectContext } from "./ProjectContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PROJECT_API_END_POINT } from "../../utils/constant";

const Postidea = () => {
  const { addProject } = useContext(ProjectContext);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    title: "",
    summary: "",
    tags: "",
    owner: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setInput((prev) => ({
        ...prev,
        owner: user.username,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${PROJECT_API_END_POINT}/post`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error posting project:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Post Idea</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Project Title:</label>
            <input
              type="text"
              name="title"
              value={input.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter the project title"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Project Summary:</label>
            <textarea
              name="summary"
              value={input.summary}
              onChange={handleChange}
              rows="4"
              className="form-control"
              placeholder="Describe the project"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Required Positions:</label>
            <input
              type="text"
              name="tags"
              value={input.tags}
              onChange={handleChange}
              className="form-control"
              placeholder="e.g. React Backend Designer"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Project Owner:</label>
            <input
              type="text"
              name="owner"
              value={input.owner}
              onChange={handleChange}
              className="form-control"
              placeholder="Your name"
              readOnly
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Post Idea
          </button>
        </form>
      </div>
    </div>
  );
};

export default Postidea;
