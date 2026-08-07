import React, { useState } from "react";

function SOS() {
  const [alertSent, setAlertSent] = useState(false);

  // Trigger simulated emergency alert
  const handleSOSAlert = () => {
    setAlertSent(true);
  };

  return (
    <div className="sos-page py-5 bg-light min-vh-100 d-flex align-items-center">
      <div className="container" style={{ maxWidth: "700px" }}>
        <div className="card shadow-lg border-0 rounded-4 p-5 text-center bg-white border-top border-danger border-5">
          {/* Emergency Badge */}
          <div className="mb-3">
            <span className="badge bg-danger px-4 py-2 rounded-pill fs-6 fw-bold">
              🚨 24/7 EMERGENCY MEDICAL ALERT
            </span>
          </div>

          <h1 className="fw-bold text-dark mt-2 mb-3">One-Tap SOS Support</h1>
          <p className="text-muted mb-4">
            Pressing the button below instantly notifies our on-call emergency
            doctors, alerts your assigned caregiver, and dispatches the nearest
            priority ambulance to your registered home address.
          </p>

          {!alertSent ? (
            <div className="py-4">
              <button
                className="btn btn-danger rounded-circle shadow-lg d-inline-flex flex-column align-items-center justify-content-center"
                style={{ width: "200px", height: "200px" }}
                onClick={handleSOSAlert}
              >
                <span className="fs-1">🚨</span>
                <span className="fs-4 fw-bold mt-1">SEND SOS</span>
              </button>
              <p className="text-muted small mt-4 mb-0">
                Tap button only in case of a medical emergency or fall.
              </p>
            </div>
          ) : (
            <div className="alert alert-danger rounded-4 p-4 text-start mt-3 shadow-sm">
              <h4 className="fw-bold text-danger mb-2">
                ✅ Emergency Alert Dispatched!
              </h4>
              <p className="mb-2">
                <strong>Registered Patient:</strong> Rajeshwar Sharma (Age 72)
              </p>
              <p className="mb-2">
                <strong>Action Taken:</strong>
              </p>
              <ul className="mb-3">
                <li>Alert sent to Assigned Nurse: Sister Ananya Verma</li>
                <li>On-call Emergency Doctor notified via automatic voice call</li>
                <li>Priority Ambulance dispatched to your home location</li>
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <span className="small text-danger fw-bold">
                  ETA: Approx. 10 - 15 Minutes
                </span>
                <button
                  className="btn btn-outline-dark btn-sm rounded-pill px-3"
                  onClick={() => setAlertSent(false)}
                >
                  Reset Alert
                </button>
              </div>
            </div>
          )}

          {/* Emergency Numbers Footer */}
          <hr className="my-4" />
          <div className="row text-center small text-muted">
            <div className="col-4">
              <strong>National Ambulance:</strong> 102 / 108
            </div>
            <div className="col-4">
              <strong>CareHub Helpdesk:</strong> 1800-123-4567
            </div>
            <div className="col-4">
              <strong>Senior Citizen Helpline:</strong> 14567
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SOS;