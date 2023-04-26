import { useState, useEffect, createContext } from "react";

export const WindowSize = createContext();

export default function WindowSizeProvider({ children }) {
  const [windowScrolLDistance, setWindowScrollDistance] = useState(document?.documentElement?.scrollTop);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleWindowScroll = () => {
    setWindowScrollDistance(document.documentElement.scrollTop);
  };

  // add scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  // add window listener
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // set isMobile, isTablet, and isDesktop states
  useEffect(() => {
    if (windowWidth <= 425) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    if (windowWidth > 425 && windowWidth <= 768) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
    if (windowWidth > 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [windowWidth]);

  return <WindowSize.Provider value={{ windowWidth, isMobile, isTablet, isDesktop, windowScrolLDistance }}>{children}</WindowSize.Provider>;
}
