import React, { useContext, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { ProjectContext } from "./ProjectContext";
import { PROJECT_API_END_POINT, USER_API_END_POINT } from "../../utils/constant";

const Dashboard = () => {
  const navigate = useNavigate();
  const { projects, setProjects } = useContext(ProjectContext);

  const handleLogout = async () => {
    try {
      await axios.get(`${USER_API_END_POINT}/logout`, {}, { withCredentials: true });
      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${PROJECT_API_END_POINT}/getall`, {
          withCredentials: true,
        });
        if (res.data.success) {
          setProjects(res.data.projects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [setProjects]);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="d-flex flex-column p-3 bg-light" style={{ width: "300px", height: "100vh" }}>
        <h4>Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item p-3">
            <NavLink to="/dashboard" className="nav-link text-dark">
              Browse Projects
            </NavLink>
          </li>
          <li className="nav-item p-3">
            <NavLink to="/profile" className="nav-link text-dark">
              My Profile
            </NavLink>
          </li>
          <li className="nav-item p-3">
            <NavLink to="/Postidea" className="nav-link text-dark">
              Post Idea
            </NavLink>
          </li>
          <li className="nav-item p-3">
            <NavLink to="/Message" className="nav-link text-dark">
              Messages
            </NavLink>
          </li>
          <li className="nav-item p-3">
            <button type="button" className="btn btn-danger w-100 mt-3" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <main className="container-fluid p-4" style={{ flex: 1 }}>
        {projects && projects.length === 0 ? (
          <div className="text-center">
            <h3>No Projects Available</h3>
          </div>
        ) : (
          <div className="row">
            {Array.isArray(projects) &&
              projects.map((project, index) => (
                <div className="col-md-4 col-sm-6" key={index}>
                  <ProjectCard project={project} />
                </div>
              ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
