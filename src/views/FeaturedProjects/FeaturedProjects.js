import projectsList from "../../refs/projectsList";
import linkIcon from "../../assets/project_icons/link.svg";
import githubIcon from "../../assets/project_icons/github.svg";
import Section from "../../components/Section/Section";
import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.scss";
import { useState } from "react";

export default function FeaturedProjects() {
  return (
    <section /* headerTitle="Projects" className="px-0 py-4 " */>
      <h2>A Few Featured Projects</h2>
      <div className="mx-auto flex flex-wrap justify-center space-y-4">
        {projectsList.map((project, i) =>
          i < 3 ? <ProjectTile project={project} key={project.title} /> : null
        )}
      </div>
    </section>
  );
}

function ProjectTile({ project }) {
  const [imageFlipped, setImageFlipped] = useState(false);

  /*   function handleEnter(e) {
    console.log("firing");
    console.log(e);
  } */

  return (
    <div
      className="w-full bg-[#182a40] rounded" /* max-w-[725px] m-5 */
      key={project.projectURL}
    >
      {/*  Project Links */}
      <div className="flex justify-between items-center py-3 px-4 bg-[#1098F7] ">
        {/*  justify-end rounded-t space-x-8  */}
        <h3 className="text-white text-xl">{project.title}</h3>
        <div className="flex space-x-4">
          <Link href={project.projectURL}>
            <a className="flex items-center">
              <Image src={linkIcon} alt="Project Link" height={40} width={40} />
            </a>
          </Link>
          <Link href={project.githubURL}>
            <a className="flex items-center">
              <Image src={githubIcon} alt="Github Link" />
            </a>
          </Link>
        </div>
      </div>

      {/* Wrapper */}
      <div>
        <div
          className="flex relative"
          onClick={() => setImageFlipped((prev) => !prev)}
          onMouseLeave={() => setImageFlipped(false)}
        >
          <div
            className={`${styles.preview_img} ${
              imageFlipped ? styles.test : ""
            } w-full h-[250px] relative z-10`}
          >
            <Image
              src={project.previewImg}
              alt={project.previewAlt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="h-full w-full absolute z-0 flex items-center justify-center p-4 text-center">
            <p className="text-white">{project.description}</p>
          </div>
        </div>

        {/* Description and Tech */}
        <div className="p-3 text-white text-right bg-[#2A2B2A]">
          {/*          <div className="mb-1">
            <p className="text-lg">{project.description}</p>
          </div> */}
          <div>{project.tech.join(", ")}</div>
        </div>
      </div>
    </div>
  );
}
