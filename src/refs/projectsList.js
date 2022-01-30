import tdd from "../assets/previews/thedotdevs.png";
import drumkit from "../assets/previews/drumkit.png";
import sessionClock from "../assets/previews/sessionClock.png";
import quoteGenerator from "../assets/previews/quoteGenerator.png";
import reactulator from "../assets/previews/reactulator.png";
import wonderclock from "../assets/previews/wonderclock.png";
import dmrForm from "../assets/previews/dmrForm.png";
import Markdown from "../assets/previews/markdown-previewer.png";

const projectsList = [
  {
    title: "The Dot Devs",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "https://www.thedotdevs.com",
    githubURL: "#",
    previewAlt: "The Dot Devs Preview",
    previewImg: tdd,
    description: "Company website for The Dot Devs",
    tech: ["NextJS", "Tailwind"],
  },
  {
    title: "XP Markdown Previewer",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/xp-markdown-previewer",
    githubURL: "#",
    previewAlt: "Markdown previewer styled after Windows XP",
    previewImg: Markdown,
    description:
      "Another early React application, this started off as a Free Code Camp excercise developing a simple Markdown previewer. Nostalgia took over however once I found a Windows XP styled CSS library, and soon enough the app evolved into a simple but faithful recreation of the WinXP desktop.",
    tech: ["React", "SCSS"],
  },
  {
    title: "React Drum Kit",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/react-drum-kit",
    githubURL: "https://github.com/dmrdevops/react-drum-kit",
    previewAlt: "React Drum Kit Preview",
    previewImg: drumkit,
    description:
      "My first React application! This project helped me learn the concept of state and component lifecycles, and opened a whole new window of opportunity for me when it came to app devlopment.",
    tech: ["React", "SCSS"],
  },
  {
    title: "25-5 Exercise Clock",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/25-5-clock",
    githubURL: "https://github.com/dmrdevops/25-by-5-exercise-clock",
    previewAlt: "25-5 Exercise Clock Preview",
    previewImg: sessionClock,
    description:
      "A Free Code Camp exercise developing a session timer with React. Seemed easy enough until I found out about the intracacies of setTimeout and component lifecycles!",
    tech: ["React", "CSS"],
  },
  {
    title: "Reactulator",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/reactulator",
    githubURL: "https://github.com/dmrdevops/reactulator",
    previewAlt: "Reactulator Preview",
    previewImg: reactulator,
    description:
      "This one was challenging but a lot of fun- as my first React application, I learned a ton regarding state and ",
    tech: ["React", "CSS"],
  },
  {
    title: "Random Quote Machine",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/random-quote-machine",
    githubURL: "https://github.com/dmrdevops/random-quote-machine",
    previewAlt: "Random Quote Machine Preview",
    previewImg: quoteGenerator,
    description:
      "Another first attempt, this time into the world of CSS frameworks and data retrieval through an API. A very simple app, random quote generator taught me how to utilize fetch and event listeners to retrieve data through an API and dynamically update a webpage. It also helped me gain familiarity with Bootstrap and UI kits in general.",
    tech: ["HTML", "Bootstrap", "JS"],
  },
  {
    title: "Wonder Clock",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/wonder-clock",
    githubURL: "https://github.com/dmrdevops/wonder-clock",
    previewAlt: "Wonder Clock Preview",
    previewImg: wonderclock,
    description:
      "My first attempt at Javascript! This was inspired by a Wes Bos course were I learned how to create an animated analog clock. Aside from learning Javascript date and time manipulation, this was a key lesson in learning how to utilize CSS transformations in order to animate the clock hands.",
    tech: ["HTML", "CSS", "JS"],
  },
  /*   {
    title: "Super Awesome Program Manual",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/super-awesome-program-manual",
    githubURL: "https://github.com/dmrdevops/super-awesome-program-manual",
    previewAlt: "SAPM Preview",
    previewURL:
      "https://repository-images.githubusercontent.com/337932395/8f115f00-7ba6-11eb-9c3b-787eec23cdf4",
    description:
      "Technical support page for the fictional Super Awesome Program",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Chris Cornell Tribute Page",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/cornell-tribute-page",
    githubURL: "https://github.com/dmrdevops/dmr-survey-page",
    previewAlt: "Chris Cornell Tribute Page Preview",
    previewURL:
      "https://repository-images.githubusercontent.com/337932894/dc8fcb00-7baa-11eb-8ff8-e5bd04c05be6",
    description:
      "Another one of my first websites, this page is dedicated to late rock artist Chris Cornell, ",
    tech: ["HMTL", "CSS"],
  }, */
  {
    title: "DMR Survey Site",
    linkTypes: ["Project Link", "Github Project Link"],
    projectURL: "/projects/dmr-survey-page",
    githubURL: "https://github.com/dmrdevops/dmr-survey-page",
    previewAlt: "DMR Survey Site Preview",
    previewImg: dmrForm,
    description:
      "My very first webpage. A simple survey form created as a Free Code Camp exercise, this was my first forray into basic CSS and HTML. Ignore the option for CSS as a programming language, I've learned since then ;)",
    tech: ["HMTL", "CSS"],
  },
];

export default projectsList;
