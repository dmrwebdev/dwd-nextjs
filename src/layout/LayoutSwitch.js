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

export default function LayoutSwitch({ setIntroOver }) {
  const [terminalAnimStart, setTerminalAnimStart] = useState(false);
  const [terminalAnimOver, setTerminalAnimOver] = useState(false);

  const [terminalRef, entry] = useIntersect({ threshold: ".15" });

  function handleAnimOver() {
    setTerminalAnimOver(true);
    /*     props.setIntroOver(true); */
  }

  useEffect(() => {
    if (entry.isIntersecting) setTerminalAnimStart(true);
  }, [entry]);

  const { width } = useWindowDimensions();
  if (width < 800) {
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
          >
            <div className="grow overflow-auto ">
              {/* basis-0  */}
              <AboutMe />
            </div>
          </Terminal>
        </div>
        <Technologies />
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
      {/* <div className="h-full w-full p-10 bg-black"> */}
      <div
        className={`${styles.crt_bezel} h-full flex flex-col justify-center items-center relative z-10`}
      >
        <ParticleBG
          className="h-full w-full absolute"
          canvasClassName="h-full w-full"
          style={{ position: "absolute" }}
        />
        <Terminal
          handleAnimOver={handleAnimOver}
          terminalAnimStart={terminalAnimStart}
          terminalAnimOver={terminalAnimOver}
          className={
            "min-h-[600px] max-w-[1800px] max-h-screen h-[1050px] overflow-auto flex flex-col z-30"
          }
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
