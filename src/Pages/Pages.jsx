import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// pages
import Home from "./Home";
import ContactMe from "./ContactMe";
import AboutMePage from "./AboutMePage";
import PrivacyPolicy from "./PrivacyPolicy";

export default function Pages() {
  // fetch local storage
  const localData = localStorage.getItem("kb-localData");
  const localDataParsed = JSON.parse(localData);
  const localDataParsedRoute = localDataParsed?.route;

  // useNavigate hook
  const navigate = useNavigate();

  useEffect(() => {
    // if localDataParsedRoute is not null, redirect to the route
    if (localDataParsedRoute) {
      // clear local storage
      localStorage.removeItem("kb-localData");

      // redirect to the route
      navigate(localDataParsedRoute);
    }
  }, [localDataParsedRoute, navigate]);

  return (
    <Routes>
      <Route exact path="/about" element={<AboutMePage />} />
      <Route exact path="/contact" element={<ContactMe />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
