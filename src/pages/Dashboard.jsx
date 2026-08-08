import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [activePlan, setActivePlan] = useState({
    name: "Gold Plan",
    price: "₹9,999",
    tagline: "Dedicated Senior & Elderly Care",
  });

  const [vitals, setVitals] = useState({
    bloodPressure: "128/82 mmHg",
    bloodSugar: "110 mg/dL",
    pulseRate: "74 bpm",
    oxygenLevel: "98%",
  });

  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    // 1. Fetch Subscription Plan
    const savedName = localStorage.getItem("activePlanName");
    const savedPrice = localStorage.getItem("activePlanPrice");
    const savedTagline = localStorage.getItem("activePlanTagline");

    if (savedName && savedPrice) {
      setActivePlan({
        name: savedName,
        price: savedPrice,
        tagline: savedTagline || "Active Home Healthcare Subscription",
      });
    }

    // 2. Fetch Bookings
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setAllBookings(savedBookings);
  }, []);

  // NEW FEATURE: Saari bookings delete karne ka function
  const clearAllBookings = () => {
    // Ek confirmation message dikhayenge delete karne se pehle
    if (window.confirm("Are you sure you want to delete all bookings? This cannot be undone.")) {
      localStorage.removeItem("bookings"); // LocalStorage se data uda diya
      setAllBookings([]); // Screen se bhi list khali kar di
    }
  };

  return (
    <div className="dashboard-page py-5 bg-light min-vh-100">
      <div className="container">
        {/* Dashboard Top Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-3 border-bottom">
          <div>
            <span className="badge bg-primary-subtle text-primary px-3 py-1 rounded-pill small fw-semibold mb-2">
              Patient Portal & Family View
            </span>
            <h1 className="fw-bold mb-1">My Care Dashboard</h1>
            <p className="text-muted small mb-0">
              Real-time home healthcare monitoring and active subscription summary.
            </p>
          </div>
          <div className="mt-3 mt-md-0 d-flex gap-2">
            <Link to="/booking" className="btn btn-primary rounded-pill px-4 fw-semibold shadow-sm">
              + Schedule Nurse Visit
            </Link>
            <Link to="/plans" className="btn btn-outline-dark rounded-pill px-4 fw-semibold">
              Upgrade Plan
            </Link>
          </div>
        </div>

        {/* 1. DYNAMIC ACTIVE SUBSCRIPTION BANNER */}
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white border-start border-5 border-primary">
          <div className="row align-items-center">
            <div className="col-md-8 mb-3 mb-md-0">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge bg-success px-3 py-1 rounded-pill">● ACTIVE PLAN</span>
                <span className="text-muted small">Auto-Renewing Monthly</span>
              </div>
              <h3 className="fw-bold text-primary mb-1">{activePlan.name}</h3>
              <p className="text-muted small mb-0">{activePlan.tagline}</p>
            </div>
            <div className="col-md-4 text-md-end">
              <div className="fw-bold fs-3 text-dark">{activePlan.price} <span className="fs-6 text-muted">/ mo</span></div>
              <span className="text-muted small d-block mb-2">Next Billing Date: 02 Sep 2026</span>
              <span className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                ✔ Active Home Visits Included
              </span>
            </div>
          </div>
        </div>

        {/* 2. HEALTH VITALS CARDS */}
        <h5 className="fw-bold mb-3">🩺 Today's Health Vitals Summary</h5>
        <div className="row g-3 mb-5">
          <div className="col-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white h-100">
              <span className="text-muted small fw-semibold">Blood Pressure</span>
              <h4 className="fw-bold text-primary my-2">{vitals.bloodPressure}</h4>
              <span className="badge bg-success-subtle text-success small w-50">Normal</span>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white h-100">
              <span className="text-muted small fw-semibold">Fasting Sugar</span>
              <h4 className="fw-bold text-success my-2">{vitals.bloodSugar}</h4>
              <span className="badge bg-success-subtle text-success small w-50">Stable</span>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white h-100">
              <span className="text-muted small fw-semibold">Pulse Rate</span>
              <h4 className="fw-bold text-warning my-2">{vitals.pulseRate}</h4>
              <span className="badge bg-warning-subtle text-warning small w-50">Normal</span>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white h-100">
              <span className="text-muted small fw-semibold">SpO2 Oxygen</span>
              <h4 className="fw-bold text-info my-2">{vitals.oxygenLevel}</h4>
              <span className="badge bg-info-subtle text-info small w-50">Optimal</span>
            </div>
          </div>
        </div>

        {/* 3. UPCOMING BOOKED VISITS & CARE LOGS */}
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">📅 All Scheduled Visits</h6>
                <div>
                  <span className="badge bg-primary-subtle text-primary me-2">{allBookings.length} Confirmed</span>
                  {/* Delete All Button - Sirf tab dikhega jab koi booking hogi */}
                  {allBookings.length > 0 && (
                    <button onClick={clearAllBookings} className="btn btn-sm btn-danger rounded-pill px-3 shadow-sm">
                      🗑️ Delete All
                    </button>
                  )}
                </div>
              </div>
              
              <div style={{ maxHeight: "400px", overflowY: "auto", paddingRight: "5px" }}>
                {allBookings.length > 0 ? (
                  allBookings.slice().reverse().map((booking, index) => (
                    <div key={index} className="bg-light p-3 rounded-3 mb-3 border-start border-4 border-primary">
                      <h6 className="fw-bold mb-1">{booking.serviceType}</h6>
                      <p className="text-muted small mb-2">
                        <strong>Patient:</strong> {booking.patientName} ({booking.phone}) <br/>
                        <strong>Date:</strong> {booking.date} | <strong>Time:</strong> {booking.timeSlot}
                      </p>
                      <div className="d-flex align-items-center gap-2 small mb-2">
                        <span>👩‍⚕️ Professional ID: <strong>{booking.caregiverId}</strong></span>
                      </div>
                      <p className="text-muted small mb-0">
                        <strong>Address:</strong> {booking.address}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="bg-light p-4 rounded-3 mb-3 text-center">
                    <p className="text-muted small mb-0">No upcoming visits scheduled yet.</p>
                  </div>
                )}
              </div>

              <Link to="/booking" className="btn btn-outline-primary w-100 rounded-pill py-2 mt-3 small fw-semibold">
                + Book Another Visit
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
              <h6 className="fw-bold mb-3">📋 Recent Nurse Care Logs</h6>
              <ul className="list-group list-group-flush small">
                <li className="list-group-item px-0 py-2 d-flex justify-content-between">
                  <div>
                    <strong>Morning BP & Medication Administered</strong>
                    <div className="text-muted">By Nurse Anita Verma</div>
                  </div>
                  <span className="text-muted">Today, 9:30 AM</span>
                </li>
                <li className="list-group-item px-0 py-2 d-flex justify-content-between">
                  <div>
                    <strong>Physiotherapy Session Completed</strong>
                    <div className="text-muted">By Dr. Amit Patel</div>
                  </div>
                  <span className="text-muted">Yesterday</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
