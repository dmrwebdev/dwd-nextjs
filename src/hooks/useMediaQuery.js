import { useState, useCallback, useEffect } from "react";

export const breakPoints = {
  sm: 640,
  md: 768,
};

export default function useMediaQuery(width) {
  // TODO: Figure out how to account for SSR and initial value
  const [targetReached, setTargetReached] = useState(null);

  useEffect(() => {
    const updateTarget = (e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    };

    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [width]);

  return [targetReached, breakPoints];
}
