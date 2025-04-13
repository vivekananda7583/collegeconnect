import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";


const Dashboard = () => {

    return (
        <div className="d-flex">
            <div className="d-flex flex-column p-3 bg-light" style={{ width: "300px", height: "100vh" }}>
                <h4>Dashboard</h4>
                <div className="p-3">
                    <ul className="nav flex-column">
                        <li className="nav-item p-3">
                            <NavLink to="/dashboard" className="nav-link text-dark">Browse Projects</NavLink>
                        </li>
                        <li className="nav-item p-3">
                            <NavLink to="/profile" className="nav-link text-dark">My Profile</NavLink>
                        </li>
                        <li className="nav-item p-3">
                            <NavLink to="/Postidea" className="nav-link text-dark">Post Idea</NavLink>
                        </li>
                        <li className="nav-item p-3">
                            <NavLink to="/messages" className="nav-link text-dark">Messages</NavLink>
                        </li>
                        <li className="nav-item p-3">
                            <button className="btn btn-danger w-100 mt-3">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
            <main className="p-4 d-flex flex-wrap gap-3">
                <ProjectCard ></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </main>
        </div>
    );
};

export default Dashboard;
