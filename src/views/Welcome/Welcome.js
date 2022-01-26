import Image from "next/image";
import codeBG from "../../assets/welcome-bg.jpg";
import styles from "./Welcome.module.scss";
import ContactBar from "../../components/ContactBar/ContactBar";
import PixelMe from "../../components/PixelMe/PixelMe";
import { useEffect, useRef, useState } from "react";

const wordList = [
  "full stack engineer",
  "developer",
  "computer nerd",
  "fisherman",
];

export default function Welcome({ introOver, prevScrollPos, className }) {
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);

  const variableWordRef = useRef(null);

  function resetAnimation() {}

  useEffect(() => {
    const changeAfterDuration = () => {
      setTimeout(() => {
        if (selectedWordIndex === wordList.length - 1) {
          setSelectedWordIndex(0);
        } else {
          setSelectedWordIndex((prev) => prev + 1);
        }
      }, 4000);
    };

    changeAfterDuration();

    return () => clearTimeout(changeAfterDuration);
  }, [selectedWordIndex]);

  const fixedBGContainer = (
    <div className="h-full w-full absolute">
      <div className="h-full w-full relative z-[0]">
        <div
          className={`h-full w-full ${styles.fixed_bg_shade} absolute z-[1]`}
        />
        <Image
          src={codeBG}
          alt="Laptop with minified code on the display"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
    </div>
  );

  const variableWordBracket = (
    <span
      ref={variableWordRef}
      className={`${styles.content} mx-2 min-w-[175px]`}
    >
      <span className={`${styles.content__container__text} mx-2 `}>
        {wordList[selectedWordIndex]}
      </span>
    </span>
  );

  const heroGroup = (
    <div
      className={`${styles.hello_container} h-full flex flex-col justify-center items-center text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl px-6 b-8 relative z-10`}
    >
      <div className={` flex justify-center items-center`}>
        {/* ${styles.anim_reveal} */}
        <h1 className="flex flex-col flex-wrap  drop-shadow-md ">
          <span className={`  text-2xl md:text-6xl`}>Hello, my names</span>
          <b>Derek Robertson!</b>
        </h1>
        <span className={`${styles.handwave_anim} ml-4`}>👋</span>
      </div>
      <p className="text-lg md:text-3xl mt-4 text-center relative">
        {`I'm a`}
        {variableWordBracket}
        {`who loves to build websites and other neat things.`}
      </p>
      <div className="mt-7  w-full">
        <ContactBar />
      </div>
    </div>
    /*        */
  );

  return (
    <section
      className={`${styles.intro} h-full relative bg-[#12263A] overflow-hidden`}
    >
      {/*  <div className={styles.wave} /> */}
      {/*     {tvEffect} */}
      {fixedBGContainer}
      {heroGroup}
      <div
        className={`absolute bottom-[-50px] w-[230px] h-[230px] ${
          prevScrollPos > 0 ? styles.pixelMe_anim_over : styles.pixel_img_anim
        }`}
      >
        <PixelMe />
      </div>
      {/*       <div className={`${styles.angles} `}>
        <div />
        <div />
      </div> */}
    </section>
  );
}
