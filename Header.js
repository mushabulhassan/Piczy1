import React from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        {/* Use your actual logo file in /public/logo.png */}
        <img className="logo" src="/logo.png" alt="MODENZO Logo" />
        <span className="site-name">MODENZO</span>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/discover">Discover</Link>
        <Link to="/magazine">Magazine</Link>
        <Link to="/historic">Historic</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/about">About</Link>
        <LanguageSelector />
      </nav>
    </header>
  );
}

export default Header;