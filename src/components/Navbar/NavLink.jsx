import Link from "next/link";
import { useRouter } from "next/router";
export default function NavLink({ link, setMobileNavActive }) {
  const router = useRouter();

  return (
    <Link href={link.url}>
      <a className="text-s md" onClick={() => setMobileNavActive(false)}>
        <span className="text-teal-500">{"// "}</span>
        <span className="text-teal-700">( </span>
        <span
          className={`${
            (router.asPath.slice(2) === link.url.split("/#")[1] || router.asPath === link.url) && "text-teal-400"
          } hover:text-teal-500`}
        >
          {link.text}
        </span>
        <span className="text-teal-700"> )</span>
      </a>
    </Link>
  );
}
