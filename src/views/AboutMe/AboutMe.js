import Image from "next/image";
import Section from "../../components/Section/Section";
import pixelMeTBG from "../../assets/pixel-me-tbg.png";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <Section headerTitle="So Who's Derek?">
      <div className="w-full pb-8 flex flex-col justify-center md:flex-row md:items-center">
        <div className="w-full p-2 bg-yellow-600 mx-auto m-4 lg:mx-0 rounded-lg sm:w-[275px] sm:h-[275px]">
          <div className="p-2 bg-yellow-400 rounded-lg">
            <div
              className={`${styles.image_bg} relative w-full h-full  bg-white `}
            >
              <Image
                src={pixelMeTBG}
                alt="Pixelized Derek Robertson"
                quality={100}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="sm:p-6">
          <div className="bg-[#f5f5f5] p-6 rounded">
            <p className="sm:text-lg">
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
    </Section>
  );
}
