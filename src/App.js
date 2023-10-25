import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/inc/Navbar";
import Home from "./Components/Views/Home";
import Footer from "./Components/inc/Footer";
import About from "./Components/Views/About";
import Courses from "./Components/Views/Courses";
import Instructor from "./Components/Views/Instructor";
import ContactUs from "./Components/Views/ContactUs";
import SignUp from "./Components/Views/SignUp";
import CoursesPages from "./Components/Views/MainFiles/CoursesPages";
import LikeMainPage from "./Components/Views/MainFiles/LikeMainPage";
import Teach from "./Components/Views/MainFiles/Teach";
 import CourseDetailPage from "./Components/Views/MainFiles/CourseDetailPage";
import CartPopupPage from "./Components/Views/CartPopupPage";
import ContactUsPages from "./Components/Views/MainFiles/ContactUsPages";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element={<Home/>}/>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Courses" element={<Courses />} />
          <Route path="Instructor" element={<Instructor />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="CoursesPages" element={<CoursesPages />} />
          <Route path="LikeMainPage" element={<LikeMainPage />} />
          <Route path="Teach" element={<Teach />} />
          <Route path="CourseDetailPage" element={<CourseDetailPage/>}/>
          <Route path="CartPopupPage" element={<CartPopupPage/>}/>
          <Route path="ContactUsPages" element={<ContactUsPages/>}/>

          </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
