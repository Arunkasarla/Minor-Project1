import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // SET AUTH STATE ✅
    login(role);

    // ROLE-BASED REDIRECT ✅
    if (role === "User") navigate("/user");
    else if (role === "Provider") navigate("/provider");
    else if (role === "Admin") navigate("/admin");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-left">
          <h1>Welcome Back 👋</h1>
          <p>Login to manage your services and bookings</p>
        </div>

        <div className="auth-right">
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option>User</option>
            <option>Provider</option>
            <option>Admin</option>
          </select>

          <button className="btn full" onClick={handleLogin}>
            Login
          </button>

          <p className="auth-footer">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;