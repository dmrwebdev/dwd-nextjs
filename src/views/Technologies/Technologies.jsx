import Image from "next/image";
import { useMediaQuery } from "@hooks";
import { APP_SECTIONS, mdMediaQuery } from "@pages/app_constants";
import { TerminalContentHeading, TerminalTitleBar } from "@components";
import { TECH_LIST } from "./Technologies.constants";
import Certificates from "@views/Certificates";

export default function Technologies() {
  const [isBreakPoint] = useMediaQuery(mdMediaQuery);

  const techCards = TECH_LIST.map((tech, i) => {
    return (
      <div key={i} className="w-full snap-start max-w-[150px] h-fit bg-white flex items-center p-2 *m-2 rounded-md">
        <div className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] relative mr-3">
          <Image src={tech.image.src} layout="fill" objectFit="contain" alt="Tech icon" /> {/* TODO: Dynamic alt */}
        </div>
        <p className="text-sm text-center font-bold">{tech.title}</p>
      </div>
    );
  });

  const header = !isBreakPoint ? (
    <TerminalTitleBar customLocation={APP_SECTIONS.get("/#tech")} />
  ) : (
    <TerminalContentHeading>
      <span className="text-teal-700">{"// "}</span>Technologies and Services I Work With
    </TerminalContentHeading>
  );

  return (
    <section
      id="tech"
      className="min-h-screen flex flex-col w-full md:max-w-[1600px] md:mx-auto md:h-full *md:w-fit bg-[rgb(12,12,12)]" /*  */
    >
      {header}
      <div
        className="
        m-2 mt-4
        grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 
        justify-items-center gap-2
        "
      >
        {techCards}
      </div>
      {isBreakPoint && (
        <>
          <TerminalContentHeading className="my-8">
            <span className="text-teal-700">{"// "}</span>Certifications
          </TerminalContentHeading>
          <Certificates />
        </>
      )}
    </section>
  );
}
