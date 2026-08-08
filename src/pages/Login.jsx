import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // LocalStorage mein user ka login status save kar rahe hain
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    
    // Login hote hi user ko direct Booking page par bhej denge
    navigate("/booking");
  };

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-sm border-0 rounded-4 p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Login</h2>
          <p className="text-muted small">Please login to book a home visit</p>
        </div>
        
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold small">Email Address</label>
            <input 
              type="email" 
              className="form-control rounded-3 py-2" 
              placeholder="Enter your email"
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold small">Password</label>
            <input 
              type="password" 
              className="form-control rounded-3 py-2" 
              placeholder="Enter your password"
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-pill py-2 fw-bold shadow-sm">
            Login & Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
