import { useEffect, useState } from "react";
import Image from "next/image";
import { useWindowEffectsContext } from "@context/WindowEffectsContext";
import { ContactBar, TerminalLocationLine, TerminalTitleBar } from "@components";
import { useMediaQuery, useIntersect } from "@hooks";
import { APP_SECTIONS, mdMediaQuery } from "@pages/app_constants";
import { binary, pixelMe } from "@assets";
import { styles, ABOUT_ME_TEXT, SHORTENED_ABOUT_ME_TEXT } from "./index";

export default function AboutMe() {
  const [imageIsAnimating, setImageIsAnimating] = useState(true);

  const { introImgOver } = useWindowEffectsContext();
  const [meImgRef, entry] = useIntersect({ threshold: "0" });
  const [mdViewport] = useMediaQuery(mdMediaQuery);

  const appSection = APP_SECTIONS.get("/#about-me");

  // Set image as animating if section is scrolled into view
  useEffect(() => {
    if (entry.isIntersecting) {
      setImageIsAnimating(true);
    } else {
      setImageIsAnimating(false);
    }
  }, [entry]);

  const aboutMeText = mdViewport ? ABOUT_ME_TEXT : SHORTENED_ABOUT_ME_TEXT;

  const aboutMe = (
    <section
      id={`${!mdViewport ? "about-me" : ""}`}
      className="min-h-screen md:min-h-0 w-full max-w-[1600px] mx-auto bg-[#0c0c0c] text-[#cccccc] font-['hack']"
      ref={meImgRef}
    >
      {/* --- Show single titlebar tab if small layout --- */}
      {!mdViewport && <TerminalTitleBar customLocation={appSection} />}
      <TerminalLocationLine directory={`~/${appSection.name}`} />
      <div className=" w-full p-4 md:p-6">
        <div className="mx-auto max-w-[400px] w-full m-2 border-4 border-[#003153] rounded-3xl mb-6">
          {/* --- Binary Background --- */}
          <div className="rounded-3xl overflow-hidden max-h-[200px] border-4 border-[#08F7FE] relative">
            <Image src={binary} alt="Binary numbers" layout="responsive" />
            {/* --- Pixel Me Img --- */}
            <div
              className={`${
                introImgOver && imageIsAnimating ? styles.me_img_anim : "opacity-0"
              } absolute bottom-0 h-full w-full`}
            >
              <Image
                src={pixelMe}
                alt="Pixelized Derek Robertson"
                unoptimized
                layout="fill"
                objectFit="contain"
                objectPosition="bottom"
              />
            </div>
          </div>
        </div>
        {/* --- About Me Text --- */}
        <p className="p-3 sm:p-0 pt-0 text-sm lg:text-base">{aboutMeText}</p>
      </div>
      {/* --- Show ContactBar if large viewport */}
      {mdViewport && <ContactBar />}
    </section>
  );

  return aboutMe;
}
