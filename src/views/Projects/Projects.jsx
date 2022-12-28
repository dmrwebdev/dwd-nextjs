import { useState } from "react";
import { smMediaQuery, mdMediaQuery, APP_SECTIONS } from "@app_constants";
import { useMediaQuery } from "@hooks";
import { TerminalLocationLine, TerminalTitleBar } from "@components";
import ProjectCard from "./ProjectCard";
import { PROJECTS_LIST } from "./Projects.constants";

export default function Projects() {
  // TODO: Refactor for pagination later
  const [projectIndex, setProjectListIndex] = useState(0);
  const [isSmBreakpoint] = useMediaQuery(smMediaQuery);
  const [isMdBreakpoint] = useMediaQuery(mdMediaQuery);

  const appSection = APP_SECTIONS.get("/#projects");

  function incrementProjectIndex() {
    if (projectIndex === PROJECTS_LIST.length - 1) {
      return setProjectListIndex(0);
    }

    return setProjectListIndex((prev) => prev + 1);
  }

  function decrementProjectIndex() {
    if (projectIndex === 0) return setProjectListIndex(PROJECTS_LIST.length - 1);

    return setProjectListIndex((prev) => prev - 1);
  }

  const multiCard = (
    <div>
      <div className="mb-2">
        <TerminalLocationLine directory={`~/${appSection.name}`} />
      </div>
      <div
        className="
        rounded-xl
      mx-auto p-2
      grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 *xl:grid-cols-4
      gap-4 justify-items-center
        sm:bg-none sm:bg-[#0e161b]
      "
      >
        {PROJECTS_LIST.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </div>
  );

  const singleCard = (
    <div className="grow h-full bg-gradient-to-br from-sky-900 to-[#182a40]">
      <ProjectCard
        project={PROJECTS_LIST[projectIndex]}
        decrementProjectIndex={decrementProjectIndex}
        incrementProjectIndex={incrementProjectIndex}
        mobile={!isSmBreakpoint}
      />
    </div>
  );

  const projectsView = (
    <section
      id="projects"
      className="
      w-full min-h-screen
      flex flex-col
      text-white
      bg-[#0c0c0c]
      "
    >
      {!isMdBreakpoint && <TerminalTitleBar customLocation={appSection} />}
      {!isSmBreakpoint ? singleCard : multiCard}
    </section>
  );
  return projectsView;
}
