import React from "react";
import './Login.css';
function Login()
{
return<>
<div className="position-absolute top-50 start-50 translate-middle">
    <div className="login-card">
<div className="row">
    <h2>Login</h2>
</div>
<div className="row">
 <div className="input-box">
 <span className="icon">
<ion-icon name="paw-outline"></ion-icon>
 </span>
 <input type="text" id="Email" name="Email" required />
 <label>Email</label>
    </div>
</div>
<div className="row">
<div className="input-box">
<span className="icon">
<ion-icon name="paw-outline"></ion-icon>
 </span>
  <input type="Password" id="password" name="password" required />
  <label>password</label>
     </div>
</div>
<div className="actions">
            <button type="submit" className="btn">LOGIN</button>
            <a href="/" className="forgot">Forgot Password?</a>
    </div>
<div className="register-link">
          <a href="/">REGISTER</a>
    </div>
</div>
</div>
</>
}
export default Login;