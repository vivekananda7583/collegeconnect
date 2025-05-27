import React, { useState, useEffect } from "react";
import { USER_API_END_POINT, PROJECT_API_END_POINT } from "../../utils/constant";
import ProjectCard from "./ProjectCard"; // Assuming you have a ProjectCard component

const Profile = () => {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      fetchProjects(storedUser.username);
    }
  }, []);

  const fetchProjects = async (owner) => {
    try {
      const response = await fetch(`${PROJECT_API_END_POINT}/adminprojects?owner=${owner}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        setProjects(data.projects);
      } else {
        console.error("Failed to fetch projects:", data.message);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = {
        username: e.target.username.value,
        email: e.target.email.value,
        collegename: user.collegename,
      };

      const response = await fetch(`${USER_API_END_POINT}/update-user/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        const updatedUserData = await response.json();
        localStorage.setItem("user", JSON.stringify(updatedUserData));
        setUser(updatedUserData);
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header text-center">
          <h4>User Profile</h4>
        </div>
        <div className="card-body text-center">
          <div className="mb-3">
            <span role="img" aria-label="user" style={{ fontSize: "50px" }}>
              👤
            </span>
          </div>
          <h5 className="card-title">{user.username}</h5>
          <p className="card-text">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="card-text">
            <strong>College Name:</strong> {user.collegename}
          </p>
        </div>
        <button
          className="btn btn-primary m-3"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {isEditing && (
        <div className="card shadow-sm mt-3">
          <div className="card-header text-center">
            <h4>Edit Profile</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  defaultValue={user.username}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  defaultValue={user.email}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="collegename">College Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="collegename"
                  name="collegename"
                  defaultValue={user.collegename}
                  placeholder="Enter your college name"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="mt-4">
        <h5>Your Projects</h5>
        <div className="row">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div className="col-md-4" key={project._id}>
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
