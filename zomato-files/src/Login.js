import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.scss";
import Logo from "./assets/images/Zomato-Logo.png";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    const name = email.split("@")[0];
    onLogin(name);
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <img src={Logo} alt="Zomato" className="auth-logo" />
        <h2>Welcome back!</h2>
        <p>Login to order your favourite food</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="auth-btn">Login</button>
        </form>

        <p className="auth-switch">
          New here?{" "}
          <span onClick={() => navigate("/signup")}>Create an account</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
