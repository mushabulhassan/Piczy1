import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css"; // keep if you have additional CSS

function Footer() {
  return (
    <footer className="footer" style={{ background: "#222", color: "#fff", padding: "1rem", textAlign: "center" }}>
      <nav style={{ marginBottom: "0.5rem" }}>
        <Link to="/" style={{ color: "#fff", margin: "0 5px" }}>Home</Link>
        <Link to="/shop" style={{ color: "#fff", margin: "0 5px" }}>Shop</Link>
        <Link to="/discover" style={{ color: "#fff", margin: "0 5px" }}>Discover</Link>
        <Link to="/magazine" style={{ color: "#fff", margin: "0 5px" }}>Magazine</Link>
        <Link to="/historic" style={{ color: "#fff", margin: "0 5px" }}>Historic</Link>
        <Link to="/dashboard" style={{ color: "#fff", margin: "0 5px" }}>Dashboard</Link>
        <Link to="/faq" style={{ color: "#fff", margin: "0 5px" }}>FAQ</Link>
        <Link to="/about" style={{ color: "#fff", margin: "0 5px" }}>About</Link>
      </nav>
      <div style={{ marginBottom: "0.5rem" }}>
        &copy; {new Date().getFullYear()} MODENZO. All rights reserved.
      </div>
      <div>
        <Link to="/privacy-policy" style={{ color: "#e94560" }}>
          Privacy & Cookie Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
