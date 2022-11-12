import { useState, useEffect } from "react";
import { styles } from "./index";

export default function WordListLoop({ wordList }) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    function changeAfterDuration() {
      setTimeout(() => setWordIndex((prev) => (prev + 1) % wordList.length), 4000);
    }

    changeAfterDuration();

    return () => clearTimeout(changeAfterDuration);
  }, [wordList, wordIndex]);

  return (
    <span key={wordList[wordIndex]} className={`${styles.content} mx-2 min-w-[180px]`}>
      <span className={`${styles.content__container__text} mx-2`}>{wordList[wordIndex]}</span>
    </span>
  );
}
