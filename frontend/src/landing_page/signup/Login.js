import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://zerodha-5hf3.onrender.com/login",
        user
      );

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      console.log("Stored:", localStorage.getItem("token"));

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <img
          src="/media/logo.svg"
          alt="Zerodha"
          className="signup-logo"
        />

        <h2 className="signup-title">Welcome Back</h2>

        <p className="signup-subtitle">
          Login to your Zerodha account
        </p>

        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <label className="form-label">
              Email Address
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn signup-btn"
          >
            Login
          </button>

        </form>

        <p className="login-text">
          Don't have an account?{" "}
          <Link to="/signup">Create Account</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;