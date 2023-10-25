import React from 'react';
import wishlistbanner from "../Assest/wishlistbanner.png";

const WishlistBanner = () => {
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
      <img src={wishlistbanner} className='w-100' alt="wishlistbanner" />
      <h2 style={headingStyle}>WISHLIST</h2>
    </div>
  );
};

export default WishlistBanner;
