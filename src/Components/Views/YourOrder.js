import React, { Component } from 'react';
import '../css/YourOrder.scss';
import image from '../Assest/SqlCourse.png';
import Form from 'react-bootstrap/Form';

class YourOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: 'Learn SQL Essentials',
      price: 399,
      quantity: 2,
      total: 798,
      paymentMethod: 'Direct Bank Transfer', // Default selected payment method
    };
  }

  handlePaymentMethodChange = (event) => {
    this.setState({ paymentMethod: event.target.value });
  };

  render() {
    return (
      <div className='container mt-5 mb-5 dv-your-order'>
        <div>
          <h2>
            <b>OUR ORDER</b>
          </h2>
        </div>
        <div className='card'>
          <div className='row p-3'>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 my-col'>
              <div>
                <h5 className='h5'>Image</h5>
              </div>
            </div>

            <div className='col-3 col-sm-3 col-md-3 col-lg-3 my-col'>
              <div>
                <h5 className='h5'>Course Name</h5>
              </div>
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 my-col'>
              <div>
                <h5 className='h5'>Price</h5>
              </div>
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 my-col'>
              <div>
                <h5 className='h5'>Quantity</h5>
              </div>
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 my-col'>
              <div>
                <h5 className='h5'>Total</h5>
              </div>
            </div>
          </div>

          <div className='row'>
          <div className='col-3 col-sm-3 col-md-3 col-lg-3 my-col'>
              <div>
                <img className='w-100' src={image} alt="SqlCourse"  />
              </div>
            </div>
             <div className='col-3 col-sm-3 col-md-3 col-lg-3 my-col'>
              <div className='para'>
                <p>{this.state.courseName}</p>
              </div>
            </div>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 my-col'>
              <div className='para'>
                <p>Rs. {this.state.price}</p>
              </div>
            </div>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 my-col'>
              <div className='para'>
                <p>{this.state.quantity}</p>
              </div>
            </div>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 my-col'>
              <div className='para'>
                <p className='color'>Rs. {this.state.total}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
        <Form className='mt-5 your-form'>
  <Form.Check
    type="radio"
    label="Direct Bank Transfer"
    id="radio1"
    name="optradio"
    value="Direct Bank Transfer"
    checked={this.state.paymentMethod === 'Direct Bank Transfer'}
    onChange={this.handlePaymentMethodChange}
    className='radio-input'
    labelClassName='radio-label' // Add a class for the radio label
  />
  <Form.Check
    type="radio"
    label="Credit Card"
    id="radio2"
    name="optradio"
    value="Credit Card"
    checked={this.state.paymentMethod === 'Credit Card'}
    onChange={this.handlePaymentMethodChange}
    className='radio-input'
    labelClassName='radio-label' // Add a class for the radio label
  />
  <Form.Check
    type="radio"
    label="Pay Pal"
    id="radio3"
    name="optradio"
    value="Pay Pal"
    checked={this.state.paymentMethod === 'Pay Pal'}
    onChange={this.handlePaymentMethodChange}
    className='radio-input'
    labelClassName='radio-label' // Add a class for the radio label
  />
</Form>

        </div>
      </div>
    );
  }
}

export default YourOrder;
