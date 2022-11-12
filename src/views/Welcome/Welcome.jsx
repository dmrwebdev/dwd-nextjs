import { useEffect } from "react";
import { useWindowEffectsContext } from "@context/WindowEffectsContext";
import { useIntersect } from "@hooks";
import { PixelMe, ContactBar } from "@components";
import { styles, WordListLoop, INTRO_WORD_LIST } from "./index";

export default function Welcome() {
  const { setIntroImgActive } = useWindowEffectsContext();

  // Use intersectional observer for welcome section
  const [welcomeRef, entry] = useIntersect({
    threshold: "1",
  });

  // And animate the intro image into view with it
  useEffect(() => {
    if (entry.isIntersecting) {
      setIntroImgActive(true);
    } else {
      setIntroImgActive(false);
    }
  }, [entry, setIntroImgActive]);

  return (
    <section id={styles.welcome} className={`h-screen relative bg-[#12263A] overflow-hidden`} ref={welcomeRef}>
      <div className={`h-full flex flex-col justify-center items-center text-white  px-6 ${styles.hello_container}`}>
        <div className={"flex flex-wrap justify-center items-center sm:mb-3"}>
          <h1 className="flex items-center drop-shadow-md ">
            <div>
              <div className="text-4xl sm:text-6xl sm:mb-3">Hey there,</div>
              <div className="flex justify-between items-end">
                <span className="text-4xl sm:text-6xl">{"I'm"}</span>
                <b className="text-6xl sm:text-7xl ml-4">Derek!</b>
              </div>
            </div>
          </h1>
          <div className={`${styles.handwave_anim} text-5xl sm:text-7xl ml-4`}>👋</div>
        </div>
        <p className="max-w-[360px] md:max-w-[450px] text-lg sm:text-xl md:text-xl lg:text-2xl text-center mt-3 relative">
          {"I'm a"}
          <WordListLoop wordList={INTRO_WORD_LIST} />
          {"who loves to build websites and other neat things."}
        </p>
        <div className="w-full mt-6">
          <ContactBar />
        </div>
      </div>
      <div className={"absolute bottom-[-50px] w-[190px] h-[190px] sm:w-[230px] sm:h-[230px]"}>
        <PixelMe />
      </div>
    </section>
  );
}
