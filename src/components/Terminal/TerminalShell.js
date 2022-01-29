import { useRef, useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function TerminalShell({
  currentDirectory,
  handlChangeDirectory,
  bashExperience,
  setBashExperience,
  findDirectory,
  children,
}) {
  const [savedCommands, setSavedCommands] = useState([]);
  const [savedCommandIndex, setSavedCommandIndex] = useState(0);
  const [currentCommand, setCurrentCommand] = useState("");
  const [loadedSection, setLoadedSection] = useState(null);
  const [terminalMessage, setTerminalMessage] = useState(null);

  const locationRef = useRef(null);
  const textAreaRef = useRef(null);

  // Set current command view to null if section is changed
  useEffect(() => {
    setCurrentCommand("");
  }, [currentDirectory]);

  function handleCommand() {
    // Change Directories
    if (/cd.*/.test(currentCommand)) return handleCDCommand(currentCommand);

    const invalidCommand = (input) =>
      setSavedCommands((prev) => [...prev, `${input}: command not found`]);

    switch (currentCommand) {
      case "clear":
        setSavedCommands([]);
        break;
      case "I know bash!":
        if (!bashExperience) {
          setTerminalMessage(`*** BASH EXPERIENCE IS ALREADY ENABLED ***
        `);
        } else {
          setBashExperience(true);
          setTerminalMessage(`*** BASH EXPERIENCE ENABLED ***
          Hello fellow bash user! The terminal will now behave like a real one and require the proper commands to operate. Have fun!
        `);
        }

        break;
      case "I don't know bash":
        if (!bashExperience) {
          setTerminalMessage(`*** BASH EXPERIENCE IS ALREADY DISABLED ***
        `);
        } else {
          setBashExperience(false);
          setTerminalMessage(`*** BASH EXPERIENCE DISABLED ***
          You may now use any of the aliases listed in the help section to navigate.
        `);
        }
        break;
      default:
        if (!bashExperience) {
          const validPath = findDirectory(currentCommand);
          if (validPath) {
            handlChangeDirectory(validPath);
            setSavedCommands([]);
          } else {
            invalidCommand(currentCommand);
          }
        } else {
          invalidCommand(currentCommand);
        }
        break;
    }
    setSavedCommandIndex(0);
    setCurrentCommand("");
    if (textAreaRef.current) {
      textAreaRef.current.scrollIntoView();
    }
  }

  function handleCDCommand(cdPath) {
    const clearCommands = () => {
      setSavedCommands([]);
      setCurrentCommand("");
    };

    if (cdPath === "cd") {
      const home = findDirectory("~");
      handlChangeDirectory(home);
      clearCommands();
      return;
    }

    const pathname = cdPath.split(" ")[1];

    const validPath = findDirectory(pathname);

    if (validPath) {
      handlChangeDirectory(validPath);
      clearCommands();
    } else {
      setSavedCommands((prev) => [
        ...prev,
        `-bash: cd: ${pathname}: No such file or directory`,
      ]);
    }
  }

  // Filter line breaks and other random inserts by DOM
  function handleTypedInput(val) {
    if (val === "\n") handleCommand();
    if (val === "<br>") setCurrentCommand("");

    if (
      val !== "<div><br></div>" &&
      val !== "<div><br></div><div><br></div>" &&
      val !== "<div><br></div><div> </div>"
    ) {
      setCurrentCommand(val);
    }
  }

  const pastCommands = (
    <div className="mt-8">
      {}
      {savedCommands.map((command, i) => (
        <div
          key={command === "Unknown command" ? i : command}
          className="break-all"
        >
          {command}
        </div>
      ))}
    </div>
  );

  const message = (message) => <p className="mt-8">{message}</p>;

  return (
    <div className="min-h-full w-full  flex flex-col">
      <div className="grow flex">{children}</div>
      <div className=" w-full max-w-[1600px] mx-auto ">
        {message ? message(terminalMessage) : pastCommands}
        <div
          className="relative py-8 px-6 w-full  mx-auto"
          onClick={() =>
            currentDirectory === "~" && textAreaRef.current.focus()
          }
        >
          <div className="absolute" ref={locationRef}>
            <span className="text-terminal-location">derek@DMR-DESKTOP</span>:
            <span className="text-terminal-tilde">~</span>$
          </div>
          <TextareaAutosize
            ref={textAreaRef}
            spellcheck="false"
            className="w-full resize-none bg-transparent outline-none"
            onChange={(e) => handleTypedInput(e.target.value)}
            value={currentCommand}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                e.preventDefault();
                if (
                  savedCommands.length > 0 &&
                  savedCommandIndex < savedCommands.length
                ) {
                  // Increment the index
                  setSavedCommandIndex((prev) => prev + 1);
                  return setCurrentCommand(
                    // Use a negative value to effectively reverse the array
                    savedCommands.at(-Math.abs(savedCommandIndex + 1))
                  );
                }
              }

              if (e.key === "ArrowDown") {
                e.preventDefault();
                if (savedCommands.length > 0 && savedCommandIndex >= 0) {
                  setSavedCommandIndex((prev) => prev - 1);
                  console.log(savedCommandIndex);
                  return setCurrentCommand(
                    savedCommands.at(-Math.abs(savedCommandIndex - 1))
                  );
                } else {
                  setCurrentCommand("");
                }
              }

              if (e.key === "Enter") {
                e.preventDefault();
                handleCommand();
              }
            }}
            minRows={1}
            style={{
              textIndent: locationRef.current
                ? locationRef.current.clientWidth + 5
                : 0,
            }}
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
