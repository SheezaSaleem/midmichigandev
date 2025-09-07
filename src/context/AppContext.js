import React from "react";
import { useMediaQuery } from "react-responsive";

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <AppContext.Provider
      value={{ isDesktopOrLaptop }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext;