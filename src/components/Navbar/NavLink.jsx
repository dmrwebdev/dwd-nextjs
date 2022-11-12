import Link from "next/link";
import { useRouter } from "next/router";
export default function NavLink({ link, setMobileNavActive }) {
  const router = useRouter();

  return (
    <Link href={link.path}>
      <a className="text-s md" onClick={() => setMobileNavActive(false)}>
        <span className="text-teal-500">{"// "}</span>
        <span className="text-teal-700">( </span>
        <span className={`${router.asPath === link.path && "text-teal-400"} hover:text-teal-500`}>{link.name}</span>
        <span className="text-teal-700"> )</span>
      </a>
    </Link>
  );
}
