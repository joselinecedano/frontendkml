import React from "react";
import { Route, Routes } from "react-router-dom";

import Services from "../Pages/Services/Services.js";
import Products from "../Pages/Products/Products.js";
import Training from "../Pages/Training/Training.js";
import Gallery from "../Pages/Gallery/Gallery.js";

import KissMyLashesz from "../Pages/Landing.js";
import AboutUs from "../Pages/AboutUs.js";
import Admin from "../Pages/Admin.js";
import Register from "./Register.js";
import BeforeAndAfter from "../Pages/BeforeAndAfter.js";


const Main = (props) => {
  return (
    <main>
      <Routes>
        
        <Route path="/services/*" element={<Services />} />
        {/* if you navigate deeper, the parent won't match anymore and therefore the child routes will never render without adding '*' */}

        <Route path = '/products/*' element = {<Products />} />

        <Route path="/training/*" element= {<Training/>} />

        <Route path="/gallery/*" element = {<Gallery/>} />

        <Route path = '/' element = {<KissMyLashesz/>} />

        <Route path="/about" element={<AboutUs/>}/>

        <Route path="/admin/*" element={<Admin />} />

        <Route path="/register" element={<Register/>}/>

        <Route path="/guidelines" element={<BeforeAndAfter/>}/>

      </Routes>
    </main>
  );
};

export default Main;