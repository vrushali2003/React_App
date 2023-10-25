import React from 'react'
import mylearningbanner from "../Assest/mylearningbanner.png";
const MyLearningBanner = () => {
    const headingStyle = {
        position: 'absolute',
        top: '50%', // You can adjust the positioning as needed
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white', // You can choose the text color
        
        fontWeight: 'bold', // Add this line to make the text bold
        zIndex: 2, // Make sure the heading is on top
      };
  return (
    <div className='container-fluid' style={{ position: 'relative' }}>
    <img src={mylearningbanner} className='w-100' alt="mylearningbanner" />
    <h2 style={headingStyle}>MY LEARNING</h2>
  </div>
  )
}

export default MyLearningBanner
