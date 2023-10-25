import React, { useState } from "react";
import "../css/CheckInLogin.scss";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleRememberMeChange = (e) => {
  //   setRememberMe(e.target.checked);
  // };

  const LoginForm = () => {
    // Handle the login logic here, e.g., making an API request.
    // You can access the email, password, and rememberMe state variables here.
  };

  return (
    <div className="container dv-login-form mt-5 mb-5">
      
      <div className="card h-100 ">
        <div className="row">
<div className=" col-12 col-sm-12 col-md-12 col-lg-12">
      
        <form>
          <div className="mb-3 form-container">
            <label className="form-label">Username or Email *</label>
            <input
              type="email"
              className="form-control form-input"
              placeholder="Username or Email"
            />
          </div>

          <div className="mb-3 form-container">
            <label className="form-label">Password *</label>
            <input
              type="email"
              className="form-control form-input"
              placeholder="Password"
            />
          </div>

          <div className="mb-3 form-container">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                <p> Remember me</p>
               
              </label>
            </div>
          </div>

          <div className="btn-style">
            <button type="submit" className="btn">
              LOGIN
            </button>
          </div>
          <div>
          <p className="forgot-password form-container text-right">
            <a href="#" className="forget">Lost your password?</a>
          </p>
          </div>
        </form>

        </div>
      
     

      </div>

      </div>
    </div>
  );
}

export default LoginForm;