import CertPanel from "./subcomponents/CertPanel";
import technologiesRef from "./refs/technology.ref";
import certificatesRef from "./refs/certificates.ref";
import TerminalContentHeading from "../../components/Terminal/subcomponents/TerminalContentHeading";
import useMediaQuery from "../../hooks/useMediaQuery";
import { DecorativeTitlebar } from "../../components/Terminal/TerminalTitleBar";
import { DesktopTechPanel, MobileTechPanel } from "./subcomponents/TechPanel";

export default function Technologies() {
  const isBreakPoint = useMediaQuery(800);

  const mobileView = (
    <section
      id="tech"
      /* headerTitle="" */ className={`w-full flex flex-col bg-[#274468]`}
    >
      <DecorativeTitlebar customLocation="~/Tech" link="/#tech" />
      <div className={`grow flex flex-col rounded-b-lg overflow-hidden `}>
        {Object.keys(technologiesRef).map((techKey, i) => (
          <MobileTechPanel
            key={techKey}
            panelIndex={i}
            techList={technologiesRef[techKey]}
            techKey={techKey}
            mobile={isBreakPoint}
          />
        ))}
      </div>
      <h2 className="text-white text-center text-2xl mt-12 mb-6">{`Certificates I've Achieved`}</h2>
      <CertPanel certList={certificatesRef} />
      {/*
      <TerminalContentHeading className="my-8">
        {"Certifcates I Have Achieved"}
      </TerminalContentHeading>
      <CertPanel certList={certificatesRef} /> */}
    </section>
  );

  const desktopView = (
    <section
      id="tech"
      /* headerTitle="" */ className="h-full w-fit flex flex-col max-w-[1600px] mx-auto "
    >
      <TerminalContentHeading>
        Technologies and Services I Work With
      </TerminalContentHeading>
      <div className="w-full px-4">
        <div
          className={`w-fit mx-auto bg-white text-black rounded-xl drop-shadow-md overflow-hidden mb-4`}
        >
          {Object.keys(technologiesRef).map((techKey) => (
            <DesktopTechPanel
              key={techKey}
              techList={technologiesRef[techKey]}
              techKey={techKey}
              mobile={isBreakPoint}
            />
          ))}
        </div>
      </div>
      <TerminalContentHeading className="my-8">
        {"Certifcates I Have Achieved"}
      </TerminalContentHeading>
      <CertPanel certList={certificatesRef} />
    </section>
  );

  if (isBreakPoint) {
    return mobileView;
  }

  return isBreakPoint ? mobileView : desktopView;
}
