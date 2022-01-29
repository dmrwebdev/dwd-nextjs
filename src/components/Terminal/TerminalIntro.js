import { useState, useEffect, useRef } from "react";

import styles from "./Terminal.module.scss";
import TerminalTitleBar from "./TerminalTitleBar";
import Typewriter from "./Typewriter/Typewriter";
import terminalLines from "../../refs/terminalLines";

export default function TerminalIntro({
  // Handle animation over
  handleAnimOver,
  terminalAnimStart,
  terminalAnimOver,
  // Type writer text data
  className,
  children,
}) {
  const [carriageReturn, setCarriageReturn] = useState([]);

  const [locationText, setlocationText] = useState("");
  // Lines individually added to terminal
  const [savedLines, setSavedLines] = useState([]);

  const savedLinesRef = useRef(null);

  useEffect(() => {
    //Prevent overwriting last cursor animation
    if (mappedText.length > carriageReturn.length) {
      setSavedLines(mappedText);
    }
  }, [carriageReturn]);

  function handleTextState(i) {
    /* console.log(i); */
    setTimeout(() => {
      setCarriageReturn((prevState) => [...prevState, i]);
    }, randomNumber(800, 1200));
  }

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  let mappedText = terminalLines.map((elem, i) => {
    if (i <= carriageReturn.length) {
      if (elem[3]) {
        if (i === carriageReturn.length) {
          /* const test = async () => {
            await delay(1000); */
          setCarriageReturn((prevState) => [...prevState, i]);
          /* };
          test(); */
        }
        return (
          <div key={i}>
            <div>
              <div className="max-w-[600px] whitespace-pre-line">{elem[2]}</div>
            </div>
          </div>
        );
      } else {
        return (
          <div key={i}>
            <div>
              <span className="text-terminal-location">{elem[0]}</span>:
              <span className="text-terminal-tilde">{elem[1]}</span>${" "}
              <Typewriter
                data={elem[2]}
                handleTextState={handleTextState}
                carriageReturn={carriageReturn}
                speed={randomNumber(25, 50)}
              />
              {i === carriageReturn.length ? (
                <span className={styles.cursor}>_</span>
              ) : null}
            </div>
          </div>
        );
      }
    }
  });

  // Keep container scrolled to bottom
  useEffect(() => {
    if (savedLinesRef.current) {
      savedLinesRef.current.scrollTop = savedLinesRef.current.scrollHeight;
      console.log(
        (savedLinesRef.current.scrollTop = savedLinesRef.current.scrollHeight)
      );
    }
  }, [savedLines, savedLinesRef]);

  const tvEffect = (
    <div
      className={`${styles.tv_effect}`}
      onAnimationEnd={() => handleAnimOver(true)}
    />
  );

  return carriageReturn.length === savedLines.length ? (
    tvEffect
  ) : (
    <div className="h-full w-full overflow-hidden" ref={savedLinesRef}>
      <div className="pb-12">{savedLines}</div>
    </div>
  );
}

// Random number helper
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
