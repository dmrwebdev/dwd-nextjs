import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function WindowEffectsContext({ children }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [terminalAnimStart, setTerminalAnimStart] = useState(false);
  const [terminalAnimOver, setTerminalAnimOver] = useState(false);
  const [introImgActive, setIntroImgActive] = useState(true);
  const [introImgOver, setIntroImgOver] = useState(false);

  let sharedState = {
    prevScrollPos,
    setPrevScrollPos,
    introImgActive,
    setIntroImgActive,
    terminalAnimOver,
    setTerminalAnimOver,
    terminalAnimStart,
    setTerminalAnimStart,
    introImgOver,
    setIntroImgOver,
  };

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useWindowEffectsContext() {
  return useContext(AppContext);
}
