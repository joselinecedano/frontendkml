import React from "react";
import { Route, Routes } from "react-router-dom";
import Services from "../Pages/Services/Services.js";

const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route path="/services/*" element={<Services />} />
        {/* if you navigate deeper, the parent won't match anymore and therefore the child routes will never render without adding '*' */}
        
      </Routes>
    </main>
  );
};

export default Main;