import React, { useState } from "react";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSignUp = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div
        className="container-fluid text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ backgroundColor: "#000" }}
      >
        <div className="container py-5">
          <div className="row g-5">
            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Quick Links</h4>
              <a className="btn btn-link text-light" href="/">About Us</a>
              <a className="btn btn-link text-light" href="/">Contact Us</a>
              <a className="btn btn-link text-light" href="/">Privacy Policy</a>
              <a className="btn btn-link text-light" href="/">Terms & Conditions</a>
              <a className="btn btn-link text-light" href="/">FAQs & Help</a>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                Somewhere on the Blockchain 🌐
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +091 705 088 9705
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                basantgoswami7050@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="https://www.youtube.com/channel/UCESPlHcn45qCQe9YiH43MRw" target="_blank">
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/basant.bharati.54/" target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-social" href="https://github.com/Basant-goswami" target="_blank">
                  <i className="fab fa-github" />
                </a>
                <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/basant-kumar-bharati" target="_blank">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>

            {/* Gallery */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                {["course-1.jpg", "course-2.jpg", "course-3.jpg", "course-2.jpg", "course-3.jpg", "course-1.jpg"].map((img, i) => (
                  <div className="col-4" key={i}>
                    <img className="img-fluid bg-light p-1" src={`/img/${img}`} alt="" />
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Newsletter</h4>
              <p>
                Join the cult of knowledge 💡. No spam, only “exclusive opportunities” and questionable wisdom.
              </p>
              <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="container border-top border-secondary pt-3">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              © <a className="border-bottom text-light" href="/">ScamLearning™</a> — All Rights Preserved. Designed by <span className="fw-bold">Visionary Dropouts</span>.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="/">Home</a>
                <a href="/">Cookies</a>
                <a href="/">Help</a>
                <a href="/">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.8)", zIndex: 9999 }}
        >
          <div className="bg-dark text-light p-5 rounded shadow-lg text-center" style={{ maxWidth: "500px" }}>
            <h2 className="mb-3">🚨 Warning! 🚨</h2>
            <p className="mb-4">
              Are you sure you want to get scammed? 😏  
              <br />
              Buy My $COURSE — Overnight Success Guaranteed™ (results may vary wildly)
            </p>
            <button className="btn btn-danger me-2" onClick={closePopup}>
              Take Me Back
            </button>
            <button className="btn btn-success" onClick={closePopup}>
              I’m Brave Enough
            </button>
          </div>
        </div>
      )}
    </>
  );
}
