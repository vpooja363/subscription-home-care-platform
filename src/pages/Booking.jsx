import React, { useState } from "react";
import caregiversData from "../data/caregivers";

function Booking() {
  // Form state for appointment booking
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

  // Booking status state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="booking-page py-5 bg-light min-vh-100">
      <div className="container" style={{ maxWidth: "750px" }}>
        {/* Page Header */}
        <div className="text-center mb-4">
          <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
            Home Visit Booking
          </span>
          <h1 className="fw-bold">Schedule a Nurse / Caregiver Visit</h1>
          <p className="text-muted small">
            Select your preferred time slot and verified professional for home-based care.
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5 bg-white">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              {/* Patient Details Section */}
              <h5 className="fw-bold mb-3 text-primary">1. Patient Information</h5>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Patient Full Name</label>
                  <input
                    type="text"
                    name="patientName"
                    className="form-control rounded-3 py-2"
                    placeholder="e.g. Rajeshwar Sharma"
                    value={formData.patientName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Contact Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control rounded-3 py-2"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Service & Caregiver Selection Section */}
              <h5 className="fw-bold mb-3 text-primary">2. Select Service & Professional</h5>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Service Type</label>
                  <select
                    name="serviceType"
                    className="form-select rounded-3 py-2"
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option value="Routine Checkup & BP/Sugar Monitoring">
                      Routine Checkup & BP/Sugar Monitoring
                    </option>
                    <option value="Post-Surgery Wound Dressing">
                      Post-Surgery Wound Dressing
                    </option>
                    <option value="Physiotherapy Session">
                      Physiotherapy Session
                    </option>
                    <option value="24/7 Nursing Supervision">
                      24/7 Nursing Supervision
                    </option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Select Nurse / Caregiver</label>
                  <select
                    name="caregiverId"
                    className="form-select rounded-3 py-2"
                    value={formData.caregiverId}
                    onChange={handleChange}
                  >
                    {caregiversData.map((nurse) => (
                      <option key={nurse.id} value={nurse.id}>
                        {nurse.name} ({nurse.role})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot Section */}
              <h5 className="fw-bold mb-3 text-primary">3. Date & Preferred Slot</h5>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control rounded-3 py-2"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Time Slot</label>
                  <select
                    name="timeSlot"
                    className="form-select rounded-3 py-2"
                    value={formData.timeSlot}
                    onChange={handleChange}
                  >
                    <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                    <option value="11:30 AM - 01:30 PM">11:30 AM - 01:30 PM</option>
                    <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                    <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Home Address & Special Instructions */}
              <h5 className="fw-bold mb-3 text-primary">4. Address & Notes</h5>
              <div className="mb-3">
                <label className="form-label fw-semibold small">Complete Home Address</label>
                <textarea
                  name="address"
                  className="form-control rounded-3"
                  rows="2"
                  placeholder="House no., Street, Landmark, City..."
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold small">
                  Special Instructions (Optional)
                </label>
                <input
                  type="text"
                  name="notes"
                  className="form-control rounded-3 py-2"
                  placeholder="e.g. Please bring portable BP machine"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 rounded-pill py-3 fw-bold shadow-sm"
              >
                Confirm Home Visit Booking
              </button>
            </form>
          ) : (
            /* Booking Confirmation View */
            <div className="text-center py-4">
              <div className="display-1 text-success mb-3">✅</div>
              <h3 className="fw-bold mb-2">Booking Confirmed!</h3>
              <p className="text-muted mb-4">
                Your home care visit has been successfully scheduled. Our care manager will call
                you within 15 minutes to confirm nurse dispatch details.
              </p>

              <div className="card bg-light border-0 rounded-3 p-3 text-start mb-4 mx-auto" style={{ maxWidth: "450px" }}>
                <p className="small mb-1">
                  <strong>Patient:</strong> {formData.patientName} ({formData.phone})
                </p>
                <p className="small mb-1">
                  <strong>Service:</strong> {formData.serviceType}
                </p>
                <p className="small mb-1">
                  <strong>Date & Time:</strong> {formData.date} | {formData.timeSlot}
                </p>
                <p className="small mb-0">
                  <strong>Address:</strong> {formData.address}
                </p>
              </div>

              <div className="d-flex justify-content-center gap-3">
                <button
                  className="btn btn-outline-primary rounded-pill px-4 fw-semibold"
                  onClick={() => setIsSubmitted(false)}
                >
                  Book Another Visit
                </button>
                <a href="/dashboard" className="btn btn-primary rounded-pill px-4 fw-semibold">
                  Go to Dashboard
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Booking;