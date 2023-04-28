import { useState, useEffect, createContext } from "react";
import debounce from "../utils/debounce";

export const WindowSize = createContext();

export default function WindowSizeProvider({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const debouncedHandleWindowResize = debounce(handleWindowResize, 100);

  // add window listener
  useEffect(() => {
    window.addEventListener("resize", debouncedHandleWindowResize);
    return () => window.removeEventListener("resize", debouncedHandleWindowResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // set isMobile, isTablet, and isDesktop states
  useEffect(() => {
    setIsMobile(windowWidth <= 425);
    setIsTablet(windowWidth > 425 && windowWidth <= 768);
    setIsDesktop(windowWidth > 768);
  }, [windowWidth]);

  return <WindowSize.Provider value={{ windowWidth, isMobile, isTablet, isDesktop }}>{children}</WindowSize.Provider>;
}
