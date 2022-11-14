import Image from "next/image";
import { useMediaQuery } from "@hooks";
import { APP_SECTIONS, mdMediaQuery } from "@pages/app_constants";
import { TerminalLocationLine, TerminalSectionHeading, TerminalTitleBar } from "@components";
import { TECH_LIST } from "./Technologies.constants";
import Certificates from "@views/Certificates";

export default function Technologies() {
  const [mdLayout] = useMediaQuery(mdMediaQuery);

  const techCards = TECH_LIST.map((tech, i) => {
    return (
      <div key={i} className="w-full snap-start max-w-[150px] h-fit bg-white flex items-center p-2 *m-2 rounded-md">
        <div className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] relative mr-3">
          <Image src={tech.image.src} layout="fill" objectFit="contain" alt="Tech icon" /> {/* TODO: Dynamic alt */}
        </div>
        <p className="text-black font-['Oxygen'] text-center">{tech.title}</p>
      </div>
    );
  });

  return (
    <section
      id="tech"
      className="min-h-screen flex flex-col w-full md:max-w-[1600px] md:mx-auto md:h-full *md:w-fit bg-[rgb(12,12,12)]" /*  */
    >
      {!mdLayout ? (
        <>
          <TerminalTitleBar customLocation={APP_SECTIONS.get("/#tech")} />
          <TerminalLocationLine directory={"~/tech"} className={"mb-2"} />
        </>
      ) : (
        <>
          <TerminalLocationLine directory={"~/tech"} className={"mb-2"} />
          <TerminalSectionHeading>Technologies and Services I Work With</TerminalSectionHeading>
        </>
      )}

      <div
        className="
        m-2 mt-4 mb-8
        grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8
        justify-items-center gap-2
        "
      >
        {techCards}
      </div>
      {mdLayout && (
        <>
          <Certificates />
        </>
      )}
    </section>
  );
}
