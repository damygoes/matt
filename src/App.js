import React from "react";
// import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
// import Layout from "./components/common/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurMisson from "./components/OurMisson";
import OurServices from "./components/OurServices";
import OurClients from "./components/common/OurClients";
import CTA from "./components/common/CTA";
import OurContact from "./components/common/OurContact";
// import Layout from "./components/common/Layout";
// import HomePage from "./pages/HomePage";
// import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurMisson />
      <OurServices />
      <OurClients />
      <CTA />
      <OurContact />
      <Footer />
    </>
  );
}

export default App;
