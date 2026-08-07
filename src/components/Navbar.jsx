import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  // State to manage mobile navbar collapse open/close
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile navigation menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close navigation menu when any link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top">
      <div className="container">
        {/* Brand Logo */}
        <Link
          className="navbar-brand fw-bold text-primary d-flex align-items-center"
          to="/"
          onClick={closeMenu}
        >
          <span className="fs-3 me-2">🏥</span>
          <span>CareHub</span>
          <span className="badge bg-success-subtle text-success ms-2 small fw-normal">
            Home Care
          </span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links with Controlled Collapse */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3 pt-3 pt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/plans" onClick={closeMenu}>
                Care Plans
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/dashboard" onClick={closeMenu}>
                Family Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/caregivers" onClick={closeMenu}>
                Verified Nurses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/booking" onClick={closeMenu}>
                Book Visit
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="btn btn-outline-primary rounded-pill px-3 py-1 fw-semibold small"
                to="/login"
                onClick={closeMenu}
              >
                🔑 Login
              </NavLink>
            </li>
            <li className="nav-item ms-lg-1">
              <Link
                to="/sos"
                className="btn btn-danger rounded-pill px-3 py-1 fw-bold d-flex align-items-center gap-1 shadow-sm"
                onClick={closeMenu}
              >
                <span>🚨</span> SOS Emergency
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;