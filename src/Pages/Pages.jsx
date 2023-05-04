import React from "react";
import { Routes, Route, useHistory } from "react-router-dom";

// pages
import Home from "./Home";
import ContactMe from "./ContactMe";
import PrivacyPolicy from "./PrivacyPolicy";

export default function Pages() {
  // fetch local storage
  const localData = localStorage.getItem("kb-localData");
  const localDataParsed = JSON.parse(localData);
  const localDataParsedRoute = localDataParsed?.route;

  // useHistory hook
  const history = useHistory();

  // if localDataParsedRoute is not null, redirect to the route
  if (localDataParsedRoute) {
    // redirect to the route
    history.push(localDataParsedRoute);
  }

  return (
    <Routes>
      <Route exact path="/about" element={<Home scrollTo={"about"} />} />
      <Route exact path="/contact" element={<ContactMe />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
