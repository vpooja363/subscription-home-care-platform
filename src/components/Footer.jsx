import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4">
            <h4 className="fw-bold text-white mb-3">🏥 CareHub India</h4>
            <p className="text-secondary small">
              India's trusted subscription-based home healthcare platform. Providing
              professional nursing, elderly monitoring, and post-surgery care at
              the comfort of your home.
            </p>
            <p className="text-secondary small mb-0">
              © {new Date().getFullYear()} CareHub Technologies Pvt. Ltd.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-6">
            <h6 className="text-white fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/" className="text-secondary text-decoration-none">Home</Link></li>
              <li><Link to="/plans" className="text-secondary text-decoration-none">Subscription Plans</Link></li>
              <li><Link to="/caregivers" className="text-secondary text-decoration-none">Our Caregivers</Link></li>
              <li><Link to="/dashboard" className="text-secondary text-decoration-none">Patient Portal</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-6">
            <h6 className="text-white fw-bold mb-3">Our Services</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
              <li>Elderly & Senior Care</li>
              <li>Post-Surgery Nursing</li>
              <li>Physiotherapy at Home</li>
              <li>24/7 Doctor On-Call</li>
              <li>Medical Equipment Rental</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3">
            <h6 className="text-white fw-bold mb-3">Emergency & Contact</h6>
            <p className="small text-secondary mb-1">📞 Helpline: 1800-123-4567</p>
            <p className="small text-secondary mb-1">🚨 SOS Ambulance: 102 / 108</p>
            <p className="small text-secondary">📧 support@carehub.in</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;