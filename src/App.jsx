import React, { useEffect } from "react";

// Context
import WindowSizeProvider from "./context/WindowSizeContext";

// Components
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Pages from "./Pages/Pages";
import Footer from "./components/Footer/Footer";

// Styles
import "./scss/main.scss";
import MobileNavMenu from "./components/MobileNavMenu/MobileNavMenu";

export default function App() {
  useEffect(() => {
    console.log(
      `%c ________________________________________
< hello developer! I'm glad you're here. >
< You know, we can learn a lot about     >
< someone from the code they write. Are  >
< they messy or organized? Clever or     >
< structured? Who takes the time to make >
< little messages like these? The devil  >
< is in the details, and a good dev-il   >
< knows that. So if you're reading this, >
< don't go alone. Take this:     🗡️      >
  ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
      "font-family:monospace",
    );
  }, []);

  return (
    <WindowSizeProvider>
      <div className="App">
        <Router>
          <Navbar />
          <MobileNavMenu />
          <Pages />
          <Footer />
        </Router>
      </div>
    </WindowSizeProvider>
  );
}
