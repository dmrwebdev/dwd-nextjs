import { useState, useEffect, useRef } from "react";

import styles from "./Terminal.module.scss";
import TerminalTitleBar from "./TerminalTitleBar";
import Typewriter from "./Typewriter/Typewriter";
import terminalLines from "../../refs/terminalLines";
import TerminalIntro from "./TerminalIntro";
import Projects from "../../views/Projects/Projects";
import AboutMe from "../../views/AboutMe/AboutMe";
import Technologies from "../../views/Technologies/Technologies";

export default function Terminal({
  className,
  handleAnimOver,
  terminalAnimStart,
  terminalAnimOver,
  children,
}) {
  const [shellLocation, setShellLocation] = useState("~");

  const terminalLocations = [
    {
      location: "~",
      component: <div>home</div>,
    },
    {
      location: "~/about",
      component: <AboutMe />,
    },
    {
      location: "~/projects",
      component: <Projects />,
    },
    {
      location: "~/tech",
      component: <Technologies />,
    },
  ];

  function handleChangeLocation(location) {
    setShellLocation(location);
  }

  const validLocations = ["about", "projects", "tech", "certs"];

  function terminalContentSelect() {
    if (terminalAnimStart && !terminalAnimOver) {
      return (
        <TerminalIntro
          terminalAnimOver={terminalAnimOver}
          handleAnimOver={handleAnimOver}
        />
      );
    } else if (terminalAnimStart && terminalAnimOver) {
      return terminalLocations.find(
        (location) => location.location === shellLocation
      ).component;
    }
    console.log("I shouldn't fire");
  }

  return (
    <div
      className={`${styles.terminal_container} relative w-full bg-terminal-black text-terminal-text  drop-shadow-md ${className}`}
    >
      <TerminalTitleBar
        textData={terminalLines}
        carriageReturn={/* carriageReturn */ 0}
        setLocationText={/* setlocationText */ () => null}
        locationText={/* locationText */ "fuck"}
        handleTypeAnimOver={handleAnimOver}
        terminalLocations={terminalLocations}
        handleChangeLocation={handleChangeLocation}
      />
      {/*  <div
        className={`h-full w-full text-[15px] grow shrink relative`}
        basis-0
      > */}
      {terminalContentSelect()}
      {/*  </div> */}
    </div>
  );
}

// Random number helper
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
