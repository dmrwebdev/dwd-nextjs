import Head from "next/head";
import Main from "../components/Main/Main";
import styles from "../styles/Home.module.css";
import AboutMe from "../views/AboutMe/AboutMe";
import Intro from "../views/Intro/Intro";
import Projects from "../views/Projects/Projects";
import Technologies from "../views/Technologies/Technologies";

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>Develop With Derek</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page_wrapper h-full relative pb-20 sm:px-2 ">
        <Intro />
        <Main>
          <Projects />
          <AboutMe />
          <Technologies />
        </Main>
      </div>
    </div>
  );
}
