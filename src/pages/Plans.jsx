import React from "react";
import { Link } from "react-router-dom";

function Plans() {
  // Subscription plans list
  const plansData = [
    {
      id: "silver",
      name: "Silver Care Plan",
      tagline: "Basic Monthly Vitals & Checkup",
      price: "₹4,999",
      period: "month",
      badge: "Starter",
      badgeColor: "bg-secondary-subtle text-secondary",
      recommendedFor: "Routine monthly monitoring for stable seniors.",
      features: [
        "2 Nurse Home Visits per month",
        "Basic BP, Sugar & Pulse monitoring",
        "Monthly Health Summary Report",
        "Standard Support (9 AM - 6 PM)",
      ],
    },
    {
      id: "gold",
      name: "Gold Care Plan",
      tagline: "Dedicated Senior & Elderly Care",
      price: "₹9,999",
      period: "month",
      badge: "Most Popular",
      badgeColor: "bg-warning-subtle text-warning",
      recommendedFor: "Seniors requiring regular supervision and doctor consultation.",
      features: [
        "4 Nurse Home Visits per month",
        "1 Doctor Video Consultation",
        "24/7 Remote Family Vital Tracking",
        "Priority Emergency Support",
        "Free BP & Glucometer Calibration",
      ],
    },
    {
      id: "platinum",
      name: "Platinum Care Plan",
      tagline: "Comprehensive 24/7 ICU & Post-Op Care",
      price: "₹18,999",
      period: "month",
      badge: "Recommended",
      badgeColor: "bg-primary-subtle text-primary",
      recommendedFor: "Post-surgery recovery, bedridden patients, or intensive care.",
      features: [
        "8 Nurse Home Visits per month",
        "2 Doctor Home Visits / Video Consults",
        "24/7 Emergency SOS Ambulance Priority",
        "Dedicated Care Manager",
        "Physiotherapy & Wound Dressing Included",
      ],
    },
  ];

  // Save selected plan details to browser localStorage when user clicks Subscribe
  const handleSelectPlan = (plan) => {
    localStorage.setItem("activePlanName", plan.name);
    localStorage.setItem("activePlanPrice", plan.price);
    localStorage.setItem("activePlanTagline", plan.tagline);
  };

  return (
    <div className="plans-page py-5 bg-light min-vh-100">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-5">
          <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
            Flexible Care Subscriptions
          </span>
          <h1 className="fw-bold">Choose the Right Home Care Plan</h1>
          <p className="text-muted small">
            Transparent monthly auto-renewing subscription packages for your family.
          </p>
        </div>

        {/* Plan Cards Grid */}
        <div className="row g-4 align-items-stretch mb-5">
          {plansData.map((plan) => (
            <div key={plan.id} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4 d-flex flex-column bg-white">
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

                {/* Action Button */}
                <div className="mt-auto pt-3 border-top">
                  <p className="small text-secondary mb-3">
                    <strong>Best For:</strong> {plan.recommendedFor}
                  </p>
                  <Link
                    to="/checkout"
                    onClick={() => handleSelectPlan(plan)}
                    className="btn btn-primary w-100 rounded-pill py-2 fw-semibold shadow-sm"
                  >
                    Subscribe Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;