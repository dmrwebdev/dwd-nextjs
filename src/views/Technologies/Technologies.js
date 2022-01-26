import { useEffect, useRef, useState } from "react";
import Section from "../../components/Section/Section";

import bootstrap from "../../assets/tech/bootstrap.svg";
import css from "../../assets/tech/css3.svg";
import digitalOcean from "../../assets/tech/digitalocean.svg";
import git from "../../assets/tech/git.svg";
import html from "../../assets/tech/html5.svg";
import javascript from "../../assets/tech/javascript.svg";
/* import jquery from '../../assets/tech/jquery.svg'; */
import nginx from "../../assets/tech/nginx.svg";
import nodejs from "../../assets/tech/nodejs.svg";
import react from "../../assets/tech/react.svg";
import sass from "../../assets/tech/sass.svg";
import seqeulize from "../../assets/tech/sequelize.svg";
import mysql from "../../assets/tech/mysql.svg";
import nextjs from "../../assets/tech/nextJs.svg";
import docker from "../../assets/tech/docker.svg";
import express from "../../assets/tech/express.webp";
import tailwind from "../../assets/tech/tailwindcss.svg";
import apache from "../../assets/tech/apache.svg";
import windows from "../../assets/tech/windows.svg";
import apple from "../../assets/tech/apple.svg";
import ubuntu from "../../assets/tech/ubuntu.svg";
import wsl2 from "../../assets/tech/wsl.png";
import python from "../../assets/tech/python.svg";
import mongoDB from "../../assets/tech/mongodb.svg";
import mongoose from "../../assets/tech/mongoose.png";
import pug from "../../assets/tech/pug.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Technologies() {
  return (
    <section /* headerTitle="" */ className="relative">
      <h1>Technologies and Services I Work With</h1>
      <div className="bg-white border rounded-xl drop-shadow-md overflow-hidden ">
        {Object.keys(sortedTechTiles).map((techKey) => (
          <TechPanel
            techKey={techKey}
            techList={sortedTechTiles[techKey]}
            key={techKey}
          >
            {/* {techList(sortedTechTiles, techKey)} */}
          </TechPanel>
        ))}
      </div>
    </section>
  );
}

function TechPanel({ techKey, techList, children }) {
  const [panelOpen, setPanelOpen] = useState(true);
  const [panelHeight, setPanelHeight] = useState(null);
  const techPanelRef = useRef(null);

  useEffect(() => {
    if (techPanelRef.current) {
      console.log(techPanelRef.current.clientHeight);
      setPanelHeight(techPanelRef.current.clientHeight);
    }
  }, [techPanelRef]);

  const techTiles = (techList, techKey) => (
    <div className="flex items-center overflow-auto">
      {techList[techKey].map((tech) => (
        <div className="m-4 w-[150px] " key={tech.title}>
          <div className="w-[100px] h-[100px] relative mx-auto">
            <Image
              src={tech.image}
              alt={tech.alt}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="text-center">
            <p>{tech.title}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const listFormat = (techList) => (
    <div
      className="flex flex-col items-start overflow-auto transition-[height] duration-500"
      style={{
        height: panelHeight ? (panelOpen && panelHeight ? panelHeight : 0) : "",
      }}
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
  );

  return (
    <div key={techKey} className="mx-auto overflow-hidden">
      <div
        className="flex items-center justify-center bg-slate-300 h-[40px] text-lg relative border-b"
        onClick={() => setPanelOpen((prev) => !prev)}
      >
        <h3 className="">{techKey}</h3>
        <div className="absolute right-0 mr-4">
          <FontAwesomeIcon icon={panelOpen ? faChevronDown : faChevronUp} />
        </div>
      </div>
      {listFormat(techList)}
    </div>
  );
}

const sortedTechTiles = {
  Languages: [
    {
      title: "HTML",
      image: html,
    },
    {
      title: "CSS",
      image: css,
    },
    {
      title: "Javascript",
      image: javascript,
    },
    {
      title: "Sass",
      image: sass,
    },
    {
      title: "Python",
      image: python,
    },
  ],
  "Frameworks/Runtimes": [
    {
      title: "NodeJS",
      image: nodejs,
    },
    {
      title: "React",
      image: react,
    },
    {
      title: "NextJs",
      image: nextjs,
    },
    {
      title: "ExpressJS",
      image: express,
    },
    {
      title: "Tailwind",
      image: tailwind,
    },
    {
      title: "Bootstrap",
      image: bootstrap,
    },
  ],

  "Databases and ORM/ODMs": [
    {
      title: "Mysql",
      image: mysql,
    },
    {
      title: "MongoDB",
      image: mongoDB,
    },
    {
      title: "Sequelize",
      image: seqeulize,
    },
    {
      title: "Mongoose",
      image: mongoose,
    },
  ],
  "Web Servers And Other Tech": [
    {
      title: "Nginx",
      image: nginx,
    },
    {
      title: "Apache",
      image: apache,
    },
    {
      title: "Git",
      image: git,
    },
    {
      title: "Digital Ocean",
      image: digitalOcean,
    },
  ],
  /*  "Misc/Services": [], */
  "Operating Systems": [
    {
      title: "Windows",
      image: windows,
    },
    {
      title: `Windows Subsystem Linux (WSL2)`,
      image: wsl2,
    },
    {
      title: "Ubuntu",
      image: ubuntu,
    },
    {
      title: "Mac",
      image: apple,
    },
  ],
};
