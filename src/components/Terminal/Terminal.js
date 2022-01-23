import { useState, useEffect, useRef } from "react";

import styles from "./Terminal.module.scss";
import TerminalTitleBar from "./TerminalTitleBar";
import Hello from "../Hello/Hello";
import Typewriter from "./Typewriter/Typewriter";

export default function Terminal({
  // Handle animation over
  handleTypeAnimOver,
  terminalDisplayOver,
  setTerminalDisplayOver,
  // Type writer text data
  typeWriterText,
}) {
  const [carriageReturn, setCarriageReturn] = useState([]);

  const [locationText, setlocationText] = useState("");
  // Lines individually added to terminal
  const [savedLines, setSavedLines] = useState([]);

  const terminalContentRef = useRef(null);

  useEffect(() => {
    //Prevent overwriting last cursor animation
    if (mappedText.length > carriageReturn.length) {
      setSavedLines(mappedText);
    }

    if (carriageReturn.length === typeWriterText.length) {
      handleTypeAnimOver(true);
    }
  }, [carriageReturn]);

  function handleTextState(i) {
    /* console.log(i); */
    setTimeout(() => {
      setCarriageReturn((prevState) => [...prevState, i]);
    }, randomNumber(800, 1200));
  }

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  let mappedText = typeWriterText.map((elem, i) => {
    console.log(elem);
    if (i <= carriageReturn.length) {
      if (elem[3]) {
        console.log(i);

        /*
         */

        if (i === carriageReturn.length) {
          /* const test = async () => {
            await delay(1000); */
          setCarriageReturn((prevState) => [...prevState, i]);
          /* };
          test(); */
        }
        return (
          <div>
            <div>
              <div className="max-w-[600px] whitespace-pre-line">{elem[2]}</div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
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
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop =
        terminalContentRef.current.scrollHeight;
    }
  }, [savedLines, terminalContentRef]);

  return (
    <div
      className={`${styles.terminal_container} h-full w-full bg-terminal-black fixed z-30 drop-shadow-md`}
    >
      <TerminalTitleBar
        textData={typeWriterText}
        carriageReturn={carriageReturn}
        setlocationText={setlocationText}
        locationText={locationText}
        setTerminalDisplayOver={setTerminalDisplayOver}
      />
      <div
        ref={terminalContentRef}
        className={`${styles.terminal_content} text-[15px] p-4 overflow grow shrink basis-0 overflow-auto`}
      >
        <div>{terminalDisplayOver ? <Hello /> : savedLines}</div>
      </div>
    </div>
  );
}

// Random number helper
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
