import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
// import Layout from "./components/common/Layout";
import About from "./pages/About";
// import CTA from "./components/common/CTA";
import Contact from "./pages/Contact";
// import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
