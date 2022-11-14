import { TerminalCommandLine, TerminalLocationLine } from "@components";
import { TERMINAL_HOME_TEXT } from "@components/Terminal/Terminal.constants";

export default function TerminalHome() {
  return (
    <div className="">
      <div className="mb-2">
        <TerminalLocationLine directory="~/" />
      </div>
      {TERMINAL_HOME_TEXT}
    </div>
  );
}
