/* import styles from "./Navbar.module.scss"; */

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import useDebounce from "../../hooks/useDebounce";

export default function Navbar({ prevScrollPos, setPrevScrollPos }) {
  const [visible, setVisible] = useState(true);

  const node = useRef();
  const debouncedScrollPos = useDebounce(prevScrollPos, 200);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (debouncedScrollPos > currentScrollPos &&
          debouncedScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [debouncedScrollPos, visible]);

  return (
    <nav
      className="w-full h-[60px] fixed z-30 bg-[#0e161b]  text-white flex justify-center items-center space-x-5 transition-all ease-out duration-[600ms]"
      ref={node}
      style={{
        //TODO turn nav height into variable
        top: visible ? "0" : "-60px",
        backgroundColor: prevScrollPos === 0 ? "transparent" : "",
      }}
    >
      {/* bg-slate-800 */}
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/#projects">
        <a>Projects</a>
      </Link>
      <Link href="/#about">
        <a>About Me</a>
      </Link>
      <Link href="/#tech">
        <a>Tech and Certs</a>
      </Link>
    </nav>
  );
}
