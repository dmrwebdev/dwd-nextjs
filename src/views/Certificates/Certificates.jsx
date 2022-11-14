import Image from "next/image";
import { useMediaQuery } from "@hooks";
import { APP_SECTIONS, mdMediaQuery } from "@pages/app_constants";
import { TerminalLocationLine, TerminalSectionHeading, TerminalTitleBar } from "@components";
import { CERTIFICATES } from "./Certificates.constants";

export default function Certificates() {
  const [mdViewport] = useMediaQuery(mdMediaQuery);

  return (
    <section className="h-screen w-full bg-[rgb(12,12,12)]">
      {!mdViewport ? (
        <>
          <TerminalTitleBar customLocation={APP_SECTIONS.get("/#certs")} />
          <TerminalLocationLine directory={"~/certs"} className={"mb-2"} />
        </>
      ) : (
        <>
          <TerminalLocationLine directory={"~/certs"} className={"mb-2"} />
          <TerminalSectionHeading>Certifications</TerminalSectionHeading>
        </>
      )}

      <ol className="*h-full *bg-[#0c0c0c] text-[#cccccc] p-6 pt-8 space-y-8">
        {CERTIFICATES.map((cert, i) => (
          <div key={cert.title} className="flex *justify-between *items-center">
            <div className="text-teal-400 mr-2 min-w-fit">{`${i + 1} )`}</div>
            <div className="w-full flex">
              <div className="space-y-1">
                <a className="flex" href={cert.url}>
                  <span className="underline text-teal-100">{cert.title}</span>
                </a>
                <p className="text-sm">
                  <span className="text-teal-500 mr-2">{"//"}</span>
                  {cert.issuer}
                </p>
                <p className="text-sm">
                  <span className="text-teal-500 mr-2">{"//"}</span>
                  {cert.issued}
                </p>
              </div>
              <div className="ml-auto max-w-[50px]">
                <Image src={cert.cert} alt={cert.title} />
              </div>
            </div>
          </div>
        ))}
      </ol>
    </section>
  );
}
