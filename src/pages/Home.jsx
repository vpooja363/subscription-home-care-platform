import React from "react";
import { Link } from "react-router-dom";
import plans from "../data/plans";
import PlanCard from "../components/PlanCard";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="py-5 bg-light border-bottom">
        <div className="container py-4 text-center">
          <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-3">
            Preventive & Subscription-Based Healthcare
          </span>
          <h1 className="display-4 fw-bold mb-3">
            Predictable Home Care for Your Loved Ones
          </h1>
          <p className="lead text-muted mx-auto mb-4" style={{ maxWidth: "750px" }}>
            Say goodbye to emergency breakdowns and inconsistent nursing quality. 
            Subscribe to structured monthly maintenance plans with verified nurses, 
            daily vitals tracking, and 24/7 doctor support.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/plans" className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm fw-bold">
              View Care Plans
            </Link>
            <Link to="/dashboard" className="btn btn-outline-dark btn-lg rounded-pill px-4 fw-semibold">
              Family Dashboard Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Subscription Plans Preview Section */}
      <section className="py-5">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Subscription Packages</h2>
            <p className="text-muted">
              Choose a monthly plan tailored for routine monitoring or intensive care.
            </p>
          </div>

          <div className="row g-4">
            {plans.map((plan) => (
              <div className="col-lg-4" key={plan.id}>
                <PlanCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;