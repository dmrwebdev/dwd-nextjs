import bootstrap from "../../../assets/tech/bootstrap.svg";
import css from "../../../assets/tech/css3.svg";
import digitalOcean from "../../../assets/tech/digitalocean.svg";
import git from "../../../assets/tech/git.svg";
import html from "../../../assets/tech/html5.svg";
import javascript from "../../../assets/tech/javascript.svg";
/* import jquery from '../../assets/tech/jquery.svg'; */
import nginx from "../../../assets/tech/nginx.svg";
import nodejs from "../../../assets/tech/nodejs.svg";
import react from "../../../assets/tech/react.svg";
import sass from "../../../assets/tech/sass.svg";
import seqeulize from "../../../assets/tech/sequelize.svg";
import mysql from "../../../assets/tech/mysql.svg";
import nextjs from "../../../assets/tech/nextJs.svg";
import docker from "../../../assets/tech/docker.svg";
import express from "../../../assets/tech/express.webp";
import tailwind from "../../../assets/tech/tailwindcss.svg";
import apache from "../../../assets/tech/apache.svg";
import windows from "../../../assets/tech/windows.svg";
import apple from "../../../assets/tech/apple.svg";
import ubuntu from "../../../assets/tech/ubuntu.svg";
import wsl2 from "../../../assets/tech/wsl.png";
import python from "../../../assets/tech/python.svg";
import mongoDB from "../../../assets/tech/mongodb.svg";
import mongoose from "../../../assets/tech/mongoose.png";
import pug from "../../../assets/tech/pug.svg";

const technologiesRef = {
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
    /*     {
      title: "Python",
      image: python,
    }, */
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
    /*     {
      title: `Windows Subsystem Linux (WSL2)`,
      image: wsl2,
    }, */
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

export default technologiesRef;
