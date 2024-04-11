import React from "react";
import { memo } from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from "../../views/Home";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
};

export default memo(Router);