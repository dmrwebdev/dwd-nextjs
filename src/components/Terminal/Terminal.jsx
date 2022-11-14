import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useWindowEffectsContext } from "@context/WindowEffectsContext";
import { useIntersect } from "@hooks";
import { APP_SECTIONS } from "@pages/app_constants";
import { TerminalTitleBar, TerminalIntro, TerminalCommandLine } from "./index";

export default function Terminal({ className, customLocation }) {
  // Hooks
  const router = useRouter();
  const { terminalAnimStart, setTerminalAnimStart, terminalAnimOver, setTerminalAnimOver } = useWindowEffectsContext();
  const [terminalRef, entry] = useIntersect({ threshold: ".15" });
  // States
  const [currentDirectory, setCurrentDirectory] = useState(APP_SECTIONS.get(router.asPath));

  ////////////////////////////////////////////////////////////////////////////
  // Render effects
  ////////////////////////////////////////////////////////////////////////////
  //TODO: Look into animation state naming
  useEffect(() => {
    // Disable animation if path isn't root
    if (router.asPath !== "/") return setTerminalAnimOver(true);
    // Start animation if it hasn't started and view is intersecting
    if (entry.isIntersecting && !terminalAnimOver) return setTerminalAnimStart(true);
  }, [entry, router, terminalAnimOver, setTerminalAnimStart, setTerminalAnimOver]);

  // If valid path change current directory to match
  useEffect(() => {
    const path = APP_SECTIONS.get(router.asPath);
    path ? setCurrentDirectory(path) : null;
  }, [router]);

  function handleChangeDirectory(directory) {
    /*     directory.path
    if () { */
    router.push(directory.path);
    setCurrentDirectory(directory);
    /*  } */
  }

  /*   function terminalContent() {
    // Start terminal intro if path is root, and intro is set to start
    if (router.asPath !== "/" && terminalAnimStart && !terminalAnimOver)
      return <TerminalIntro terminalAnimOver={terminalAnimOver} />;

    return (
      <TerminalCommandLine currentDirectory={currentDirectory} handleChangeDirectory={setCurrentDirectory}>
        {currentDirectory?.component || null}
      </TerminalCommandLine>
    );
  } */

  const content =
    router.asPath === "/" && terminalAnimStart && !terminalAnimOver ? (
      <TerminalIntro />
    ) : (
      <>
        <div className=" *min-h-full *flex *mx-auto">{currentDirectory?.component || null}</div>
        <TerminalCommandLine
          directories={APP_SECTIONS}
          currentDirectory={currentDirectory}
          handleChangeDirectory={handleChangeDirectory}
        />
      </>
    );

  return (
    <div
      id="terminal"
      className={`bg-[#12263A] backdrop-blur-md min-h-screen w-full text-terminal-text  drop-shadow-md flex flex-col ${className} font-["Hack"]`}
      ref={terminalRef}
    >
      <TerminalTitleBar currentDirectory={currentDirectory} customLocation={customLocation} />
      <div className="bg-terminal-black grow whitespace-pre-line leading-relaxed overflow-auto relative">
        <div className="*min-h-full *w-full *flex *flex-col max-w-[1200px] mx-auto p-4">
          {/* Main content */}
          {content}
        </div>
      </div>
    </div>
  );
}
