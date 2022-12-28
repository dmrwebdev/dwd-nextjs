import { TerminalCommandLine, TerminalLocationLine } from "@components";
import PixelMeBinaryBG from "@components/PixelMeBinaryBg/PixelMeBinaryBg";
import { TERMINAL_HOME_TEXT } from "@components/Terminal/Terminal.constants";
import { useIntersect } from "@hooks";

export default function TerminalHome() {
  /* const [meImgRef, entry] = useIntersect({ threshold: "0" }); */

  return (
    <div className="" /* ref={meImgRef} */>
      <div className="mb-10">
        <TerminalLocationLine directory="~/dwd" />
      </div>
      {/*       <PixelMeBinaryBG entry={entry} /> */}
      {TERMINAL_HOME_TEXT}
    </div>
  );
}
