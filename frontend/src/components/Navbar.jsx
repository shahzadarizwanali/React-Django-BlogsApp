import React from "react";
import { Link } from "react-router-dom"; // For client-side navigation
import logo from "../assets/Synares-logo.jpg"; // Logo image import

// Navbar component
export default function Navbar() {
  return (
    // Main navigation container
    <nav
      className="navbar navbar-expand-lg" // Bootstrap navbar classes
      style={{ backgroundColor: "#0F375B" }} // Custom background color
    >
      <div className="container-fluid px-3">
        {/* Brand logo and home link */}
        <Link className="navbar-brand text-white mx-5" to="/">
          <img
            src={logo} // Logo image
            alt="Logo" // Alt text for accessibility
            style={{ height: "50px" }} // Set logo height
          />
        </Link>

        {/* Collapsible navbar items */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mx-5">
            {/* Home link */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>

            {/* Contact link */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
