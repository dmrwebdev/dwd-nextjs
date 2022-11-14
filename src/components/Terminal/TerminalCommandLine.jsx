import { useRef, useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function TerminalCommandLine({ directories, currentDirectory, handleChangeDirectory }) {
  const [savedCommands, setSavedCommands] = useState([]);
  const [savedCommandIndex, setSavedCommandIndex] = useState(null);
  const [savedMessages, setSavedMessages] = useState([]);
  const [currentCommand, setCurrentInput] = useState("");

  const locationRef = useRef(null);
  const textAreaRef = useRef(null);

  // Clear input if directory is changed
  /*   useEffect(() => {
    setCurrentInput("");
  }, [currentDirectory]); */

  function handleCommand() {
    // If cd command change directories
    if (/cd.*/.test(currentCommand)) {
      changeDirectory(currentCommand);
    } else {
      switch (currentCommand) {
        case "clear":
          setSavedMessages([]);
          break;
        default:
          setSavedMessages((prev) => [...prev, `${currentCommand}: command not found`]);
      }
    }

    // Reset the history to the bottom?
    setSavedCommandIndex(null);
    // Save if not the same as previous command
    savedCommands.at(-1) !== currentCommand && setSavedCommands((prev) => [...prev, currentCommand]);
    setCurrentInput("");
    if (textAreaRef.current) {
      textAreaRef.current.scrollIntoView();
    }
  }

  function changeDirectory(path) {
    // Route to terminal home if path is only cd
    if (path === "cd") {
      handleChangeDirectory(directories.get("/"));
    } else {
      const pathname = path.split(" ")[1];

      const matchingDirectory = (() => {
        for (const key of directories.keys()) {
          // TODO: This is in flexible
          if (key.includes(pathname)) return directories.get(key);
        }
      })();

      if (matchingDirectory) {
        handleChangeDirectory(matchingDirectory);
      } else {
        setSavedCommands((prev) => [...prev, `-bash: cd: ${pathname}: No such file or directory`]);
      }
    }
  }

  // Handle special key presses such as arrow keys and enter
  function handleInput(e) {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        handleCommandHistory("prev");
        break;
      case "ArrowDown":
        e.preventDefault();
        handleCommandHistory("next");
        break;
      case "Enter":
        e.preventDefault();
        handleCommand();
        break;
      default:
    }
  }

  function handleCommandHistory(direction) {
    if (!savedCommands.length) return;

    if (direction === "next") {
      switch (true) {
        case savedCommandIndex === 0:
          setSavedCommandIndex(null);
          setCurrentInput("");
          return;
        case savedCommandIndex > 0:
          setSavedCommandIndex((prev) => prev - 1);
          setCurrentInput([...savedCommands].reverse().at(savedCommandIndex - 1));
          return;
        default:
          return;
      }
    }

    if (direction === "prev") {
      switch (true) {
        case savedCommandIndex === null:
          setSavedCommandIndex(0);
          setCurrentInput(savedCommands.at(-1));
          return;
        case savedCommandIndex < savedCommands.length - 1:
          console.log(savedCommandIndex);
          setSavedCommandIndex((prev) => prev + 1);
          setCurrentInput([...savedCommands].reverse().at(savedCommandIndex + 1));
          return;
        default:
          return;
      }
    }
  }

  const pastCommands = savedMessages.map((command, i) => (
    <div key={command === "Unknown command" ? i : command} className="break-all">
      {command}
    </div>
  ));

  return (
    <div className=" w-full max-w-[1600px] mx-auto ">
      <div className="mt-8">{pastCommands}</div>
      <div
        className="relative py-8 px-6 w-full  mx-auto"
        onClick={() => currentDirectory === "home" && textAreaRef.current.focus()}
      >
        <div className="absolute" ref={locationRef}>
          <span className="text-terminal-location">derek@DMR-DESKTOP</span>:
          <span className="text-terminal-tilde">~</span>$
        </div>
        <TextareaAutosize
          ref={textAreaRef}
          spellcheck="false"
          className="w-full resize-none bg-transparent outline-none"
          onChange={(e) => setCurrentInput(e.target.value)}
          value={currentCommand}
          onKeyDown={(e) => handleInput(e)}
          minRows={1}
          style={{
            textIndent: locationRef.current ? locationRef.current.clientWidth + 5 : 0,
          }}
        />
      </div>
    </div>
  );
}
