import { useState, useEffect } from "react";

export default function Typewriter({ data, active, startDelay, finishDelay, handleTextState, carriageReturn, speed }) {
  //Define object for state consisting of content to be typed and index of typewriter
  const [{ content, carriage }, setContent] = useState({
    content: "",
    carriage: 0,
  });

  //On Component mount
  useEffect(() => {
    function moveCarriage() {
      //if carriage equals length of input string stop.
      if (carriage == data.length) {
        if (active) {
          finishDelay ? setTimeout(() => active(false), finishDelay) : active(false);
        }
        return;
      }
      //set timeout for inputting next character to state
      const delay = setTimeout(() => {
        //Set state with new text and update index
        setContent({
          content: content + data[carriage],
          carriage: carriage + 1,
        });
        //Clear previous timeout
        clearTimeout(delay);
        //Bitwise or operator I think is to keep random number to 32 bits?
      }, 0 | (Math.random() * 100 + speed));
    }

    if (startDelay && content.length === 0) {
      setTimeout(() => {
        moveCarriage();
      }, startDelay);
    } else {
      moveCarriage();
    }

    //Rerun effect on content state update.
  }, [content, active, carriage, data, speed, startDelay, finishDelay]);

  return <span>{content}</span>;
}
