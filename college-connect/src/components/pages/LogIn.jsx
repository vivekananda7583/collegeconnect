import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";

const LogIn = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/login`,
        input,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        const user = {
          username: res.data.user.username,
          email: res.data.user.email,
          collegename: res.data.user.collegename,
        };

        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // Optionally, store the authentication token
        if (res.data.token) {
          localStorage.setItem("authToken", res.data.token);
        }

        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">LogIn</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Enter Password"
              required
              minLength="6"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        {error && <p className="text-danger text-center mt-3">{error}</p>}
        <p className="text-center mt-3">
          Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
