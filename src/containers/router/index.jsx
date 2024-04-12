import React from "react";
import { memo } from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from "../../views/Home";
import Solutions from "../../views/Soluciones";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(Router);