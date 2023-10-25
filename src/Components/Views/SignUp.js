
import React, { useState } from "react";
import "../css/SignUp.scss";
import facebook from "../Assest/facebook.png"
 import twitter from "../Assest/twitter.png"
import google from "../Assest/google.png"

function SignUp() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`container my-container ${isSignUp ? "right-panel-active" : ""}`}>
       <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
      <div className="form-container sign-up-container">
        {/* Sign Up Form Content */}
       
        <form  className="action-form-panel" action="#">
          <h1 className="heading-panel">Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
            <img className="img-logo1"  width={35} src={facebook} alt="facebook " />
            </a>
            <a href="#" className="social">
            <img className="img-logo1" width={30} src={google} alt="google" />
            </a>
            <a href="#" className="social">
            <img className="img-logo1"  width={35} src={twitter} alt="twitter" />
            </a>
          </div>
          <span className="span-panel">or use your email for registration</span>
          <input className="input-style-form"  type="text" placeholder="Name" />
          <input className="input-style-form" type="email" placeholder="E-mail" />
          <input  className="input-style-form" type="password" placeholder="Password" />
          <button  className="style-button-panel">Sign Up</button>
        </form>
        </div>
        </div>
      
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
      <div className="form-container-1 sign-in-container-1">
        {/* Sign In Form Content */}
        <form className="action-form-panel" action="#">
        <h1 className="heading-panel-sign-in">Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
            <img className="img-logo1"  width={35} src={facebook} alt="facebook " />
            </a>
            <a href="#" className="social">
            <img className="img-logo1" width={30} src={google} alt="google" />
            </a>
            <a href="#" className="social">
            <img className="img-logo1"  width={35} src={twitter} alt="twitter" />
            </a>
          </div>
          <span className="span-panel">or use your account</span>
          <input  className="input-style-form" type="email" placeholder="E-mail" />
          <input  className="input-style-form" type="password" placeholder="Password" />
          <a className="link-style" href="#">Forgot your password?</a>
          <button className="style-button-panel">Sign In</button>
        </form>
      </div>
      </div>
     </div>

      <div className="overlay-container">
        <div className={`overlay ${isSignUp ? "right-panel-active" : ""}`}>
          {/* Sign In Overlay Content */}
          <div className="overlay-panel overlay-left">
            <h1 className="heading-panel-1">Welcome Back!</h1>
            <p className="para-panel-1">To keep connected with us, please log in with your personal info</p>
            <button className="ghost  style-button-panel" id="signIn" onClick={toggleForm}>
              Sign In
            </button>
          </div>

          {/* Sign Up Overlay Content */}
          <div className="overlay-panel overlay-right">
            <h1 className="heading-panel-1">Hello, Friend!</h1>
            <p className="para-panel-1">Enter your personal details and start your journey with us</p>
            <button className="ghost  style-button-panel" id="signUp" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
