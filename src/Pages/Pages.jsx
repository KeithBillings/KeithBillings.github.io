import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import NotFound from "./NotFound";
import Home from "./Home";
import ContactMe from "./ContactMe";

export default function Pages() {
  return (
    <Routes>
      <Route exact path="/about" element={<Home scrollTo={"about"} />} />
      <Route exact path="/contact" element={<ContactMe />} />
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
