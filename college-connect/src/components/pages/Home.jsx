import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
 
      <section className="hero text-center text-white d-flex align-items-center justify-content-center" style={{ height: "80vh", background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://source.unsplash.com/1600x900/?college,students') center/cover" }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to CollegeConnect</h1>
          <p className="lead">Find collaborators, share ideas, and build amazing projects together.</p>
          <Link to="/SignUp" className="btn btn-primary btn-lg">Join Now</Link>
        </div>
      </section>

      <section className="container my-5">
        <h2 className="text-center mb-4">Why Choose CollegeConnect?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Post Project Ideas</h5>
                <p className="card-text">Easily share your project ideas and find teammates to work with.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Find Team Members</h5>
                <p className="card-text">Browse projects and connect with like-minded individuals.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Collaborate Seamlessly</h5>
                <p className="card-text">Chat with project owners and work together efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>How It Works</h2>
          <div className="row mt-4">
            <div className="col-md-3">
              <h5>1. Sign Up</h5>
              <p>Create your profile and get started.</p>
            </div>
            <div className="col-md-3">
              <h5>2. Post or Join Projects</h5>
              <p>Start a project or join one that interests you.</p>
            </div>
            <div className="col-md-3">
              <h5>3. Collaborate</h5>
              <p>Communicate with your team and work together.</p>
            </div>
            <div className="col-md-3">
              <h5>4. Build & Succeed</h5>
              <p>Turn ideas into reality with the right team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-5">
        <h2>Ready to Start?</h2>
        <Link to="/SignUp" className="btn btn-success btn-lg mt-3">Join CollegeConnect Now</Link>
      </section>
    </div>
  );
};

export default Home;
