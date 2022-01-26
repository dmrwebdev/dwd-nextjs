import Image from "next/image";
import Section from "../../components/Section/Section";
import pixelMeTBG from "../../assets/pixel-me-tbg.png";
import styles from "./AboutMe.module.scss";
import binary from "../../assets/binary.jpg";
import Terminal from "../../components/Terminal/Terminal";
import useWindowScrollPos from "../../hooks/useWindowScrollPos";
import useDebounce from "../../hooks/useDebounce";

export default function AboutMe() {
  const scrollPosition = useWindowScrollPos();
  const debouncedScrollPos = useDebounce(scrollPosition, 1000);

  return (
    <section className="h-full text-white relative overflow-auto">
      {/* <div className=""> */}
      {/*       <Terminal
        typeWriterText={[]}
        handleTypeAnimOver={() => null}
        className={"mx-auto"}
      > */}
      <h1>derek@DMR-DESKTOP:~/ cat aboutMe</h1>
      <div className="w-full p-1 mx-auto m-4 lg:mx-0 rounded-lg  md:flex items-center">
        {/* sm: */}
        <div className="w-full p-1 bg-[#08F7FE] rounded-lg max-w-[275px] max-h-[275px] mx-auto">
          <div className="p-1 bg-[#FE53BB] rounded-lg">
            <div className=" bg-[#ffffff] rounded-lg overflow-hidden ">
              {/* <div className="relative overflow-hidden z-[300]">
                    <div className={`${styles.image_bg} fixed`} />
                  </div> */}
              <div
                className={` relative w-full h-full rounded-lg overflow-hidden`}
              >
                <div className={`absolute `}>
                  <div className="relative h-screen w-screen">
                    <Image
                      src={binary}
                      alt="Binary numbers on white background"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      quality={100}
                    />
                  </div>
                </div>
                <div
                  className={` ${
                    scrollPosition > 0 ? styles.me_img_anim : ""
                  }  h-full w-full relative `}
                >
                  <Image
                    src={pixelMeTBG}
                    alt="Pixelized Derek Robertson"
                    quality={100}
                    layout="responsive"
                    objectPosition="bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-0 sm:p-6">
          <div className="rounded">
            <p className="sm:text-lg p-2">
              {`Hello and welcome to my website! The name's Derek Robertson, a
              former electric motor mechanic of over 10 years recently turned
              web developer. Interested in computers and how those magic boxes
              work from a young age, I've recently decided to try my hand making
              a living doing something I love- developing!
              \n
              Today my passion is building pixel-perfect websites and functional applications using
              the latest modern tech stacks and production methods. As an ardent
              student of the web, there's few things I've found more satisfying
              than building a good looking and (most importantly) functional
              product. My goal now is to bring that same passion to your
              projects. Feel free to explore my portfolio, and see for yourself
              if you think I'd make a great fit for your team!`}
            </p>
          </div>
        </div>
      </div>
      {/*       </Terminal> */}
      {/*  </div> */}
    </section>
  );
}
