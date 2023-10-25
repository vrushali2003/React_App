import React, { useState } from "react";
import "../css/Applicationform.scss";
import mailteach from "../Assest/mailteach.png";
import nameteach from "../Assest/nameteach.png";
import phone from "../Assest/phone.png";
import addressteach from "../Assest/addressteach.png";
import PopupPage from "./PopupPage";
import uploadproff from "../Assest/uploadproff.png";
import uploadcontent from "../Assest/uploadcontent.png";
import experience from "../Assest/experience.png";
import skills from "../Assest/skills.png";



function Applicationform() {

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("EXIT"); // Initialize the button label
  const [inputPlaceholder, setInputPlaceholder] = useState("FULL NAME"); // Initialize the input placeholder

  const showPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleYes = () => {
    // Handle "Yes" button action here
    // You can put your logic here
    closePopup();
  };

  const handleNo = () => {
    // Handle "No" button action here
    // You can put your logic here
    closePopup();
  };
  

  const handleNext = (e) => {
    e.preventDefault();
    if (buttonLabel === "EXIT") {
      setButtonLabel("BACK");
      setInputPlaceholder("EXPERIENCE"); // Change the input placeholder to "EXPERIENCE"
    } else {
      setButtonLabel("EXIT");
      setInputPlaceholder("FULL NAME"); // Change the input placeholder back to "FULL NAME"
    }
    
  };
  

  return (
    <div className="container-fluid  dv-Application-form">
      <div className="d-flex">
        <div className="card ">
          <div className="card-body">
            <div className="heading-apply-for-teach mt-5">
              <h1><b>APPLY FOR TEACHING</b></h1>
            </div>
            <div className="par-apply-for-teach ">
              <p>BE THE PART OF OUR GROUP</p>
            </div>
            
            <form className="form-container">
              
              
            <div className="input-container">
              
                <img  src={nameteach} alt="namelogo" width={30} height={30} className="icon"/>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  name="skills"
                  placeholder={inputPlaceholder}
                />
              </div>
              
              
              
              <div className="input-container">
              <img className='icon' src={mailteach} alt="maillogo" width={30} height={30} />
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="skills" 
                  placeholder={buttonLabel === "EXIT" ? "E-MAIL" : "SKILLS"} 
                />
              </div>
              <div className="input-container">
              <img className='icon' src={phone} alt="teachlogo" width={30} height={30} />
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="skills" 
                  placeholder={buttonLabel === "EXIT" ? "PHONE" : "UPLOAD CONTENT"} 
                />
              </div>

              <div className="input-container">
              <img className='icon' src={addressteach} alt="addresslogo" width={30} height={30} />
                <input
                  type="address"
                  className="form-control"
                  id="address"
                  name="skills" 
                  placeholder={buttonLabel === "EXIT" ? "ADDRESS" : "UPLOAD ID PROOF"}
                />
              </div>
              <div class="center-button ">
              <button
               onClick={handleNext} // Call the handleNext function when the button is clicked
          className="my-button-next mt-2  mb-4"
        >
          NEXT
        </button>
              </div>
            </form>
            
          </div>
        </div>

        <div className="card  card-apply-for-teach2 bg-primary text-white">
          <div className="card-body">
            <div className="heading-hey-trainer mt-5">
              <h1>Hey Trainer!</h1>
            </div>
            <div className="para-trainee mt-5">
              <p>
                Please complete the teacher <br></br>
                application form to provide us <br></br>
                with your essential information.
              </p>
            </div>
            <div class="center-button mt-5 mb-5 ">
           
            <div className="center-button mb-5">
        <button onClick={showPopup} className="my-button mt-2 mb-4">
        {buttonLabel === "EXIT" ? "EXIT" : "BACK"} {/* Display the appropriate label */}
          
        </button>
      </div>

      {isPopupVisible && (
        <PopupPage onYes={handleYes} onNo={handleNo} />
      )}

      
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Applicationform;
