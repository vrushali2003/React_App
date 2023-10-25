import React from 'react'
import "../css/Footer.scss";
const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
        <div className="Copyright-footer">
            <p>Copyright © 2023 Dataventics All Rights Reserved.</p>
          </div>
        </div>

        <div className="col-3 col-sm-3 col-md-3 col-lg-3 d-flex justify-content-right ">
        <a href="/privacy-policy" className="Privacypolicy">
              Privacy Policy
            </a>
        </div>


        <div className="col-3 col-sm-3 col-md-3 col-lg-3 d-flex justify-content-center">
        <a href="/terms-and-conditions" className="Term-con">
              Terms and Conditions
            </a>
        </div>







      </div>
      
    </div>
  )
}

export default Footer