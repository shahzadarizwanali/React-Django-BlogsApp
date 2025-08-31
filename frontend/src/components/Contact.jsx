import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Contact page component
export default function Contact() {
  return (
    <>
      <Navbar /> {/* Navbar */}
      <div className="container my-5">
        <h2 className="text-center mb-5 fw-bold">Contact Us</h2>
        <div className="row g-4 justify-content-center align-items-stretch">
          {/* Contact Form Card */}
          <div className="col-lg-6 d-flex">
            <div
              className="card shadow-lg border-0 rounded-4 p-4 w-100 h-100"
              style={{ background: "#ffffffcc", backdropFilter: "blur(10px)" }}
            >
              <h4 className="mb-4 text-dark">Send us a Message</h4>
              <form className="flex-grow-1 d-flex flex-column">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Name</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control rounded-3"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Contact</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Enter your number"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Website</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Enter your website"
                  />
                </div>
                <div className="mt-auto">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-3 py-2 fw-semibold"
                  >
                    <i className="fas fa-paper-plane me-2"></i> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="col-lg-5 d-flex">
            <div
              className="card shadow-lg border-0 rounded-4 p-4 w-100 h-100 text-white"
              style={{ background: "#0F375B" }}
            >
              <h4 className="mb-4">Contact Information</h4>
              <p className="mb-3">
                <i className="fas fa-map-marker-alt me-2 text-danger"></i>
                <strong>Address:</strong> 123 Main Street, Lahore, Pakistan
              </p>
              <p className="mb-3">
                <i className="fas fa-envelope me-2 text-warning"></i>
                <strong>Email:</strong> yourmail@gmail.com
              </p>
              <p className="mb-3">
                <i className="fas fa-phone me-2 text-success"></i>
                <strong>Phone:</strong> +92 300 1234567
              </p>
              <p className="mb-3">
                <i className="fas fa-globe me-2 text-info"></i>
                <strong>Website:</strong> www.yourwebsite.com
              </p>

              <h5 className="mt-4 mb-3">Follow Me</h5>
              <p className="mb-2">
                <i className="fab fa-github me-2"></i>
                <strong>GitHub:</strong> github.com/yourprofile
              </p>
              <p className="mb-2">
                <i className="fab fa-linkedin text-primary me-2"></i>
                <strong>LinkedIn:</strong> linkedin.com/in/yourprofile
              </p>
              <p className="mb-2">
                <i className="fab fa-twitter text-info me-2"></i>
                <strong>Twitter:</strong> twitter.com/yourprofile
              </p>
              <p className="mb-2">
                <i className="fab fa-instagram text-danger me-2"></i>
                <strong>Instagram:</strong> instagram.com/yourprofile
              </p>
              <p className="mb-2">
                <i className="fab fa-tiktok me-2"></i>
                <strong>TikTok:</strong> tiktok.com/@yourprofile
              </p>
              <p className="mb-2">
                <i className="fab fa-facebook text-primary me-2"></i>
                <strong>Facebook:</strong> fb.com/yourprofile
              </p>
              <p className="mb-2">
                <i className="fab fa-whatsapp text-success me-2"></i>
                <strong>WhatsApp:</strong> +92 300 1234567
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer /> {/* Footer */}
    </>
  );
}
