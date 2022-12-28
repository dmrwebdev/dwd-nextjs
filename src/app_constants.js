import { AboutMe, Projects, Technologies, TerminalHome, Walter } from "@views";

export const APP_SECTIONS = new Map([
  [
    "/",
    {
      name: "Home",
      path: "/",
      terminalPath: "/#terminal",
      active: true,
      component: <TerminalHome />,
    },
  ],
  [
    "/#about-me",
    {
      name: "About Me",
      path: "/#about-me",
      active: true,
      component: <AboutMe />,
    },
  ],
  [
    "/#projects",
    {
      name: "Projects",
      path: "/#projects",
      active: true,
      component: <Projects />,
    },
  ],
  [
    "/#tech",
    {
      name: "Tech",
      path: "/#tech",
      active: true,
      component: <Technologies />,
    },
  ],
  [
    "/#certs",
    {
      name: "Certs",
      path: "/#certs",
      active: false,
      component: <Technologies />,
    },
  ],
  [
    "/#terminal",
    {
      name: "Terminal",
      path: "/#terminal",
      active: false,
      component: <TerminalHome />,
    },
  ],
]);

export const smMediaQuery = 640;
export const mdMediaQuery = 768;
