import React, { useState } from "react";
import "../css/CartPopupPage.scss";
import crossimg from "../Assest/crossimg.png";
import deleteicon from "../Assest/deleteicon.png";
import img1 from "../Assest/SqlCourse.png";
import img2 from "../Assest/UiuxCourse.png";
import img3 from "../Assest/WebdevCourse.png";

const CartPopupPage = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Learn SQL - SQL Essential Training",
      price: "Rs. 399",
      image: img1, // Use the imported image path
    },
    {
      id: 2,
      name: "Learn UI/UX Design",
      price: "Rs. 399",
      image: img2, // Use the imported image path
    },
    {
      id: 3,
      name: "Web Development Course",
      price: "Rs. 399",
      image: img3, // Use the imported image path
    },
  ]);

  return (
    <div className="contaier-fluid mt-5 mb-5   dv-cart-popup">
      <div className="row">
        <div className="col-sm-8  ">
          <div className="inner-left-blur"></div>
        </div>

        <div className="col-sm-4">
          <div className="cross-image-container">
            {/* <button className="button" > */}
              <img src={crossimg} alt="crossimg" className="img" />
            {/* </button> */}
          </div>

          <div className="cart-header">
            <h2 className="h2">
              <b>CART</b>
            </h2>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="row  cart-item">
              <div className="col-sm-5">
                <div>
                  <img src={item.image} alt={item.name} className="w-100" />
                </div>
              </div>
              <div className="col-sm-7">
                <div>
                  <h5 className="name">{item.name}</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="price">{item.price}</h5>
                  </div>
                  <div>
                    <img
                      src={deleteicon}
                      alt="deleteicon"
                      className="delete-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="subtotal">
            <h3>Subtotal: Rs. 1397</h3>
          </div>

          <div className="checkout">
            <button className="button">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopupPage;
