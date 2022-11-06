import { useState, useEffect } from "react";

export default function IntroText() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    function changeAfterDuration() {
      setTimeout(() => {
        if (wordIndex === wordList.length - 1) {
          setWordIndex(0);
        } else {
          setWordIndex((prev) => prev + 1);
        }
      }, 4000);
    }

    changeAfterDuration();

    return () => clearTimeout(changeAfterDuration);
  }, [wordIndex]);

  return wordList[wordIndex];
}

const wordList = [
  "full stack engineer",
  "builder",
  "computer nerd",
  "gamer",
  "fisherman",
];
