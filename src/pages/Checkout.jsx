import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Checkout() {
  // Read dynamically selected subscription plan directly from localStorage
  const [activePlan, setActivePlan] = useState(() => {
    const savedName = localStorage.getItem("activePlanName");
    const savedPrice = localStorage.getItem("activePlanPrice");
    const savedTagline = localStorage.getItem("activePlanTagline");
    return {
      name: savedName || "Gold Care Plan",
      price: savedPrice || "₹9,999",
      tagline: savedTagline || "Includes 4 Nurse Visits + Doctor Support",
    };
  });

  // Ensure plan updates whenever checkout page loads
  useEffect(() => {
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
  }, []);

  // State to track selected payment method (upi, card, netbanking)
  const [paymentMethod, setPaymentMethod] = useState("upi");

  // State to manage payment completion status
  const [isPaid, setIsPaid] = useState(false);

  // Form input state for dummy payment details
  const [paymentData, setPaymentData] = useState({
    upiId: "patient@okaxis",
    cardNumber: "4532 •••• •••• 8890",
    cardHolder: "Rajeshwar Sharma",
    expiry: "08/28",
    cvv: "123",
    bank: "HDFC Bank",
  });

  // Handle dummy payment submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsPaid(true);
  };

  return (
    <div className="checkout-page py-5 bg-light min-vh-100">
      <div className="container" style={{ maxWidth: "700px" }}>
        {/* Page Header */}
        <div className="text-center mb-4">
          <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-semibold mb-2">
            🔒 Secure 256-Bit Dummy Checkout
          </span>
          <h1 className="fw-bold">Complete Your Subscription</h1>
          <p className="text-muted small">
            Choose your preferred dummy payment method to activate your CareHub monthly plan.
          </p>
        </div>

        {!isPaid ? (
          <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5 bg-white">
            {/* Dynamic Order Summary Box */}
            <div className="bg-light p-3 rounded-3 mb-4 d-flex justify-content-between align-items-center">
              <div>
                <h6 className="fw-bold mb-1">{activePlan.name} (Monthly)</h6>
                <span className="text-muted small">{activePlan.tagline}</span>
              </div>
              <div className="text-end">
                <span className="fs-5 fw-bold text-primary">{activePlan.price}</span>
                <div className="small text-muted">/ month</div>
              </div>
            </div>

            {/* Payment Method Selector Tabs */}
            <h6 className="fw-bold mb-3">Select Payment Method</h6>
            <div className="row g-2 mb-4">
              <div className="col-4">
                <button
                  type="button"
                  className={`btn w-100 py-2 fw-semibold small ${
                    paymentMethod === "upi" ? "btn-primary" : "btn-outline-secondary"
                  }`}
                  onClick={() => setPaymentMethod("upi")}
                >
                  📱 UPI
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  className={`btn w-100 py-2 fw-semibold small ${
                    paymentMethod === "card" ? "btn-primary" : "btn-outline-secondary"
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  💳 Card
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  className={`btn w-100 py-2 fw-semibold small ${
                    paymentMethod === "netbanking" ? "btn-primary" : "btn-outline-secondary"
                  }`}
                  onClick={() => setPaymentMethod("netbanking")}
                >
                  🏛️ Net Banking
                </button>
              </div>
            </div>

            {/* Payment Forms based on selected tab */}
            <form onSubmit={handlePaymentSubmit}>
              {/* 1. UPI Payment Option */}
              {paymentMethod === "upi" && (
                <div className="mb-4">
                  <label className="form-label small fw-semibold">Enter UPI ID / VPA</label>
                  <input
                    type="text"
                    className="form-control py-2 rounded-3"
                    value={paymentData.upiId}
                    onChange={(e) => setPaymentData({ ...paymentData, upiId: e.target.value })}
                    placeholder="username@okaxis / username@ybl"
                    required
                  />
                  <small className="text-muted d-block mt-1">
                    Demo Mode: You can click Pay directly with any dummy UPI ID.
                  </small>
                </div>
              )}

              {/* 2. Card Payment Option */}
              {paymentMethod === "card" && (
                <div className="mb-4">
                  <div className="mb-3">
                    <label className="form-label small fw-semibold">Card Number</label>
                    <input
                      type="text"
                      className="form-control py-2 rounded-3"
                      value={paymentData.cardNumber}
                      onChange={(e) =>
                        setPaymentData({ ...paymentData, cardNumber: e.target.value })
                      }
                      placeholder="4532 •••• •••• 8890"
                      required
                    />
                  </div>
                  <div className="row g-2">
                    <div className="col-6">
                      <label className="form-label small fw-semibold">Valid Thru</label>
                      <input
                        type="text"
                        className="form-control py-2 rounded-3"
                        value={paymentData.expiry}
                        onChange={(e) =>
                          setPaymentData({ ...paymentData, expiry: e.target.value })
                        }
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-semibold">CVV</label>
                      <input
                        type="password"
                        className="form-control py-2 rounded-3"
                        value={paymentData.cvv}
                        onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                        placeholder="123"
                        maxLength="3"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Net Banking Option */}
              {paymentMethod === "netbanking" && (
                <div className="mb-4">
                  <label className="form-label small fw-semibold">Select Your Bank</label>
                  <select
                    className="form-select py-2 rounded-3"
                    value={paymentData.bank}
                    onChange={(e) => setPaymentData({ ...paymentData, bank: e.target.value })}
                  >
                    <option value="HDFC Bank">HDFC Bank</option>
                    <option value="ICICI Bank">ICICI Bank</option>
                    <option value="State Bank of India">State Bank of India</option>
                    <option value="Axis Bank">Axis Bank</option>
                  </select>
                </div>
              )}

              {/* Pay Now Button */}
              <button
                type="submit"
                className="btn btn-success w-100 rounded-pill py-3 fw-bold shadow-sm"
              >
                Pay {activePlan.price} & Activate Plan
              </button>
            </form>
          </div>
        ) : (
          /* Payment Success View */
          <div className="card shadow-sm border-0 rounded-4 p-5 text-center bg-white">
            <div className="display-1 text-success mb-3">🎉</div>
            <h2 className="fw-bold mb-2">Payment Successful!</h2>
            <p className="text-muted mb-4">
              Your CareHub subscription has been activated successfully. A confirmation receipt
              and assigned nurse details have been sent to your registered email.
            </p>

            <div
              className="bg-light p-3 rounded-3 text-start mx-auto mb-4"
              style={{ maxWidth: "400px" }}
            >
              <p className="small mb-1">
                <strong>Transaction ID:</strong> #CH-PAY-984521
              </p>
              <p className="small mb-1">
                <strong>Amount Paid:</strong> {activePlan.price} (Monthly Auto-Renew)
              </p>
              <p className="small mb-0">
                <strong>Payment Mode:</strong> {paymentMethod.toUpperCase()} (Dummy)
              </p>
            </div>

            <div className="d-flex justify-content-center gap-3">
              <Link to="/dashboard" className="btn btn-primary rounded-pill px-4 fw-semibold">
                Go to Family Dashboard
              </Link>
              <Link to="/booking" className="btn btn-outline-dark rounded-pill px-4 fw-semibold">
                Book First Nurse Visit
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;