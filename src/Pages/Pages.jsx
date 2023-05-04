import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./Home";
import ContactMe from "./ContactMe";
import PrivacyPolicy from "./PrivacyPolicy";

export default function Pages() {
  return (
    <Routes>
      <Route exact path="/about" element={<Home scrollTo={"about"} />} />
      <Route exact path="/contact" element={<ContactMe />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
