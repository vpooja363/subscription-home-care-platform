import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Plans from "./pages/Plans";
import Caregivers from "./pages/Caregivers";
import SOS from "./pages/SOS";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Checkout from "./pages/Checkout"; // <-- 1. यहाँ Checkout import किया

function App() {
  return (
    <BrowserRouter>
      {/* Top Navigation Bar visible across all pages */}
      <Navbar />

      {/* Main Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/caregivers" element={<Caregivers />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/checkout" element={<Checkout />} /> {/* <-- 2. यहाँ Checkout का रूट जोड़ा */}
        <Route path="/sos" element={<SOS />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Footer visible across all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;