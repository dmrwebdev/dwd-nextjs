import { useEffect, useState } from "react";
import Terminal from "../components/Terminal/Terminal";
import TerminalShell from "../components/Terminal/TerminalShell";
import useIntersect from "../hooks/useIntersect";
import useWindowDimensions from "../hooks/useWindowDimensions";
import AboutMe from "../views/AboutMe/AboutMe";
import Technologies from "../views/Technologies/Technologies";
import bliss from "../assets/bliss.webp";
import Image from "next/image";
import styles from "./LayoutSwitch.module.scss";
import ParticleBG from "../components/ParticleBG/ParticleBG";
import { useRouter } from "next/router";
import useMediaQuery from "../hooks/useMediaQuery";
import directories from "../components/Terminal/logic/directories";
import Projects from "../views/Projects/Projects";
import { useAppContext } from "../context/AppContext";

export default function LayoutSwitch({ setIntroOver }) {
  const {
    terminalAnimStart,
    setTerminalAnimStart,
    terminalAnimOver,
    setTerminalAnimOver,
  } = useAppContext();

  const [terminalRef, entry] = useIntersect({ threshold: ".15" });

  function handleAnimOver() {
    setTerminalAnimOver(true);
    /*     props.setIntroOver(true); */
  }

  const router = useRouter();

  useEffect(() => {
    if (entry.isIntersecting && !terminalAnimOver && router.asPath === "/") {
      setTerminalAnimStart(true);
    } else {
      setTerminalAnimOver(true);
    }
  }, [entry, router, terminalAnimOver]);

  const isBreakPoint = useMediaQuery(800);
  /*   const { width } = useWindowDimensions();
  console.log(width); */
  if (isBreakPoint) {
    return (
      <>
        <div
          className={`${
            !terminalAnimOver ? "h-screen" : ""
          } overflow-hidden relative flex flex-col justify-center items-center`}
          ref={terminalRef}
        >
          <Terminal
            handleAnimOver={handleAnimOver}
            terminalAnimStart={terminalAnimStart}
            terminalAnimOver={terminalAnimOver}
            containerOnly
            customLocation={directories.find((directory) =>
              directory.names.find((dirName) => dirName === `~/about`)
            )}
          >
            <div className="grow overflow-auto ">
              <AboutMe />
            </div>
          </Terminal>
          <Projects />
          <Technologies />
        </div>
      </>
    );
  }

  return (
    <div
      className={`${styles.container} h-full w-full relative`} /* overflow-hidden relative  p-10 */
      ref={terminalRef}
    >
      {/*       <Image
        src={bliss}
        alt="Windows XP default desktop wallpaper - Bliss"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      /> */}
      {/* <div className="p-10 bg-black"> */}
      <div
        className={`${styles.crt_bezel} h-full flex flex-col justify-center items-center relative z-10`}
      >
        {/*         <ParticleBG
          className="h-full w-full absolute"
          canvasClassName="h-full w-full"
          style={{ position: "absolute" }}
        /> */}
        <Terminal
          handleAnimOver={handleAnimOver}
          terminalAnimStart={terminalAnimStart}
          terminalAnimOver={terminalAnimOver}
          //</div>className={
          // "h-full w-full overflow-auto flex flex-col z-30" /* min-h-[600px] max-w-[1800px] max-h-screen h-[1050px]  */
          //}
        >
          <div className="grow overflow-auto">
            <TerminalShell />
          </div>
        </Terminal>

        {/* </div> */}
      </div>
    </div>
  );
}
