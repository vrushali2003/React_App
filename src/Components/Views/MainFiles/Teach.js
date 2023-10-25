import React from 'react'
import TeachWithUsBanner from '../TeachWithUsBanner';
import WhatWeDo from "../WhatWeDo";
import Aboutorg from "../Aboutorg";
import OurInstructor from "../OurInstructor";
import ContactUS from "../ContactUs"; 
import MyLearningPage from "../MainFiles/MyLearningPage";
import AddToCart from "../AddToCart";


import YourOrder from '../YourOrder';


import AfterAddingCart from '../MainFiles/AfterAddingCart';
import CheckInLogin from "../CheckInLogin";
import BillingDetail from "../BillingDetail";
const Teach= () => {
  return (
    <div>
      <TeachWithUsBanner/>
      <WhatWeDo/> 
<Aboutorg/>
<OurInstructor/>
<ContactUS />

<CheckInLogin />
      <BillingDetail />
<YourOrder/>

<AfterAddingCart/> 
 
 <MyLearningPage />
      <AddToCart />
    </div>
  )
}

export default Teach;
