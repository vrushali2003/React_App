import React, { useState } from "react";
import { Link } from "react-router-dom";
import dvlogo from "../Assest/dvlogo.png";
import favourite from "../Assest/favourite.png";
import cartbutton from "../Assest/cartbutton.png";
import "../css/navbar.scss";
import notification from "../Assest/notification.png";
import person_profile from "../Assest/person_profile.png"


function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showAboutTab, setShowAboutTab] = useState(true);
  const [showLoginButton, setShowLoginButton] = useState(false);
  const [showMyLearningTab, setShowMyLearningTab] = useState(false);
  const [showFavouriteIcon, setShowFavouriteIcon] = useState(true);
  const [showCartIcon, setShowCartIcon] = useState(true);
  const [showNotificationIcon, setShowNotificationIcon] = useState(false);
  const [showPersonProfileIcon, setShowPersonProfileIcon] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(true);
  

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleCoursesClick = () => {
    setShowAboutTab(false);
    setShowLoginButton(false);
    setShowMyLearningTab(true);
    setShowFavouriteIcon(true);
    setShowCartIcon(true);
    setShowNotificationIcon(true);
    setShowPersonProfileIcon(true);
    setShowSearchBar(true);
  };

  const handleHomeClick = () => {
    setShowAboutTab(true);
    setShowMyLearningTab(false);
    setShowLoginButton(true);
    setShowFavouriteIcon(true);
    setShowCartIcon(true);
    setShowNotificationIcon(false);
    setShowPersonProfileIcon(false);
    setShowSearchBar(false);
  };

  const isLogin = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid Nav-container">
        <Link to="/" className="navbar-logo">
          <img src={dvlogo} alt="Logo" width="150" height="50" />
        </Link>

        <button
          className={`navbar-toggler ${isNavCollapsed ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            isNavCollapsed ? "" : "show"
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav justify-content-start">
            <li className="nav-item">
              <Link to="/Home" className="nav-link" onClick={handleHomeClick}>
                HOME
              </Link>
            </li>
            {showAboutTab && (
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  ABOUT
                </Link>
              </li>
            )}
            {showMyLearningTab && (
              <li className="nav-item">
                <Link to="/MyLearning" className="nav-link" onClick={handleHomeClick}>
                  MY LEARNING
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/CoursesPages" className="nav-link" onClick={handleCoursesClick}>
                COURSES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Teach" className="nav-link">
                TEACH WITH US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ContactUsPages" className="nav-link">
                CONTACT US
              </Link>
            </li>
          </ul>
          {showSearchBar && (
          <div className="search-bar-navbar-main">
            <input type="text" placeholder="Search For Courses..." />
          </div>
            )}
          {showFavouriteIcon && (
            <div className="icons">
              <Link to="/LikeMainPage">
                <img className="favourite-icon" src={favourite} alt="favourite" />
              </Link>
            </div>
          )}
          {showCartIcon && (
            <div className="icons">
              <Link to="/CartPopupPage">
                <img className="cart-icon" src={cartbutton} alt="cart"  />
              </Link>
            </div>
          )}
          {showNotificationIcon && (
            <div className="icons">
              <Link to="/NotificationPage">
                <img className="notification-icon" src={notification} alt="notification" />
              </Link>
            </div>
          )}
          {showPersonProfileIcon && (
            <div className="icons">
              <Link to="/ProfilePage">
                <img className="person_profile-icon" src={person_profile} alt="person_profile" />
              </Link>
            </div>
          )}
          {showLoginButton && (
            <div className="btn-login-nav">
              <Link to="/SignUp" className="btn btn-primary">
                LOGIN/SIGNUP
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
