import React, { useState } from "react";
import "../css/Wishlist.scss";
import RemoveButton from "../Assest/RemoveButton.png";
import SqlCourse from "../Assest/SqlCourse.png";
import WebdevCourse from "../Assest/WebdevCourse.png";
import WishlistShop from "../Assest/WishlistShop.png";
import UiuxCourse from "../Assest/UiuxCourse.png";

const Wishlist = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    // Toggle the button text when clicked
    setButtonClicked(!buttonClicked);
  };
  return (
    <div className="container mt-5 mb-5 dv-wishlist">
      <div className="h1">
        <h1>WISHLIST</h1>
      </div>
      <div className="row ">
        <div className="col-sm-12  ">
          <div className="row row-border">
            <div className="col-sm-1 col-border"></div>
            <div className="col-sm-3 col-border"></div>
            <div className="col-sm-4 col-border">
              <h3 className="heading">Course Name</h3>
            </div>
            <div className="col-sm-2 col-border">
              <h3 className="heading">Unit Price</h3>
            </div>
            <div className="col-sm-2 col-border"></div>
          </div>

          <div className="row row-border">
            <div className="col-sm-1 col-border">
              <img
                className="close-button"
                src={RemoveButton}
                alt={RemoveButton}
                width={55}
              />
            </div>
            <div className="col-sm-3 col-border">
              <img className="image" src={SqlCourse} alt={SqlCourse} />
            </div>
            <div className="col-sm-4 col-border">
              <h4 className="h4">Learn SQL - SQL Essential Training</h4>
            </div>
            <div className="col-sm-2 col-border">
              <h4>Rs 399.00</h4>
            </div>



            <div className="col-sm-2 col-border">
              <div className="btn-style">
                <button className="btn" onClick={handleButtonClick}>
                  <img
                    className="wishlistshop"
                    src={WishlistShop}
                    alt={WishlistShop}
                  />
                  {buttonClicked ? "GO TO CART" : "ADD TO CART"}
                </button>
              </div>
            </div>


          </div>

          <div className="row row-border">
            <div className="col-sm-1 col-border">
              <img
                className="close-button"
                src={RemoveButton}
                alt={RemoveButton}
                width={55}
              />
            </div>
            <div className="col-sm-3 col-border">
              <img className="image" src={WebdevCourse} alt={WebdevCourse} />
            </div>
            <div className="col-sm-4 col-border">
              <h4 className="h4">Learn SQL - SQL Essential Training</h4>
            </div>
            <div className="col-sm-2 col-border">
              <h4>Rs 399.00</h4>
            </div>

            <div className="col-sm-2 col-border">
              <div className="btn-style">
                <button className="btn" onClick={handleButtonClick}>
                  <img
                    className="wishlistshop"
                    src={WishlistShop}
                    alt={WishlistShop}
                  />
                  {buttonClicked ? "GO TO CART" : "ADD TO CART"}
                </button>
              </div>
            </div>

          </div>

          <div className="row row-border">
            <div className="col-sm-1 col-border">
              <img
                className="close-button"
                src={RemoveButton}
                alt={RemoveButton}
                width={55}
              />
            </div>
            <div className="col-sm-3 col-border">
              <img className="image" src={UiuxCourse} alt={UiuxCourse} />
            </div>
            <div className="col-sm-4 col-border">
              <h4 className="h4">Learn SQL - SQL Essential Training</h4>
            </div>
            <div className="col-sm-2 col-border">
              <h4>Rs 399.00</h4>
            </div>

            <div className="col-sm-2 col-border">
              <div className="btn-style">
                <button className="btn" onClick={handleButtonClick}>
                  <img
                    className="wishlistshop"
                    src={WishlistShop}
                    alt={WishlistShop}
                  />
                  {buttonClicked ? "GO TO CART" : "ADD TO CART"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
