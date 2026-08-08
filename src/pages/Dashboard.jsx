import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [allBookings, setAllBookings] = useState([]);

  // Baki states (Plan and Vitals)
  const [activePlan, setActivePlan] = useState({ name: "Gold Plan", price: "₹9,999", tagline: "Dedicated Senior & Elderly Care" });
  const [vitals, setVitals] = useState({ bloodPressure: "128/82 mmHg", bloodSugar: "110 mg/dL", pulseRate: "74 bpm", oxygenLevel: "98%" });

  useEffect(() => {
    // 1. LOGIN CHECK
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userEmail = localStorage.getItem("userEmail");

    if (!isLoggedIn) {
      navigate("/login"); // Agar login nahi hai, toh turant Login page par bhejo
      return;
    }
    setCurrentUserEmail(userEmail);

    // 2. Fetch Active Plan
    const savedName = localStorage.getItem("activePlanName");
    const savedPrice = localStorage.getItem("activePlanPrice");
    if (savedName && savedPrice) {
      setActivePlan({ name: savedName, price: savedPrice, tagline: "Active Home Healthcare Subscription" });
    }

    // 3. FETCH & FILTER BOOKINGS (Admin vs User)
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    
    if (userEmail === "admin@gmail.com") {
      // Agar ADMIN hai, toh saari list dikhao
      setAllBookings(savedBookings);
    } else {
      // Agar NORMAL USER hai, toh sirf uski email wali bookings dikhao
      const myBookings = savedBookings.filter(booking => booking.userEmail === userEmail);
      setAllBookings(myBookings);
    }
  }, [navigate]);

  // LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  const clearAllBookings = () => {
    if (window.confirm("Are you sure you want to delete all bookings?")) {
      localStorage.removeItem("bookings");
      setAllBookings([]);
    }
  };

  // Check if Admin
  const isAdmin = currentUserEmail === "admin@gmail.com";

  return (
    <div className="dashboard-page py-5 bg-light min-vh-100">
      <div className="container">
        
        {/* Top Header with LOGOUT Button */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-3 border-bottom">
          <div>
            <span className="badge bg-primary-subtle text-primary px-3 py-1 rounded-pill small fw-semibold mb-2">
              {isAdmin ? "Admin Portal" : "Patient Portal & Family View"}
            </span>
            <h1 className="fw-bold mb-1">
              {isAdmin ? "Admin Dashboard" : "My Care Dashboard"}
            </h1>
            <p className="text-muted small mb-0">Logged in as: {currentUserEmail}</p>
          </div>
          <div className="mt-3 mt-md-0 d-flex gap-2">
            <Link to="/booking" className="btn btn-primary rounded-pill px-4 fw-semibold shadow-sm">+ Schedule Nurse Visit</Link>
            <button onClick={handleLogout} className="btn btn-danger rounded-pill px-4 fw-semibold shadow-sm">
              Logout
            </button>
          </div>
        </div>

        {/* ... Active Subscription & Vitals Cards (Yahan sirf 3rd section main change hai) ... */}
        
        <div className="row g-4 mt-2">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">📅 {isAdmin ? "All Platform Scheduled Visits" : "My Scheduled Visits"}</h6>
                <div>
                  <span className="badge bg-primary-subtle text-primary me-2">{allBookings.length} Confirmed</span>
                  {/* Delete All button sirf admin ko dikhega */}
                  {isAdmin && allBookings.length > 0 && (
                    <button onClick={clearAllBookings} className="btn btn-sm btn-danger rounded-pill px-3 shadow-sm">
                      🗑️ Delete All Bookings
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
                        <br/>
                        {/* Admin ko pata chale ki booking kis email se hui hai */}
                        {isAdmin && <span className="text-danger small">Booked by: {booking.userEmail}</span>}
                      </p>
                      <p className="text-muted small mb-0">
                        <strong>Address:</strong> {booking.address}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="bg-light p-4 rounded-3 mb-3 text-center">
                    <p className="text-muted small mb-0">No upcoming visits scheduled.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
