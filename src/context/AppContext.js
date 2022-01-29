import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [terminalAnimStart, setTerminalAnimStart] = useState(false);
  const [terminalAnimOver, setTerminalAnimOver] = useState(false);
  const [introMeImgActive, setIntroMeImgActive] = useState(false);
  const [introMeImgOver, setIntroMeImgOver] = useState(false);

  let sharedState = {
    introMeImgActive,
    setIntroMeImgActive,
    terminalAnimOver,
    setTerminalAnimOver,
    terminalAnimStart,
    setTerminalAnimStart,
    introMeImgOver,
    setIntroMeImgOver,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
