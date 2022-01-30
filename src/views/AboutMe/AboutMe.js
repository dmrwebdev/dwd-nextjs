import Image from "next/image";
import Section from "../../components/Section/Section";
import pixelMeTBG from "../../assets/pixel-me-tbg.png";
import styles from "./AboutMe.module.scss";
import binary from "../../assets/binary.jpg";
import Terminal from "../../components/Terminal/Terminal";
import useWindowScrollPos from "../../hooks/useWindowScrollPos";
import useDebounce from "../../hooks/useDebounce";
import Contactbar from "../../components/ContactBar/ContactBar";
import useMediaQuery from "../../hooks/useMediaQuery";
import useIntersect from "../../hooks/useIntersect";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

export default function AboutMe() {
  const scrollPosition = useWindowScrollPos();
  const debouncedScrollPos = useDebounce(scrollPosition, 1000);
  const [imageIsAnimating, setImageIsAnimating] = useState(true);

  const { introMeImgOver } = useAppContext();

  const [meImgRef, entry] = useIntersect({ threshold: "0" });

  useEffect(() => {
    console.log(entry);
    if (
      entry.isIntersecting /* && !terminalAnimOver && router.asPath === "/" */
    ) {
      setImageIsAnimating(true);
    } else {
      setImageIsAnimating(false);
    }
  }, [entry]);

  const meImg = (
    <div className="w-full p-1 bg-[#003153] rounded-full max-w-[275px] max-h-[275px] m-4 mb-8 mx-auto">
      <div className={`${styles.img_box_shadow} p-1 bg-[#08F7FE] rounded-full`}>
        <div className=" bg-[#ffffff] rounded-full overflow-hidden ">
          <div className={` relative w-full h-full rounded-lg overflow-hidden`}>
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
                introMeImgOver && imageIsAnimating
                  ? styles.me_img_anim
                  : "opacity-0"
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
  );

  const mobileView = (
    <section
      id="about"
      className=" h-screen w-full max-w-[1600px] mx-auto p-4"
      ref={meImgRef}
    >
      {/* <div className="w-full p-1 mx-auto m-4 lg:mx-0 rounded-lg  md:flex items-center"> */}
      <div className="flex flex-col w-full">
        {meImg}
        <p className=" ">{mobileAboutMeText}</p>
      </div>
      {/* </div> */}
    </section>
  );

  const desktopView = (
    <section
      id="about"
      className="w-full max-w-[1600px] mx-auto p-6"
      ref={meImgRef}
    >
      {/* <div className="w-full p-1 mx-auto m-4 lg:mx-0 rounded-lg  md:flex items-center"> */}
      <div className="mb-4">
        <span className="text-terminal-location">derek@DMR-DESKTOP:</span>
        <span className="text-terminal-tilde">~/aboutMe</span>$ cat aboutMe.txt
      </div>
      <h1 className="text-center text-2xl mt-4 mb-2">More About Me</h1>
      <div className="flex flex-col w-full">
        {meImg}
        <div className="">
          <div className="">
            <p className=" ">{aboutMeText}</p>
            <Contactbar />
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );

  const isBreakpoint = useMediaQuery(800);

  if (isBreakpoint) {
    return mobileView;
  }

  return desktopView;
}

const aboutMeText = `Still curious huh? Then let me tell you more about myself! As you know my names Derek Robertson, and I'm a full stack engineer hailing from the SF bay area. But it wasn't always that way!

As a hyper and inquisitive child, I was always taking things apart and putting them back together. Starting with simple mechanical devices, I slowly graduated to electronics and just couldn't stop learning about what makes things tick. But with my first introduction to a Compaq PC with Windows 98 at the age 8, my world changed forever. It was like this magical box was alive- I could do anything on it! From then on my passion for technology and how it worked only grew- starting with tweaking settings and making custom themes, in a few years I was building my own custom PC to play the amazing new game Halo on.

Despite my passion for computers however, I had always kept it as just a hobby. Fresh out of high school, I decided to get to work right away and utilize my existing mechanical skills and electrical knowledge and pursue a career as an Electric Motor Mechanic near home in Vallejo. For over a decade I swung hammers and turned wrenches, only occasionally blowing up a 460 volt motor. Mechanic by day and gamer by night, my tech passion was kept solely as a hobby- until one fateful day. As the most tech literate person in the shop, I eventually ended up as the Systems Administrator in addition to my role as a Mechanic. Realizing that paper reports in a dirty mechanic shop in the 21st century doesn't work very well, I volunteered to modernize our workflow by setting up laptop work stations connected through cloud sharing, and started developing an electronic replacement for the paper repair report that had been in use in that shop for over 70 years. Not quite a true programmer yet, I ended up using the most fitting application I knew- Microsoft Excel. Yes, Excel. Many macros and much Visual Basic later and I had developed a truly interactive excel spread sheet, which is still in use there today (you can view it in my projects section!).

But it wouldn't be until a few years later that I would realize my true passion. After spending many hours tweaking the config files for a game rather than playing it, a friend and fellow developer asked me something life changing- "You know I've seen that excel sheet, if you enjoy spending so much time editing files and tweaking things, why don't you try coding?" And at that moment it clicked- if I could do that with excel, what can I do with a real programming language? And it's been game over for me since then. Thanks to FreeCodeCamp, I soon learned the magical powers of HTML, CSS, and Javascript. Suddenly I didn't need physical materials and money to build neat new things, I could do it all with a little bit of text and logic! With each challenge came a solution and success, which only furthered my drive. Ok so I built a website, how do I host it? Ok I have a droplet now, what other cool things can I do with it? The possibilities were limitless, which lead me to where I am today- living my dream as a developer!

Constantly in the pursuit of expanding my knowledge and skills, I'm always open to new opportunities. If you feel like I'm someone you'd want to work with feel free to give me a shout, and let's have a chat!

`;

const mobileAboutMeText = `
  Hi I'm Derek, and welcome to my portfolio! I'm a full stack engineer hailing from the SF bail area. As a former Electric Motor Mechanic of over a decade, I found my true passion in developing and haven't been able to look back since. Today I thoroughly enjoy building responsive and user friendly websites and  applications, while constantly expanding my technical knowledge through utilization of the latest tech stacks and trends in the developing world.`;

{
  /* <section className="h-full text-white relative overflow-auto">

      <div className="w-full p-1 mx-auto m-4 lg:mx-0 rounded-lg  md:flex items-center">
        <h1>derek@DMR-DESKTOP:~/ cat aboutMe</h1>
        <div className="w-full p-1 bg-[#08F7FE] rounded-lg max-w-[275px] max-h-[275px] mx-auto">
          <div className="p-1 bg-[#FE53BB] rounded-lg">
            <div className=" bg-[#ffffff] rounded-lg overflow-hidden ">

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
    </section> */
}
