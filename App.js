import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Discover from "./components/Discover";
import FAQ from "./components/FAQ";
import Historic from "./components/Historic";
import Magazine from "./components/Magazine";
import Shop from "./components/Shop";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/historic" element={<Historic />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="modenzoCookieConsent"
        style={{ background: "#222", color: "#fff" }}
        buttonStyle={{ color: "#fff", background: "#e94560", fontSize: "16px" }}
        expires={150}
      >
        This website uses cookies to enhance your browsing experience and to analyze site traffic. By clicking "Accept", you consent to our use of third-party cookies (Google Analytics).
      </CookieConsent>

      <Footer />
    </Router>
  );
}

export default App;
