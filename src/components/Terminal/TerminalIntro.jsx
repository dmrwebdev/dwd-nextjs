import { useState, useEffect, useRef, useCallback } from "react";
import { useWindowEffectsContext } from "@context/WindowEffectsContext";
import Typewriter from "../Typewriter";
import { TERMINAL_INTRO_LINES2 } from "./Terminal.constants";
import styles from "./Terminal.module.scss";
import { TerminalLocationLine } from ".";
import { randomNumber } from "./Terminal.helpers";

export default function TerminalIntro() {
  const [carriageReturn, setCarriageReturn] = useState([]);

  /*   const [locationText, setlocationText] = useState(""); */
  // Lines individually added to terminal
  const [savedLines, setSavedLines] = useState([]);
  const [lineActive, setLineActive] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const { setTerminalAnimOver } = useWindowEffectsContext();

  const lastLineRef = useRef(null);

  // Random number helper

  // Keep container scrolled to bottom
  useEffect(() => {
    if (lastLineRef.current) return lastLineRef.current.scrollIntoView();
  }, [savedLines, lastLineRef]);

  useEffect(() => {
    if (savedLines.length === TERMINAL_INTRO_LINES2.length) return;
    const line = TERMINAL_INTRO_LINES2[activeLineIndex];

    function terminalLine(line) {
      return (
        <div className="" ref={lastLineRef}>
          {line.locationLine !== false && <TerminalLocationLine directory={"~"} customLocation={"derek@desktop"} />}
          {line.typeWrite === false ? (
            <div className="whitespace-pre">{line.text}</div>
          ) : (
            <Typewriter
              data={line.text}
              speed={randomNumber(15, 30)}
              active={setLineActive}
              startDelay={500}
              finishDelay={600}
            />
          )}
        </div>
      );
    }

    if (lineActive === false) {
      setActiveLineIndex((prev) => prev + 1);
      line.typeWrite !== false && setLineActive(true);
      setSavedLines((prev) => [...prev, terminalLine(line)]);
    }
  }, [lineActive, savedLines, activeLineIndex]);

  if (savedLines.length === TERMINAL_INTRO_LINES2.length && !lineActive) {
    return <div className={`${styles.tv_effect}`} onAnimationEnd={() => setTerminalAnimOver(true)} />;
  }

  return <div className="h-full w-full overflow-hidden p-2">{savedLines}</div>;
}

/*     useEffect(() => {
      if (textData.length === 0) {
        return;
      } else if (carriageReturn.length < 1) {
        setLocationText(`${textData[0][0]}:~`);
      } else if (carriageReturn.length === 1) {
        setLocationText(`${textData[1][0]}:~`);
      } else {
        setLocationText(`${textData[1][0]}:~/projects/react/dwd`);
      }
    }, [carriageReturn]); */
