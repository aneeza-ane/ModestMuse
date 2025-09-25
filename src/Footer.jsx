import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
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
              +923360817961
            </p>
            <div>
              <i className="bi bi-facebook me-3"></i>
              <i className="bi bi-twitter me-3"></i>
              <i className="bi bi-instagram me-3"></i>
              <i className="bi bi-linkedin me-3"></i>
              <i className="bi bi-pinterest"></i>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Categories</h5>
            <ul className="list-unstyled">
              <li>Abaya</li>
              <li>Co-ord Sets</li>
              <li>Hijabs</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Information</h5>
            <ul className="list-unstyled">
              <li>Search</li>
              <li>Shipping Policy</li>
              <li>Exchange Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Newsletter Signup</h5>
            <p>Subscribe to our newsletter and get 10% off your first purchase</p>
            <form className="d-flex">
              <input
                type="email"
                placeholder="Your email address"
                className="form-control me-2"
              />
              <button className="btn btn-light fw-bold">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
