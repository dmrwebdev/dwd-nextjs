import { useEffect } from "react";
import styles from "./TerminalTitleBar.module.scss";
import tux from "../../assets/tux.svg";
import Image from "next/image";
import xSVG from "../../assets/x.svg";
import minus from "../../assets/minus.svg";
import maximize from "../../assets/maximize.svg";
import Link from "next/link";

export default function TerminalTitleBar({
  currentDirectory,
  setLocationText,
  carriageReturn,
  directories,
  handleTypeAnimOver,
  locationText,
  textData,
  handlChangeDirectory,
  customLocation,
  handleAnimOver,
}) {
  useEffect(() => {
    if (textData.length === 0) {
      return;
    } else if (carriageReturn.length < 1) {
      setLocationText(`${textData[0][0]}:~`);
    } else if (carriageReturn.length === 1) {
      setLocationText(`${textData[1][0]}:~`);
    } else {
      setLocationText(`${textData[1][0]}:~/projects/react/dwd`);
    }
  }, [carriageReturn]);

  function terminalTab(directory) {
    return (
      <Link href={directory.urlPath}>
        <a
          className={`${
            currentDirectory === directory && "bg-black"
          } w-[240px] p-[5px] rounded-t flex text-xs items-center  mt-[5px]`}
          onClick={() => {
            handlChangeDirectory(directory);
            handleAnimOver();
          }}
        >
          <div
            className={`${styles.tux_container} px-[17px] w-[15px] h-[15px] relative `}
          >
            <Image
              src={tux}
              alt="Tux the Penguin"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="text-white whitespace-nowrap overflow-hidden font-['Segoe_UI']">
            {`dmr@DESKTOP: `}
            <span className="text-base">{directory.names[0]}</span>
          </div>
          <div className="p-[5px] pl-[10px]  ml-auto">
            <div className="h-[10px] w-[10px] flex justify-center items-center">
              <Image src={xSVG} alt={"close"} />
            </div>
          </div>
        </a>
      </Link>
    );
  }

  return (
    <div className=" pl-[7px] pr-[18px] flex justify-between bg-terminal-titleBar">
      {/*  <div className={styles.tab_cutout}/> */}
      {/* TODO Set smaller breakpoint to keep plus and chevron hidden */}
      <div className="flex items-center flex-wrap">
        {customLocation
          ? terminalTab(customLocation)
          : directories.map(
              (directory) => directory.showInTitleBar && terminalTab(directory)
            )}
        {/* {terminalTab} */}
        {/* <div className="w-[17px] h-[17px]">
          <Image src={plus} alt="fake plus" />
        </div>
        <div className="w-[17px] h-[17px]">
          <Image src={downChevron} alt="fake menu" />
        </div> */}
      </div>
      {/*       <div className={styles.titlebar_tab}>
        <div className={`${styles.tux_container} relative`}>
          <Image src={tux} alt="Tux the Penguin" layout="responsive" />
        </div>
        <div className={styles.tab_content}>{locationText}</div>
        <div className={styles.x_container}> X</div>
      </div> */}
      <div className="flex justify-between items-center w-full max-w-[75px] ">
        <div className="h-[12px] w-[12px] flex justify-center items-center">
          <Image src={minus} alt="fake minimize" />
        </div>
        <div className="h-[12px] w-[12px] flex justify-center items-center">
          <Image src={maximize} alt="fake maximize" />
        </div>
        <div
          className="h-[12px] w-[12px] flex justify-center items-center"
          onClick={() => handleTypeAnimOver()}
        >
          <Image src={xSVG} alt="fake close" />
        </div>
      </div>
    </div>
  );
}

export function DecorativeTitlebar({ customLocation, link, className }) {
  return (
    <div
      className={`h-[36px] pl-[7px] pr-[18px] flex justify-between bg-terminal-titleBar ${className}`}
    >
      <div className="flex items-center">
        <Link href={link}>
          <a
            className={`"bg-black w-[240px] p-[5px] rounded-t flex text-xs items-center  mt-[5px]`}
            /* onClick={() => {
                handlChangeDirectory(directory);
                handleAnimOver();
              }} */
          >
            <div
              className={`${styles.tux_container} px-[17px] w-[15px] h-[15px] relative `}
            >
              <Image
                src={tux}
                alt="Tux the Penguin"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-white whitespace-nowrap overflow-hidden font-['Segoe_UI']">
              {`dmr@DESKTOP: `}
              <span className="text-base">{customLocation}</span>
            </div>
            <div className="p-[5px] pl-[10px]  ml-auto">
              <div className="h-[10px] w-[10px] flex justify-center items-center">
                <Image src={xSVG} alt={"close"} />
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="flex justify-between items-center w-full max-w-[75px] ">
        <div className="h-[12px] w-[12px] flex justify-center items-center">
          <Image src={minus} alt="fake minimize" />
        </div>
        <div className="h-[12px] w-[12px] flex justify-center items-center">
          <Image src={maximize} alt="fake maximize" />
        </div>
        <div
          className="h-[12px] w-[12px] flex justify-center items-center"
          /* onClick={() => handleTypeAnimOver()} */
        >
          <Image src={xSVG} alt="fake close" />
        </div>
      </div>
    </div>
  );
}
