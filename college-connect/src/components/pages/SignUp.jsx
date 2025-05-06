import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "../../utils/constant";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    email: "",
    collegename: "",
    password: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        username: input.username,
        email: input.email,
        collegename: input.collegename,
        password: input.password,
      };
      const res = await axios.post(`${USER_API_END_POINT}/register`, userData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/login");
      } else {
        console.error("Registration failed:", res.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">SignUp</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label>Username :</label>
            <input
              className="form-control"
              onChange={changeEventHandler}
              type="text"
              placeholder="Enter Username"
              name="username"
              value={input.username}
              required
            />
          </div>
          <div className="mb-3">
            <label>Email :</label>
            <input
              className="form-control"
              onChange={changeEventHandler}
              type="email"
              value={input.email}
              placeholder="Enter Email"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label>College Name:</label>
            <input
              className="form-control"
              onChange={changeEventHandler}
              type="text"
              value={input.collegename}
              placeholder="Enter College Name"
              name="collegename"
              required
            />
          </div>
          <div className="mb-3">
            <label>Password :</label>
            <input
              className="form-control"
              onChange={changeEventHandler}
              type="password"
              value={input.password}
              placeholder="Enter password"
              name="password"
              required
              minLength="6"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
