import React from "react";
import { Route, Routes } from "react-router-dom";
import Services from "../Pages/Services/Services.js";
import Products from "../Pages/Products/Products.js";

const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route path="/services/*" element={<Services />} />
        {/* if you navigate deeper, the parent won't match anymore and therefore the child routes will never render without adding '*' */}
        <Route path = '/products/*' element = {<Products />} />

      </Routes>
    </main>
  );
};

export default Main;