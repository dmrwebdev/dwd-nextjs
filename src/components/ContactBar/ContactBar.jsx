import Image from "next/image";
import Link from "next/link";

import { CONTACT_LINKS } from "./ContactBar.constants";

export default function ContactBar() {
  return (
    <div className={`w-full max-w-[350px] mx-auto px-6 py-2 flex justify-between border rounded-full bg-black/50`}>
      {CONTACT_LINKS.map((contact) => (
        <Link href={contact.link} key={contact.link}>
          <a className="brightness-[4] *w-[32px] md:* w-[40px] ">
            <Image src={contact.image} alt={contact.alt} layout="responsive" />
          </a>
        </Link>
      ))}
    </div>
  );
}
