import React, { useState } from "react";
import caregiversData from "../data/caregivers";

function Caregivers() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter caregivers based on name or specialty search
  const filteredCaregivers = caregiversData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="caregivers-page py-5">
      {/* Page Header */}
      <div className="container text-center mb-5">
        <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-semibold mb-3">
          100% Background & Medical Verified
        </span>
        <h1 className="display-5 fw-bold">Our Trusted Caregivers & Nurses</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
          Every professional on CareHub undergoes rigorous police verification,
          medical certification, and specialized training in elderly and
          post-surgery care.
        </p>

        {/* Search Bar */}
        <div className="mt-4 mx-auto" style={{ maxWidth: "500px" }}>
          <input
            type="text"
            className="form-control form-control-lg rounded-pill shadow-sm px-4"
            placeholder="Search by name or specialty (e.g. Physiotherapy, ICU)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Caregivers Grid */}
      <div className="container mb-5">
        <div className="row g-4">
          {filteredCaregivers.length > 0 ? (
            filteredCaregivers.map((nurse) => (
              <div className="col-lg-6" key={nurse.id}>
                <div className="card h-100 shadow-sm border-0 rounded-4 p-4">
                  <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                    <img
                      src={nurse.photo}
                      alt={nurse.name}
                      className="rounded-circle object-fit-cover shadow-sm"
                      width="120"
                      height="120"
                    />

                    <div className="flex-grow-1 text-center text-md-start">
                      <div className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center mb-1">
                        <h4 className="fw-bold mb-0">{nurse.name}</h4>
                        <span className="badge bg-primary-subtle text-primary mt-2 mt-md-0">
                          {nurse.availability}
                        </span>
                      </div>

                      <p className="text-muted small mb-2">
                        <strong>{nurse.role}</strong> ({nurse.experience})
                      </p>

                      <p className="small text-secondary mb-3">
                        🏥 <strong>Specialty:</strong> {nurse.specialty}
                      </p>

                      <div className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center">
                        <span className="badge bg-warning-subtle text-dark fw-semibold px-3 py-1">
                          {nurse.rating}
                        </span>
                        <button
                          className="btn btn-primary rounded-pill px-4 small fw-semibold mt-2 mt-md-0"
                          onClick={() =>
                            alert(
                              `Booking request sent to ${nurse.name}. Care manager will contact you shortly.`
                            )
                          }
                        >
                          Book Home Visit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5">
              <h4 className="text-muted">No caregivers found matching "{searchTerm}"</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Caregivers;