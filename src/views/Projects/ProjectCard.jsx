import Image from "next/image";
import Link from "next/link";
import { link as linkIcon, github, chevronRightCircle } from "@assets";
export default function ProjectCard({ project, incrementProjectIndex, decrementProjectIndex, mobile }) {
  return (
    <div
      className="
      flex flex-col grow 
      p-2 pt-4 space-y-4
      sm:w-full sm:h-full sm:max-w-[450px] sm:max-h-[450px]
    sm:bg-[#182a40] sm:rounded-2xl sm:overflow-hidden"
    >
      <div className="sm:min-h-[175px] sm:flex sm:justify-between">
        <div
          className="
          mx-auto max-w-[450px] w-full max-h-[200px] 
          flex grow items-center aspect-square rounded-xl relative
          overflow-hidden drop-shadow-2xl border
          sm:max-w-[300px] sm:rounded-2xl sm:drop-shadow-xl
          "
        >
          {/* TODO: Needs to account for 0 length array */}
          <Image
            src={project.previewImg}
            alt={project.previewAlt}
            className="h-full"
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          />
        </div>
        {/*  <div className="flex flex-col justify-between items-center ml-6 my-4 drop-shadow-4xl">
          <Link href={project.projectURL}>
            <a className="w-[50px]">
              <Image src={linkIcon} alt="Project Link" layout="responsive" className="drop-shadow-lg" />
            </a>
          </Link>
          <Link href={project.githubURL}>
            <a className="w-[50px]">
              <Image src={github} alt="Github Link" layout="responsive" className="drop-shadow-lg" />
            </a>
          </Link>
        </div> */}
      </div>
      <div
        className="
    bg-black/70 sm:bg-[#101d2c]/60 p-4 rounded-md drop-shadow-xl flex flex-col grow"
      >
        {project.tech && (
          <div className="flex items-center space-x-3">
            {project.tech.map((tech, i) => {
              return (
                <div key={i} className="rounded-md bg-white text-black p-1.5">
                  <div className="*relative h-[25px] sm:h-[20px] flex">
                    {/* Using image tag due to the way next js handles images, styling the svg's to respect their aspect ratio doesn't seem to work */}
                    {/* eslint-disable-next-line */}
                    <img src={tech.src} /*  alt="temp" */ />
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="flex">
          <h3 className="text-3xl sm:text-xl mt-4 mb-2 pb-2 border-b-2 drop-shadow-2xl">{project.title}</h3>
        </div>
        <p className="text-sm sm:line-clamp-3 sm:mt-3 leading-relaxed ">{project.description}</p>
        {mobile && (
          <ControlBar incrementProjectIndex={incrementProjectIndex} decrementProjectIndex={decrementProjectIndex} />
        )}
      </div>
    </div>
  );
}

function ControlBar({ incrementProjectIndex, decrementProjectIndex }) {
  return (
    <div className="max-w-[330px] w-full mx-auto flex justify-between m-4 self-end">
      <div className="max-w-[60px] rotate-180 text-[0px] " onClick={() => decrementProjectIndex()}>
        <Image src={chevronRightCircle} alt="A right arrow in a circle" className="drop-shadow-lg" />
      </div>

      <div className="max-w-[60px] text-[0px]" onClick={() => incrementProjectIndex()}>
        <Image src={chevronRightCircle} alt="A right arrow in a circle" className="drop-shadow-lg" />
      </div>
    </div>
  );
}
