import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../../views/Home";
import Solutions from "../../views/Soluciones";
import Contact from "../../views/Contact";
import Friosur from '../../views/Friosur';
const Router = () => {
  


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/friosur" element={<Friosur />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
