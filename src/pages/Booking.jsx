import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import caregiversData from "../data/caregivers";

function Booking() {
  const navigate = useNavigate();

  // Page load hote hi check karega ki login hai ya nahi
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login"); // Bina login wapas bhej dega
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    patientName: "",
    phone: "",
    serviceType: "Routine Checkup & BP/Sugar Monitoring",
    caregiverId: caregiversData[0]?.id || "",
    date: "",
    timeSlot: "09:00 AM - 11:00 AM",
    address: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Jis user ne login kiya hai, uski email nikal rahe hain
    const currentUserEmail = localStorage.getItem("userEmail");

    const newBooking = {
      ...formData,
      id: Date.now(),
      userEmail: currentUserEmail // Booking ke sath user ki email save kar di
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    existingBookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    setIsSubmitted(true);
  };

  return (
    <div className="booking-page py-5 bg-light min-vh-100">
      <div className="container" style={{ maxWidth: "750px" }}>
        <div className="text-center mb-4">
          <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
            Home Visit Booking
          </span>
          <h1 className="fw-bold">Schedule a Nurse / Caregiver Visit</h1>
          <p className="text-muted small">
            Select your preferred time slot and verified professional for home-based care.
          </p>
        </div>

        <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5 bg-white">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <h5 className="fw-bold mb-3 text-primary">1. Patient Information</h5>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Patient Full Name</label>
                  <input type="text" name="patientName" className="form-control rounded-3 py-2" value={formData.patientName} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Contact Number</label>
                  <input type="tel" name="phone" className="form-control rounded-3 py-2" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>

              <h5 className="fw-bold mb-3 text-primary">2. Select Service & Professional</h5>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Service Type</label>
                  <select name="serviceType" className="form-select rounded-3 py-2" value={formData.serviceType} onChange={handleChange}>
                    <option value="Routine Checkup & BP/Sugar Monitoring">Routine Checkup & BP/Sugar Monitoring</option>
                    <option value="Post-Surgery Wound Dressing">Post-Surgery Wound Dressing</option>
                    <option value="Physiotherapy Session">Physiotherapy Session</option>
                    <option value="24/7 Nursing Supervision">24/7 Nursing Supervision</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Select Nurse / Caregiver</label>
                  <select name="caregiverId" className="form-select rounded-3 py-2" value={formData.caregiverId} onChange={handleChange}>
                    {caregiversData.map((nurse) => (
                      <option key={nurse.id} value={nurse.id}>{nurse.name} ({nurse.role})</option>
                    ))}
                  </select>
                </div>
              </div>

              <h5 className="fw-bold mb-3 text-primary">3. Date & Preferred Slot</h5>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Preferred Date</label>
                  <input type="date" name="date" className="form-control rounded-3 py-2" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Time Slot</label>
                  <select name="timeSlot" className="form-select rounded-3 py-2" value={formData.timeSlot} onChange={handleChange}>
                    <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                    <option value="11:30 AM - 01:30 PM">11:30 AM - 01:30 PM</option>
                    <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                    <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
                  </select>
                </div>
              </div>

              <h5 className="fw-bold mb-3 text-primary">4. Address & Notes</h5>
              <div className="mb-3">
                <label className="form-label fw-semibold small">Complete Home Address</label>
                <textarea name="address" className="form-control rounded-3" rows="2" value={formData.address} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 rounded-pill py-3 fw-bold shadow-sm">
                Confirm Home Visit Booking
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="display-1 text-success mb-3">✅</div>
              <h3 className="fw-bold mb-2">Booking Confirmed!</h3>
              <p className="text-muted mb-4">Your home care visit has been successfully scheduled.</p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-outline-primary rounded-pill px-4 fw-semibold" onClick={() => setIsSubmitted(false)}>Book Another</button>
                <a href="/dashboard" className="btn btn-primary rounded-pill px-4 fw-semibold">Go to Dashboard</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Booking;
