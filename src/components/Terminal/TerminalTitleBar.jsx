import Image from "next/image";
import Link from "next/link";
import { exit, maximize, minimize, linux, plus } from "@assets";
import { APP_SECTIONS } from "@app_constants";
import { useRouter } from "next/router";
import variables from "@styles/variables.module.scss";

// TODO Should this be TitleBar or TitleBars?
export default function TerminalTitleBar({ currentDirectory, handleTypeAnimOver, customLocation }) {
  const activePaths = [...APP_SECTIONS.values()].filter((section) => section.active);
  const router = useRouter();

  const wcImgStyle = `${customLocation ? "h-[12px] w-[12px]" : "h-[10px] w-[10px]"} flex justify-center items-center`;
  const windowControls = (
    <div className="w-full max-w-[75px] flex justify-between items-center *ml-14">
      <div className={wcImgStyle}>
        <Image src={minimize} alt="fake minimize" />
      </div>
      <div className={wcImgStyle}>
        <Image src={maximize} alt="fake maximize" />
      </div>
      <div className={wcImgStyle} onClick={() => handleTypeAnimOver()}>
        <Image src={exit} alt="fake close" />
      </div>
    </div>
  );

  function terminalTab(directory) {
    const path = directory.terminalPath || directory.path;

    const activeTabClass =
      (currentDirectory?.path === path || router.asPath === path) &&
      `bg-[${variables.terminalBgColor}] drop-shadow-2xl scroll-mt-2`;
    return (
      <Link href={path}>
        <a
          className={`p-[5px] rounded-t-lg flex items-center text-xs *mt-2 grow max-w-[240px] ${activeTabClass}
        `}
          id={path.split("/#")[1]}
        >
          <div className={`px-[17px] pl-2 w-[15px] h-[15px] relative `}>
            <Image src={linux} alt="Tux the Penguin" layout="fill" objectFit="contain" />
          </div>
          <div className="text-white whitespace-nowrap overflow-hidden font-['Segoe_UI']">
            <span className="text-base">{`~/${customLocation?.name || directory.name}`}</span>
          </div>
          <div className="p-[5px] pl-[10px]  ml-auto">
            <div
              className="h-[10px] w-[10px]
          
          *h-[8px] *w-[8px] flex justify-center items-center"
            >
              <Image src={exit} alt={"close"} />
            </div>
          </div>
          {/* mobile <div className="ml-2 h-[63%] bg-[#4b4b4b] w-[1px] " /> */}
          {currentDirectory !== directory && <div className="ml-2 h-[63%] bg-[#4b4b4b] w-[1px] " />}
        </a>
      </Link>
    );
  }

  return (
    <div
      className={
        "w-full h-[40px] flex justify-between pl-[7px] pr-[18px] bg-terminal-titleBar rounded-t-md " +
        `${!customLocation && "pt-2"}`
      }
    >
      <div className="w-full flex *items-center *flex-wrap">
        {customLocation ? terminalTab(customLocation) : activePaths.map((directory) => terminalTab(directory))}
      </div>
      {windowControls}
    </div>
  );
}
