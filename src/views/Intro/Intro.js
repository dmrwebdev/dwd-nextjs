import { useState, useEffect } from "react";
import styles from "./Intro.module.scss";

import Terminal from "../../components/Terminal/Terminal";
import PixelMe from "../../components/PixelMe/PixelMe";
import Contactbar from "../../components/ContactBar/ContactBar";

export default function Intro(props) {
  const [terminalDisplayOver, setTerminalDisplayOver] = useState(false);

  const date = new Date();

  const constructedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date());

  const dateString = `${constructedDate} ${date.getUTCHours()}:${date.getUTCMinutes()}:${
    date.getUTCSeconds() < 10
      ? `0${date.getUTCSeconds()}`
      : date.getUTCSeconds()
  } UTC ${date.getUTCFullYear()}`;

  // [ [user, location, command ], [...], [...] ]
  const textData = [
    ["derek@DMR-DESKTOP", "~", "ssh-dmrServer"],
    /* ["_", "", ""], */
    /*         [
      "",
      "",
      `Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.0-91-generic x86_64)
 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of ${dateString.replace(",", "")}

  System load:           0.05
  Usage of /:            45.1% of 24.06GB
  Memory usage:          86%
  Swap usage:            0%
  Processes:             124
  Users logged in:       0
  IPv4 address for eth0: 161.230.121.193
  IPv4 address for eth0: 10.34.0.1
  IPv6 address for eth0: 2203:a820:4:3d0::180:e000
  IPv4 address for eth1: 10.120.0.3

4 updates can be applied immediately.
0 of these updates are standard security updates.
To see these additional updates run: apt list --upgradable


*** System restart required ***
Last login: Fri Jan 14 06:50:12 2022 from 70.100.60.100
    `,
      true,
    ], */
    ["derek@DMR-WEBDEV", "~", "cd projects/react/dwd"],
    ["derek@DMR-WEBDEV", "~/projects/react/dwd", "yarn start"],
    /*     ["", "", "yarn run v1.22.10", true],
    ["", "", "wait  - compiling...", true],
    [
      "",
      "",
      "ready - started server on 0.0.0.0:3000, url: http://localhost:3000",
    ], */
  ];

  useEffect(() => {
    if (terminalDisplayOver) {
      /*  props.handleIntroOver(); */
    }
  }, [terminalDisplayOver]);

  function handleTypeAnimOver() {
    setTerminalDisplayOver(true);
  }

  console.log(terminalDisplayOver);

  return (
    <div
      className={`${
        terminalDisplayOver ? `${styles.overflow_hide}` : ""
      } h-screen  overflow-hidden `}
    >
      <div className={`${styles.intro_container} overflow-hidden`}>
        {terminalDisplayOver ? (
          <>
            <div className={terminalDisplayOver ? styles.tv_effect : ""} />
            <div className="h-full w-full flex flex-col justify-center">
              <div
                className={`${styles.hello_container} flex flex-col justify-center items-center text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl px-6 mb-8 relative`}
              >
                {/* <div className=""> */}
                <div className="flex justify-center items-center">
                  <h1 className="flex flex-col flex-wrap  drop-shadow-md ">
                    <span className="text-2xl md:text-6xl">
                      Hello, my names
                    </span>
                    <b>Derek Robertson!</b>
                  </h1>
                  <span className={`${styles.handwave_anim} ml-4`}>👋</span>
                </div>
                <p className="text-lg md:text-3xl mt-10 text-center">
                  {`I'm a full stack developer who loves to build websites and other neat things.`}
                </p>
                <div className="mt-10 w-full">
                  <Contactbar />
                </div>
                {/* </div> */}
              </div>
              <PixelMe
                terminalDisplayOver={terminalDisplayOver}
                className="absolute bottom-[-50px] -translate-x-1/2 rotate-45"
              />
            </div>
          </>
        ) : (
          <Terminal
            handleTypeAnimOver={handleTypeAnimOver}
            terminalDisplayOver={terminalDisplayOver}
            setTerminalDisplayOver={setTerminalDisplayOver}
            typeWriterText={textData}
          />
        )}
      </div>
    </div>
  );
}
