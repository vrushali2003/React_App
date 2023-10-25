import React from "react";
import "../css/BillingDetail.scss";

const BillingDetail = () => {
  return (
    <div className="container mt-5 mb-8 dv-billing">
      <h1 className="billing-header">Billing Details</h1>
<div className="card">
      <div className="row">
        <div className="col-sm-12 ">
          <div className="dropdown">
            <div className="accordion" id="accordionExample1">
              <div className="accordion-item">
                <select class="form-select" aria-label="Default select example">
                  <option selected>India</option>
                  <option value="1">China</option>
                  <option value="2">Us</option>
                  <option value="3">Russia</option>
                  <option value="3">Germany</option>
                </select>
              </div>
            </div>
          </div>
          <form>
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  id="FirstName"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  id="LastName"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  id="Your_Company_Name"
                  className="form-control"
                  placeholder="Your Company Name"
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  id="Street Address"
                  className="form-control"
                  placeholder="Street Address"
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  id="Apartment, Suite, Unit, etc"
                  className="form-control"
                  placeholder="Apartment, Suite, Unit, etc"
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  id="Town, City"
                  className="form-control"
                  placeholder="Town, City"
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  id="Country"
                  className="form-control"
                  placeholder="Country"
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  id="Postcode"
                  className="form-control"
                  placeholder="Postcode"
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  id="Email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  id="Phone Number"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>

              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="createAccount"
                />

                <label class="custom-control-label" for="createAccount">
                  Create An Account
                </label>
              </div>
            </div>
          </form>
        </div>

        </div>
      </div>
    </div>
  );
};

export default BillingDetail;
