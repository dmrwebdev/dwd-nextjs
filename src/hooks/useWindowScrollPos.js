import { useEffect, useState } from "react";

export default function useWindowScrollPos() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScrollPos() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScrollPos);
    return () => window.removeEventListener("scroll", handleScrollPos);
  }, []);

  return scrollPosition;
}
