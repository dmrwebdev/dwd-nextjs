import projectsList from "../../refs/projectsList";
import linkIcon from "../../assets/project_icons/link.svg";
import githubIcon from "../../assets/svgs/github-octocat.svg";
import Section from "../../components/Section/Section";
import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.scss";
import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import TerminalContentHeading from "../../components/Terminal/subcomponents/TerminalContentHeading";
import nextCircleArrow from "../../assets/svgs/nextCircleArrow.svg";
import { DecorativeTitlebar } from "../../components/Terminal/TerminalTitleBar";

export default function Projects() {
  const { width } = useWindowDimensions();
  const [projectListIndex, setProjectListIndex] = useState(0);

  function incrementProjectIndex() {
    if (projectListIndex === projectsList.length - 1) {
      return setProjectListIndex(0);
    }

    return setProjectListIndex((prev) => prev + 1);
  }

  function decrementProjectIndex() {
    if (projectListIndex === 0)
      return setProjectListIndex(projectsList.length - 1);

    return setProjectListIndex((prev) => prev - 1);
  }

  const desktopLayout = (
    <section id="projects" className="">
      <div>
        <div className="w-full max-w-[1600px] mx-auto ">
          {/*      <div className="mb-4">
            <span className="text-terminal-location">derek@DMR-DESKTOP:</span>
            <span className="text-terminal-tilde">~/projects</span>$ yarn start
          </div> */}
          <TerminalContentHeading>
            A Small Collection of My Projects
          </TerminalContentHeading>
        </div>
      </div>
      <div className="mx-auto flex flex-wrap justify-center ">
        {projectsList.map((project) => (
          <ProjectTile project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
  const mobileLayout = (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col text-white bg-[#182a40]"
    >
      <DecorativeTitlebar
        customLocation="~/projects"
        link="/#projects"
        className="drop-shadow-md"
      />

      <div className="flex flex-col grow">
        <MobileTile project={projectsList[projectListIndex]} />
        <ControlBar
          incrementProjectIndex={incrementProjectIndex}
          decrementProjectIndex={decrementProjectIndex}
        />
      </div>
    </section>
  );

  if (width < 800) {
    return mobileLayout;
  }

  return desktopLayout;
}

function ControlBar({ incrementProjectIndex, decrementProjectIndex }) {
  return (
    <div className="max-w-[330px] w-full mx-auto flex justify-between m-4">
      <div
        className="max-w-[60px] rotate-180 text-[0px] "
        onClick={() => decrementProjectIndex()}
      >
        <Image
          src={nextCircleArrow}
          alt="A right arrow in a circle"
          className="drop-shadow-lg"
        />
      </div>

      <div
        className="max-w-[60px] text-[0px]"
        onClick={() => incrementProjectIndex()}
      >
        <Image
          src={nextCircleArrow}
          alt="A right arrow in a circle"
          className="drop-shadow-lg"
        />
      </div>
    </div>
  );
}

function MobileTile({ project }) {
  return (
    <div
      className="flex flex-col grow  rounded px-3 py-4 pt-8"
      key={project.projectURL}
    >
      {/*  Project Links */}
      {/*       <div
        className={`${styles.projectTile_titlebar} flex justify-between items-center py-3 px-4 `}
      >
        
      </div> */}

      {/* Wrapper */}
      {/*  */}

      <div className="flex">
        {/*   <div className="w-full max-w-[400px] flex p-2 bg-black rounded-full"> */}
        <div
          className={`flex grow items-center aspect-square rounded-full relative z-10 overflow-hidden drop-shadow-lg`}
        >
          <Image
            src={project.previewImg}
            alt={project.previewAlt}
            className="h-full"
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          />
        </div>
        {/*     </div> */}
        <div className="flex flex-col p-4 space-y-6">
          <Link href={project.projectURL}>
            <a className="w-[50px] aspect-square ">
              <Image
                src={linkIcon}
                alt="Project Link"
                layout="responsive"
                className="drop-shadow-lg"
              />
            </a>
          </Link>
          <Link href={project.githubURL}>
            <a className="w-[50px] aspect-square ">
              <Image
                src={githubIcon}
                alt="Github Link"
                className="drop-shadow-lg"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="grow">
        <h3 className="text-2xl mt-4">{project.title}</h3>
        <div className="text-sm">{project.tech.join(", ")}</div>
        <p className="mt-3">{project.description}</p>
      </div>

      {/* Description and Tech */}
      {/* <div className="p-3 py-5 text-white text-right bg-[#2A2B2A]"></div> */}
    </div>
  );
}

function ProjectTile({ project }) {
  const [hovered, setHovered] = useState(false);

  /*   function handleEnter(e) {
    console.log("firing");
    console.log(e);
  } */

  return (
    <div
      className="w-full max-w-[600px] grow flex flex-col grow m-4 rounded p-8 bg-[#182a40]"
      key={project.projectURL}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/*  Project Links */}
      {/*       <div
        className={`${styles.projectTile_titlebar} flex justify-between items-center py-3 px-4 `}
      >
        
      </div> */}

      {/* Wrapper */}
      {/*  */}

      <div className="flex justify-between">
        {/*   <div className="w-full max-w-[400px] flex p-2 bg-black rounded-full"> */}
        <div
          className={`max-w-[300px] mx-auto flex grow items-center aspect-square rounded-full relative z-10 overflow-hidden drop-shadow-lg`}
        >
          <Image
            src={project.previewImg}
            alt={project.previewAlt}
            className="h-full"
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          />
        </div>
        {/*     </div> */}
        <div className="flex flex-col p-4 space-y-6">
          <Link href={project.projectURL}>
            <a className="w-[50px] aspect-square ">
              <Image
                src={linkIcon}
                alt="Project Link"
                layout="responsive"
                className="drop-shadow-lg"
              />
            </a>
          </Link>
          <Link href={project.githubURL}>
            <a className="w-[50px] aspect-square ">
              <Image
                src={githubIcon}
                alt="Github Link"
                className="drop-shadow-lg"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="grow">
        <h3 className="text-2xl mt-4">{project.title}</h3>
        <div className="text-sm">{project.tech.join(", ")}</div>
        <p className="mt-3">{project.description}</p>
      </div>

      {/* Description and Tech */}
      {/* <div className="p-3 py-5 text-white text-right bg-[#2A2B2A]"></div> */}
    </div>
  );
}
