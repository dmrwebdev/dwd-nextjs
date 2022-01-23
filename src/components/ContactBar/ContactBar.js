import Image from "next/image";
import Link from "next/link";
import email from "../../assets/social/gmail.svg";
import github from "../../assets/social/github.svg";
import linkedIn from "../../assets/social/linkedin.svg";
import resume from "../../assets/social/resume.svg";

export default function Contactbar({ className }) {
  const contactTile = (contact) => (
    <Link href={contact.link}>
      <a className="brightness-[4] w-[32px] md:w-[45px] ">
        <Image
          src={contact.image}
          alt={contact.alt}
          height={50}
          width={50}
          /* className="md:scale-125" */
          layout="responsive"
        />
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

const contactLinks = [
  {
    link: "mailto:dmr.webdev@gmail.com",
    image: email,
    alt: "Email Me",
  },
  {
    link: "https://github.com/dmrwebdev",
    image: github,
    alt: "Github Profile",
  },
  {
    link: "https://www.linkedin.com/in/dmrwebdev/",
    image: linkedIn,
    alt: "LinkedIn Profile",
  },
  {
    link: "/Derek_Robertson_Resume_2022.pdf",
    image: resume,
    alt: "Resume",
  },
];
