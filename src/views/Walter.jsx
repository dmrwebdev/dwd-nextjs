import Image from "next/image";
import { walter } from "@assets";
import { TerminalSectionHeading } from "@components";

export default function Walter() {
  return (
    <div className="flex flex-col justify-center items-center grow">
      <TerminalSectionHeading>This is Walter</TerminalSectionHeading>
      <div className="max-w-[800px] overflow-hidden rounded text-[0px]">
        <Image src={walter} alt="My cat Walter coding with me" />
      </div>
      <p className="mt-8">{`Worst code reviewer, ever.`}</p>
    </div>
  );
}
