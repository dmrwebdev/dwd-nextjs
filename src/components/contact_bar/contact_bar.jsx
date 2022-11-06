import Image from "next/image";
import Link from "next/link";
import { gmail, githubOutline, linkedin, resume } from "@assets";

export default function ContactBar() {
  const contactLinks = [
    {
      link: "mailto:dmr.webdev@gmail.com",
      image: gmail,
      alt: "Email Me",
    },
    {
      link: "https://github.com/dmrwebdev",
      image: githubOutline,
      alt: "Github Profile",
    },
    {
      link: "https://www.linkedin.com/in/dmrwebdev/",
      image: linkedin,
      alt: "LinkedIn Profile",
    },
    {
      link: "/dr_resume.pdf",
      image: resume,
      alt: "Resume",
    },
  ];

  const contactTile = (contact) => (
    <Link href={contact.link} key={contact.link}>
      <a className="brightness-[4] w-[32px] md:w-[45px] ">
        <Image src={contact.image} alt={contact.alt} layout="responsive" />
      </a>
    </Link>
  );

  return (
    <div
      className={`w-full max-w-[350px] mx-auto px-6 py-2 flex justify-between border rounded-full bg-black/50`}
    >
      {contactLinks.map((contact) => contactTile(contact))}
    </div>
  );
}
