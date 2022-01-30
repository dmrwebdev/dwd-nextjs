import Projects from "../../../views/Projects/Projects";
import AboutMe from "../../../views/AboutMe/AboutMe";
import Technologies from "../../../views/Technologies/Technologies";
import ParticleBG from "../../ParticleBG/ParticleBG";
import Walter from "../../../views/Terminal/Walter/Walter";
import Gear from "../../../views/Terminal/Gear/Gear";

const directories = [
  {
    names: ["~", "home"],
    isPath: true,
    showInTitleBar: true,
    urlPath: "/#terminal",
    component: (
      <div className="h-full mx-auto flex flex-col justify-center p-6">
        <div className="mx-auto mb-20 w-full max-w-[1200px]  ">{`
    Hello and welcome to my portfolio!
    
    As you may have figured out already, my names Derek and I'm a full stack engineer living life in the bustling SF Bay area. Originally an Electric Motor Mechanic for over a decade but always a nerd at heart, I found my true passion in coding a little over a year ago and haven't been able to look back! 
    
    With this iteration of my portfolio, I decided to have fun a little fun and recreate the terminal I use everyday. Feel free to find out more about me and my projects by navigating using terminal commands or the tabs at the top of the terminal window!

    Commands:
    
    * about: View about me section
    * projects: View some of my projects
    * tech: See the Technology I use and the certificates I've acheived!
    * help: See all available commands
    * home: Go back to this screen
    

  
    Please feel free to explore and check out some of my work!
  `}</div>
      </div>
    ),

    //For the full bash terminal experience, enter "I know bash!".
  },
  {
    names: ["~/about", "about"],
    isPath: true,
    showInTitleBar: true,
    component: <AboutMe />,
    urlPath: "/#about",
  },
  {
    names: ["~/projects", "projects"],
    isPath: true,
    showInTitleBar: true,
    component: <Projects />,
    urlPath: "/#projects",
  },
  {
    names: ["~/tech", "tech"],
    isPath: true,
    showInTitleBar: true,
    component: <Technologies />,
    urlPath: "/#tech",
  },
  {
    names: ["~/particles", "particles"],
    isPath: true,
    showInTitleBar: false,

    component: (
      <div className="relative h-full w-full">
        <ParticleBG className="absolute h-full w-full" />
      </div>
    ),
  },
  /*   {
    names: "~/gear",
    component: <Gear />,
  }, */
  {
    names: ["~/walter", "walter"],
    isPath: true,
    showInTitleBar: false,
    component: <Walter />,
  },
  {
    names: ["help"],
    isPath: false,
    showInTitleBar: false,
    component: (
      <div className="mx-auto mb-20 w-full max-w-[1200px] ">
        {`List of currently available commands:
    
    * cd particles - Check out a cool canvas effect made with tsparticles!
    * cd walter - My coding buddy and mascot
    
    More to come soon!
    `}
      </div>
    ),
  },
];

export default directories;
