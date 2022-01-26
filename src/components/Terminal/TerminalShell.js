import { useRef, useEffect, useState } from "react";
import AboutMe from "../../views/AboutMe/AboutMe";
import ContentEditable from "../ContentEditable/ContentEditable";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import TextareaAutosize from "react-textarea-autosize";
import Projects from "../../views/Projects/Projects";
import Technologies from "../../views/Technologies/Technologies";

export default function TerminalShell() {
  const [savedCommands, setSavedCommands] = useState([]);
  const [typedInput, setTypedInput] = useState("");
  const [shellLocation, setShellLocation] = useState("~");
  const [loadedSection, setLoadedSection] = useState(null);

  const locationRef = useRef(null);
  const textAreaRef = useRef(null);

  const home = `Hello and welcome to my portfolio!
    You can navigate around the termninal using these commands:

    * cd
    * cd projects
    * cd aboutMe
  
    Please feel free to explore and check out some of my work!
  `;

  const validLocations = ["about", "projects", "tech", "certs"];

  useEffect(() => {
    /*     const home = `Hello and welcome to my portfolio!
    You can navigate around the termninal using these commands:

    -cd
    -cd projects
    -cd aboutMe
  
    Please feel free to explore and check out some of my work!
  `; */
    setLoadedSection(() => {
      switch (shellLocation) {
        /*       case "~":
        return home; */
        case "~/projects":
          return <Projects />;
        case "~/about":
          return <AboutMe />;
        case "~/projects":
          return <Projects />;
        case "~/tech":
          return <Technologies />;
        default:
          return;
      }
    });
  }, [shellLocation]);

  const { width } = useWindowDimensions();

  function handleCommand(command) {
    // Change Directories
    if (/cd .+/.test(command)) {
      const location = command.split(" ")[1];
      if (validLocations.indexOf(location) > -1) {
        setShellLocation(`~/${location}`);
      } else {
        setShellLocation(`~`);
      }

      setSavedCommands([]);
      return setTypedInput("");
    }

    let commandOverride;

    console.log(command);
    switch (typedInput) {
      case "clear":
        setSavedCommands([]);
        break;
      case "cd":
        setShellLocation("~");
        break;
      default:
        /*         console.log(typedInput);
        commandOverride = "Unknown command"; */
        setSavedCommands((prev) => [
          ...prev,
          `${typedInput}: command not found`,
        ]);
        break;
    }

    /*     setSavedCommands((prev) => [...prev, typedInput]); */
    /*     if (commandOverride) {
      setSavedCommands((prev) => [...prev, commandOverride]);
    } else {
      ;
    } */

    setTypedInput("");
  }

  function changeDirectory() {}

  if (width < 800) {
    return (
      <div className="h-full w-full p-4 flex flex-col">
        <AboutMe />
      </div>
    );
  }

  function handleTypedInput(val) {
    if (val === "\n") handleCommand();
    if (val === "<br>") setTypedInput("");

    if (
      val !== "<div><br></div>" &&
      val !== "<div><br></div><div><br></div>" &&
      val !== "<div><br></div><div> </div>"
    ) {
      setTypedInput(val);
    }
  }

  const pastCommands = (
    <>
      <div className="whitespace-pre-line">{home}</div>
      {savedCommands.map((command, i) => (
        <div
          key={command === "Unknown command" ? i : command}
          className="break-all"
        >
          {command}
        </div>
      ))}
    </>
  );

  return (
    <div
      className="h-full w-full p-4 flex flex-col"
      onClick={() => shellLocation === "~" && textAreaRef.current.focus()}
    >
      {loadedSection ? loadedSection : pastCommands}

      {/* <div> */}
      <div className="relative py-4">
        <div className="absolute" ref={locationRef}>
          derek@DMR-DESKTOP:~$
        </div>
        <TextareaAutosize
          ref={textAreaRef}
          spellcheck="false"
          className="w-full resize-none bg-transparent outline-none"
          onChange={(e) => handleTypedInput(e.target.value)}
          value={typedInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleCommand(e.target.value);
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
      {/* </div> */}
    </div>
  );
}
