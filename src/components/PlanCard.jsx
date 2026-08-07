import React from "react";
import { Link } from "react-router-dom";

function PlanCard({ plan }) {
  // Save selected plan details to browser localStorage
  const handleSelectPlan = () => {
    localStorage.setItem("activePlanName", plan.name);
    localStorage.setItem("activePlanPrice", plan.price);
    localStorage.setItem("activePlanTagline", plan.tagline);
  };

  return (
    <div className="card h-100 shadow-sm border-0 rounded-4 p-4 d-flex flex-column">
      {/* Plan Badge */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className={`badge ${plan.badgeColor} px-3 py-2 rounded-pill`}>
          {plan.badge}
        </span>
        <span className="text-muted small fw-semibold">Auto-Renewal</span>
      </div>

      {/* Plan Name & Price */}
      <h3 className="fw-bold mb-1">{plan.name}</h3>
      <p className="text-muted small mb-3">{plan.tagline}</p>
      <div className="mb-4">
        <span className="display-6 fw-bold text-primary">{plan.price}</span>
        <span className="text-muted small"> / {plan.period}</span>
      </div>

      {/* Features List */}
      <ul className="list-unstyled mb-4 flex-grow-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="mb-2 d-flex align-items-center small">
            <span className="text-success me-2 fw-bold">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Recommended Note & Action Button */}
      <div className="mt-auto pt-3 border-top">
        <p className="small text-secondary mb-3">
          <strong>Best For:</strong> {plan.recommendedFor}
        </p>
        <Link
          to="/checkout"
          onClick={handleSelectPlan}
          className="btn btn-primary w-100 rounded-pill py-2 fw-semibold shadow-sm"
        >
          Subscribe Now
        </Link>
      </div>
    </div>
  );
}

export default PlanCard;