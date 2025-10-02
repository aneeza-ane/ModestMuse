import React from "react";
import './Login.css';
function Signup(){
    return<>
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="login-card">
        <h2>Register</h2>

        {/* First Name */}
        <div className="row">
          <div className="input-box">
            <span className="icon">👤</span>
            <input type="text" id="firstName" name="firstName" required />
            <label>First Name</label>
          </div>
        </div>

        {/* Last Name */}
        <div className="row">
          <div className="input-box">
            <span className="icon">👤</span>
            <input type="text" id="lastName" name="lastName" required />
            <label>Last Name</label>
          </div>
        </div>

        {/* Address */}
        <div className="row">
          <div className="input-box">
            <span className="icon">🏠</span>
            <input type="text" id="address" name="address" required />
            <label>Address</label>
          </div>
        </div>

        {/* Email */}
        <div className="row">
          <div className="input-box">
            <span className="icon">✉️</span>
            <input type="email" id="email" name="email" required />
            <label>Email</label>
          </div>
        </div>

        {/* Password */}
        <div className="row">
          <div className="input-box">
            <span className="icon">🔒</span>
            <input type="password" id="password" name="password" required />
            <label>Password</label>
          </div>
        </div>

        {/* Submit Button */}
        <button className="btn">Register</button>
      </div>
    </div>
    </>
}
export default Signup;