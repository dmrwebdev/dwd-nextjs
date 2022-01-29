import { useState, useCallback, useEffect } from "react";

export default function useMediaQuery(width) {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    const updateTarget = (e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    };

    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      console.log("firing");
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [width]);

  return targetReached;
}
