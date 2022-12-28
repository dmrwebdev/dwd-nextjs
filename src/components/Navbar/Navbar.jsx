import { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { smMediaQuery } from "@app_constants";
import { useWindowEffectsContext } from "@context/WindowEffectsContext";
import { useDebounce, useMediaQuery, useWindowScrollPos } from "@hooks";
import { APP_SECTIONS } from "@app_constants";
import NavLink from "./NavLink";

export default function Navbar() {
  const { prevScrollPos, setPrevScrollPos } = useWindowEffectsContext();
  // Use the 640px breakpoint to split between mobile and desktop navs
  const [isBreakpoint] = useMediaQuery(smMediaQuery);
  // Set visibility of navbar, fades away scrolling down and reappears scrolling up
  const [visible, setVisible] = useState(true);
  // Shows full mobile nav if hamburger was clicked
  const [mobileNavActive, setMobileNavActive] = useState(false);
  // Get heights of elements
  const navRef = useRef(null);
  const mobileLinksRef = useRef(null);
  // Use the previous scroll position and debounce buffer to determine when to set menu visible
  const debouncedScrollPos = useDebounce(prevScrollPos, 200);

  // Get current scroll position of window
  const scrollPosition = useWindowScrollPos();

  // Set visibility and use a slight delay between a users scroll and show/hide of the navbar
  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      // Set the visibility for both layouts based on debounce buffer and scroll position
      const inView =
        (debouncedScrollPos > currentScrollPos && debouncedScrollPos - currentScrollPos > 70) || currentScrollPos < 10;
      setVisible(inView);
      !inView && setMobileNavActive(false);
      // Use the previous scroll position for next calculation
      // !!TODO: KILL THIS FOR PERFORMANCE
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [debouncedScrollPos, visible, setPrevScrollPos]);

  const mobileLayout = (children) => (
    <div className="flex m-4">
      {children}
      <div className="ml-auto w-[30px] " onClick={() => setMobileNavActive((prev) => !prev)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );

  const content = (
    <div
      className="
      xl:text-lg
      flex flex-col sm:flex-row sm:justify-center sm:items-center
      sm:p-4 sm:pt-6 space-y-5 sm:space-y-0 sm:space-x-8 
      md:border-b
      overflow-hidden
      transition-all ease-out duration-[400ms]
      "
      style={{
        height: !isBreakpoint && (mobileNavActive ? `${mobileLinksRef?.current?.scrollHeight || 0}px` : 0),
      }}
      ref={mobileLinksRef}
    >
      {[...APP_SECTIONS.values()].map(
        (link) => link.active && <NavLink key={link.url} link={link} setMobileNavActive={setMobileNavActive} />
      )}
    </div>
  );

  return (
    <nav
      className={`${
        // If scroll position is not top use a higher opacity
        (mobileNavActive && `bg-[#0e161b] opacity-${scrollPosition === 0 ? "75" : "100"}`) ||
        (isBreakpoint && scrollPosition !== 0 && "bg-[#0e161b] opacity-100")
      }
      font-["Hack"]
      w-full fixed z-10
      transition-all ease-out duration-[600ms]
    text-gray-50`}
      ref={navRef}
      style={{ top: visible ? "0" : `-${navRef.current.clientHeight}px` }}
    >
      <div className="w-full sm:w-fit sm:mx-auto">{!isBreakpoint ? mobileLayout(content) : content}</div>
      <div className="flex justify-center w-full">
        <div
          className={
            `${!mobileNavActive && "w-0 "} ` + "bg-white h-[1px] w-full transition-all ease-out duration-[400ms]"
          }
        />
      </div>
    </nav>
  );
}
