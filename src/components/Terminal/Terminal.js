import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "./Terminal.module.scss";
import TerminalTitleBar from "./TerminalTitleBar";
import terminalLines from "../../refs/terminalLines";
import TerminalIntro from "./TerminalIntro";
import directories from "./logic/directories";

import TerminalShell from "./TerminalShell";

export default function Terminal({
  className,
  handleAnimOver,
  terminalAnimStart,
  terminalAnimOver,
  customLocation,
  containerOnly,
  children,
}) {
  // Use the first directory (home) as the starting page
  const [currentDirectory, setCurrentDirectory] = useState(directories[0]);
  const [bashExperience, setBashExperience] = useState(false);

  const router = useRouter();
  ////////////////////////////////////////////////////////////////////////////
  // Render effects
  ////////////////////////////////////////////////////////////////////////////

  // Change current directory of shell based on url location
  useEffect(() => {
    const urlPath = router.asPath.slice(2);
    const foundPath = findDirectory(urlPath);
    if (foundPath) return setCurrentDirectory(foundPath);
  }, [router]);

  ////////////////////////////////////////////////////////////////////////////
  // Helpers
  ////////////////////////////////////////////////////////////////////////////
  function findDirectory(name) {
    const foundPath = directories.find((directory) =>
      directory.names.find((dirName) => dirName === name)
    );

    if (bashExperience && foundPath) {
      return foundPath.isPath ? foundPath : null;
    }

    return foundPath ? foundPath : null;
  }

  ////////////////////////////////////////////////////////////////////////////
  // Handlers
  ////////////////////////////////////////////////////////////////////////////

  // Handler to change shell directory
  function handlChangeDirectory(directory) {
    setCurrentDirectory(directory);
  }

  // Determines wether to show intro screen or terminal shell
  function terminalContentSelect() {
    if (containerOnly) {
      return children;
    }

    if (terminalAnimStart && !terminalAnimOver) {
      return (
        <TerminalIntro
          terminalAnimOver={terminalAnimOver}
          handleAnimOver={handleAnimOver}
        />
      );
    } else if (terminalAnimOver) {
      return (
        <TerminalShell
          currentDirectory={currentDirectory}
          directories={directories}
          handlChangeDirectory={handlChangeDirectory}
          bashExperience={bashExperience}
          setBashExperience={setBashExperience}
          findDirectory={findDirectory}
        >
          {currentDirectory.component}
        </TerminalShell>
      );
    }
  }

  return (
    <div
      id="terminal"
      className={`${styles.terminal_container}  h-full w-full bg-terminal-black text-terminal-text  drop-shadow-md flex flex-col ${className}`}
    >
      <TerminalTitleBar
        textData={terminalLines}
        handleAnimOver={handleAnimOver}
        currentDirectory={currentDirectory}
        carriageReturn={/* carriageReturn */ 0}
        setLocationText={/* setlocationText */ () => null}
        locationText={/* locationText */ "fuck"}
        handleTypeAnimOver={handleAnimOver}
        directories={directories}
        handlChangeDirectory={handlChangeDirectory}
        customLocation={customLocation}
      />
      {/*  <div
        className={`h-full w-full text-[15px] grow shrink relative`}
        basis-0pT
      > */}
      <div className="flex flex-col grow whitespace-pre-line leading-relaxed overflow-auto relative">
        {terminalContentSelect()}
      </div>

      {/*  </div> */}
    </div>
  );
}
