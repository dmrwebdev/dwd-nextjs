import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function DesktopTechPanel({ techList, techKey, mobile }) {
  const [panelOpen, setPanelOpen] = useState(true);
  const [panelHeight, setPanelHeight] = useState(null);
  const techPanelRef = useRef(null);

  useEffect(() => {
    if (techPanelRef.current) {
      console.log(techPanelRef.current);
      setPanelHeight(techPanelRef.current.clientHeight);
    }
  }, [panelOpen]);

  return (
    <div className=" flex flex-col" key={techKey}>
      <div
        className="flex items-center justify-center bg-slate-300 h-[40px] text-lg relative border-b"
        onClick={() => setPanelOpen((prev) => !prev)}
      >
        <h3 className="">{techKey}</h3>
        <div className="absolute right-0 mr-4">
          <FontAwesomeIcon icon={panelOpen ? faChevronDown : faChevronUp} />
        </div>
      </div>
      <div
        className={`
         overflow-hidden flex transition-all duration-500`}
        style={{
          height: panelOpen ? panelHeight : 0,
        }}
      >
        <div
          className="
        h-fit flex items-start flex-wrap p-4 "
          ref={techPanelRef}
        >
          {techList.map((tech) => (
            <div className="flex items-center px-2" key={tech.title}>
              <div className="w-[50px] h-[50px] relative my-2 ml-2 mr-4">
                <Image
                  src={tech.image}
                  alt={tech.alt}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              <div className=" text-center">
                <p>{tech.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileTechPanel({ techList, techKey, panelIndex, mobile }) {
  const [panelOpen, setPanelOpen] = useState(true);
  const [panelHeight, setPanelHeight] = useState(null);
  const techPanelRef = useRef(null);

  useEffect(() => {
    if (techPanelRef.current) {
      console.log(techPanelRef.current.clientHeight);
      setPanelHeight(techPanelRef.current.clientHeight);
    }
  }, [panelOpen]);

  return (
    <div className="">
      {/* Tech Panel Header */}
      <div
        className="flex items-center justify-center bg-slate-300 h-[40px] text-lg relative border-b"
        onClick={() => setPanelOpen((prev) => !prev)}
      >
        <h3 className="">{techKey}</h3>
        <div className="absolute right-0 mr-4">
          <FontAwesomeIcon icon={panelOpen ? faChevronDown : faChevronUp} />
        </div>
      </div>
      <div
        className={`
          overflow-hidden transition-all duration-500 bg-white`}
        style={{
          height: panelOpen ? panelHeight : "0",
        }}
      >
        <div className="p-4 " ref={techPanelRef}>
          {/* Tech Panel List */}
          {techList.map((tech) => (
            <div className="flex items-center px-2" key={tech.title}>
              <div className="w-[50px] h-[50px] relative my-2 ml-2 mr-4">
                <Image
                  src={tech.image}
                  alt={tech.alt}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              <div className=" text-center">
                <p>{tech.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
