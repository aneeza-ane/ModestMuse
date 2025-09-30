import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Get in touch</h5>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>
              Khalid bin Waleed Road <br /> Karachi, Pakistan
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              stylefits420@gmail.com
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>
              +92 336 0817961
            </p>
            <div className="mt-3">
              <a href="#" className="text-white me-3" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white me-3" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white me-3" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white me-3" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white" aria-label="Pinterest">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="col-6 col-md-3 col-lg-3">
            <h5 className="fw-bold mb-3">Categories</h5>
            <ul className="list-unstyled">
              <li>Abaya</li>
              <li>Co-ord Sets</li>
              <li>Hijabs</li>
              <li>Accessories</li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-6 col-md-3 col-lg-3">
            <h5 className="fw-bold mb-3">Information</h5>
            <ul className="list-unstyled">
              <li>Search</li>
              <li>Shipping Policy</li>
              <li>Exchange Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Newsletter Signup</h5>
            <p>Subscribe to our newsletter and get 10% off your first purchase</p>
            <form className="row g-2">
              <div className="col-12 col-sm">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="form-control"
                />
              </div>
              <div className="col-12 col-sm-4">
                <button type="submit" className="btn btn-light btn-sm-3 fw-bold w-100">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
