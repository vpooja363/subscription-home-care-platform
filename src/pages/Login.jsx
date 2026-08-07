import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // Active tab state: 'login' or 'register'
  const [isRegistering, setIsRegistering] = useState(false);

  // Selected role state: 'patient', 'caregiver', or 'admin'
  const [selectedRole, setSelectedRole] = useState("patient");

  // Form fields state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Phase 1 Dummy Auth & Navigation)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Store dummy user session in localStorage for evaluation
    const sessionData = {
      role: selectedRole,
      name: formData.name || "Demo User",
      email: formData.email || "user@carehub.in",
      isLoggedIn: true,
    };
    localStorage.setItem("carehub_user", JSON.stringify(sessionData));

    // Role-based redirection per PRD guidelines
    if (selectedRole === "patient") {
      alert("✅ Logged in as Patient/Family. Redirecting to Patient Dashboard...");
      navigate("/dashboard");
    } else if (selectedRole === "caregiver") {
      alert("✅ Logged in as Caregiver/Nurse. Redirecting to Caregiver Portal...");
      navigate("/caregivers");
    } else {
      alert("✅ Logged in as System Admin. Redirecting to Admin Panel...");
      navigate("/");
    }
  };

  return (
    <div className="login-page py-5 bg-light min-vh-100 d-flex align-items-center">
      <div className="container" style={{ maxWidth: "550px" }}>
        <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5 bg-white">
          {/* Header Title */}
          <div className="text-center mb-4">
            <span className="fs-1">🏥</span>
            <h2 className="fw-bold mt-2">
              {isRegistering ? "Create CareHub Account" : "Welcome Back to CareHub"}
            </h2>
            <p className="text-muted small">
              {isRegistering
                ? "Select your role and create a new portal account"
                : "Sign in to access your healthcare subscription portal"}
            </p>
          </div>

          {/* Role Selection Buttons (RBAC - Patient / Caregiver / Admin) */}
          <div className="mb-4">
            <label className="form-label small fw-bold text-muted d-block text-center mb-2">
              SELECT YOUR ACCESS ROLE:
            </label>
            <div className="btn-group w-100 shadow-sm" role="group">
              <button
                type="button"
                className={`btn py-2 ${
                  selectedRole === "patient"
                    ? "btn-primary fw-bold"
                    : "btn-outline-secondary"
                }`}
                onClick={() => setSelectedRole("patient")}
              >
                👨‍👩‍👦 Patient / Family
              </button>
              <button
                type="button"
                className={`btn py-2 ${
                  selectedRole === "caregiver"
                    ? "btn-success fw-bold"
                    : "btn-outline-secondary"
                }`}
                onClick={() => setSelectedRole("caregiver")}
              >
                🩺 Nurse / Staff
              </button>
              <button
                type="button"
                className={`btn py-2 ${
                  selectedRole === "admin"
                    ? "btn-dark fw-bold"
                    : "btn-outline-secondary"
                }`}
                onClick={() => setSelectedRole("admin")}
              >
                ⚙️ Admin
              </button>
            </div>
          </div>

          {/* Login / Registration Form */}
          <form onSubmit={handleSubmit}>
            {/* Show Name & Phone only during Registration */}
            {isRegistering && (
              <>
                <div className="mb-3">
                  <label className="form-label fw-semibold small">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded-3 py-2"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold small">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control rounded-3 py-2"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            <div className="mb-3">
              <label className="form-label fw-semibold small">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control rounded-3 py-2"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold small">Password</label>
              <input
                type="password"
                name="password"
                className="form-control rounded-3 py-2"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 rounded-pill py-2 fw-bold shadow-sm"
            >
              {isRegistering
                ? `Register as ${selectedRole.toUpperCase()}`
                : `Login as ${selectedRole.toUpperCase()}`}
            </button>
          </form>

          {/* Toggle between Login and Register */}
          <div className="text-center mt-4 pt-2 border-top">
            <span className="small text-muted">
              {isRegistering
                ? "Already have an account? "
                : "Don't have a portal account? "}
            </span>
            <button
              type="button"
              className="btn btn-link p-0 small fw-bold text-decoration-none"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? "Sign In Here" : "Register Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;