import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import HeroSection from "./Component/HeroSection";
import DestinationSection from "./Component/DestinationSection";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Error from "./Component/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/DestinationSection" element={<DestinationSection />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;