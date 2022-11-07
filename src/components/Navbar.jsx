import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { smMediaQuery } from "@data";
import { useDebounce, useMediaQuery, useWindowScrollPos } from "@hooks";

export default function Navbar({ prevScrollPos, setPrevScrollPos }) {
  // Use the 640px breakpoint to split between mobile and desktop navs
  const isBreakpoint = useMediaQuery(smMediaQuery);
  // Set visibility of navbar, fades away scrolling down and reappears scrolling up
  const [visible, setVisible] = useState(true);
  // Shows full mobile nav if hamburger was clicked
  const [mobileNavActive, setMobileNavActive] = useState(false);
  // Get heights of elements
  const navRef = useRef(null);
  const mobileLinksRef = useRef(null);
  // Use the previous scroll position and debounce buffer to determine when to set menu visible
  const debouncedScrollPos = useDebounce(prevScrollPos, 200);
  // Determine active styles by path
  const router = useRouter();
  // Get current scroll position of window
  const scrollPosition = useWindowScrollPos();

  // Set visibility and use a slight delay between a users scroll and show/hide of the navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Set the visibility for both layouts based on debounce buffer and scroll position
      const inView =
        (debouncedScrollPos > currentScrollPos &&
          debouncedScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10;
      setVisible(inView);
      !inView && setMobileNavActive(false);
      // Use the previous scroll position for next calculation
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [debouncedScrollPos, visible, setPrevScrollPos]);

  function linkGenerator(link) {
    console.log(router.asPath);
    console.log(link.url);
    return (
      <Link href={link.url} key={link.url}>
        <a className="text-s md" onClick={() => setMobileNavActive(false)}>
          <span className="text-teal-500">{"// "}</span>

          <span className="text-teal-700">( </span>
          <span
            className={`${
              (router.asPath.slice(2) === link.url.split("/#")[1] ||
                router.asPath === link.url) &&
              "text-teal-400"
            } hover:text-teal-500`}
          >
            {link.text}
          </span>
          <span className="text-teal-700"> )</span>
        </a>
      </Link>
    );
  }

  const mobileLayout = (
    <div className="flex m-4">
      <div
        className="
        flex flex-col
        space-y-5
        overflow-hidden
        transition-all ease-out duration-[400ms]
        "
        style={{
          height: mobileNavActive
            ? `${mobileLinksRef?.current?.scrollHeight || 0}px`
            : 0,
        }}
        ref={mobileLinksRef}
      >
        {links.map((link, i) => linkGenerator(link))}
      </div>
      <div
        className="ml-auto w-[30px] "
        onClick={() => setMobileNavActive((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );

  const desktopLayout = (
    <div
      className="
      lg:text-lg
      flex flex-row justify-center items-center
      p-4 pt-6 space-x-8 
      border-b
      "
    >
      {links.map((link, i) => linkGenerator(link))}
    </div>
  );

  return (
    <nav
      className={`${
        // If scroll position is not top use a higher opacity
        (mobileNavActive &&
          `bg-[#0e161b] opacity-${scrollPosition === 0 ? "75" : "100"}`) ||
        (!isBreakpoint && scrollPosition !== 0 && "bg-[#0e161b] opacity-100")
      }
      font-["Hack"]
      w-full fixed z-10
      transition-all ease-out duration-[600ms]
    text-gray-50`}
      ref={navRef}
      style={{ top: visible ? "0" : `-${navRef.current.clientHeight}px` }}
    >
      {/*** Content ***/}
      <div className="w-full sm:w-fit sm:mx-auto">
        {isBreakpoint ? mobileLayout : desktopLayout}
      </div>
      {/***  Decorative bottom bar ***/}
      <div className="flex justify-center w-full">
        <div
          className={
            `${!mobileNavActive && "w-0 "} ` +
            "bg-white h-[1px] w-full transition-all ease-out duration-[400ms]"
          }
        />
      </div>
    </nav>
  );
}

const links = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/#about-me",
    text: "About Me",
  },
  {
    url: "/#projects",
    text: "Projects",
  },
  {
    url: "/#tech",
    text: "Tech",
  },
];
