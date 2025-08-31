import React from "react";
import { FaGithub, FaTiktok, FaWhatsapp, FaFacebook } from "react-icons/fa";

// Footer component
export default function Footer() {
  return (
    // Main footer container
    <footer
      className="text-center py-3 mt-5 border-top" // Bootstrap classes for centering, padding, margin-top, and top border
      style={{ backgroundColor: "#0F375B", color: "white" }} // Inline styles for background color and text color
    >
      {/* Social media icons container */}
      <div className="mb-2">
        {/* GitHub icon link */}
        <a
          href="https://github.com/"
          target="_blank" // Open link in new tab
          rel="noreferrer" // Security reasons for external links
          className="mx-2 text-white" // Margin-x and text color
        >
          <FaGithub size={20} /> {/* Icon component with size 20 */}
        </a>

        {/* TikTok icon link */}
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noreferrer"
          className="mx-2 text-white"
        >
          <FaTiktok size={20} />
        </a>

        {/* WhatsApp icon link */}
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          className="mx-2 text-white"
        >
          <FaWhatsapp size={20} />
        </a>

        {/* Facebook icon link */}
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="mx-2 text-white"
        >
          <FaFacebook size={20} />
        </a>
      </div>

      {/* Footer credit text */}
      <small>Made by Shahzada Rizwan Ali</small>
    </footer>
  );
}
