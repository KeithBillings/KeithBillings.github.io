import React from "react";

// Components
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Pages from "./Pages/Pages";

// Styles
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
