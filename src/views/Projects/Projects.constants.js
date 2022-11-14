// TODO: Update descriptions/refactor

import * as previews from "@assets/previews";
import * as tech from "@assets/tech";

export const PROJECTS_LIST = [
  {
    title: "The Dot Devs",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "https://www.thedotdevs.com",
    githubURL: "https://github.com/the-dot-devs/tdd-portfolio",
    previewAlt: "The Dot Devs Preview",
    previewImg: previews.theDotDevs,
    description: "Company website for The Dot Devs",
    tech: [tech.nextjs, tech.tailwind],
  },
  {
    title: "XP Markdown Previewer",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/xp-markdown-previewer",
    githubURL: "https://github.com/dmrwebdev/xp-safe-space",
    previewAlt: "Markdown previewer styled after Windows XP",
    previewImg: previews.markdownPreviewer,
    description:
      "Another early React application, this started off as a Free Code Camp excercise developing a simple Markdown previewer. Nostalgia took over however once I found a Windows XP styled CSS library, and soon enough the app evolved into a simple but faithful recreation of the WinXP desktop.",
    tech: [tech.react, tech.sass],
  },

  {
    title: "Reactulator",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/reactulator",
    githubURL: "https://github.com/dmrdevops/reactulator",
    previewAlt: "Reactulator Preview",
    previewImg: previews.reactulator,
    description:
      "This one was challenging but a lot of fun- as one of my early React applications, it was originally completed using class components and later rebuilt using hooks after learning of them. Don't think I could ever go back!",
    tech: [tech.react],
  },
  {
    title: "React Drum Kit",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/react-drum-kit",
    githubURL: "https://github.com/dmrdevops/react-drum-kit",
    previewAlt: "React Drum Kit Preview",
    previewImg: previews.drumKit,
    description:
      "My first React application! This project helped me learn the concept of state and component lifecycles, and opened a whole new window of opportunity for me when it came to app devlopment.",
    tech: [tech.react, tech.sass],
  },
  {
    title: "Random Quote Machine",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/random-quote-machine",
    githubURL: "https://github.com/dmrdevops/random-quote-machine",
    previewAlt: "Random Quote Machine Preview",
    previewImg: previews.quoteGenerator,
    description:
      "Another first attempt, this time into the world of CSS frameworks and data retrieval through an API. A very simple app, random quote generator taught me how to utilize fetch and event listeners to retrieve data through an API and dynamically update a webpage. It also helped me gain familiarity with Bootstrap and UI kits in general.",
    tech: [tech.javascript, tech.bootstrap],
  },
  {
    title: "Wonder Clock",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/wonder-clock",
    githubURL: "https://github.com/dmrdevops/wonder-clock",
    previewAlt: "Wonder Clock Preview",
    previewImg: previews.wonderClock,
    description:
      "My first attempt at Javascript! This was inspired by a Wes Bos course were I learned how to create an animated analog clock. Aside from learning Javascript date and time manipulation, this was a key lesson in learning how to utilize CSS transformations in order to animate the clock hands.",
    tech: [tech.javascript],
  },
  /*   {
    title: "DMR Survey Site",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/dmr-survey-page",
    githubURL: "https://github.com/dmrdevops/dmr-survey-page",
    previewAlt: "DMR Survey Site Preview",
    previewImg: previews.dmrForm,
    description:
      "My very first webpage. A simple survey form created as a Free Code Camp exercise, this was my first forray into basic CSS and HTML. Ignore the option for CSS as a programming language, I've learned since then ;)",
    tech: ["HMTL", "CSS"],
  }, */
  {
    title: "VEM Work Report",
    linkTypes: ["Project Link"],
    projectURL: "/vemReport.xlsm",
    githubURL: "#",
    previewAlt: "VEM Work Report Preview",
    previewImg: previews.vemReport,
    description:
      "The Excel sheet that started it all. My absolute first venture into developing, I was tasked with replacing our paper report with an electronic version. Utilizing macros and VBA, I was amazed at how much excel can actually do natively- By the end this report was able to conditionally render and alert users of missing data, generate a printable copy, link it up to our job tracking system (from another vendor none the less), and more. Looking back I kick myself- oh how much easier this would have been with some html and javascript.",
    // tech: [
    //   /* "Excel" */
    // ],
  },
];
