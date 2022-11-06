import { useEffect } from "react";
import { useAppContext } from "@context/AppContext";
import { useIntersect } from "@hooks";
import { PixelMe } from "@components";

import { introGroup } from "./index";
import styles from "./welcome.module.scss";

export default function Welcome() {
  const { introMeImgActive, setIntroMeImgActive } = useAppContext();

  const [welcomeRef, entry] = useIntersect({
    threshold: "1",
  });

  useEffect(() => {
    if (
      entry.isIntersecting /* && !terminalAnimOver && router.asPath === "/" */
    ) {
      setIntroMeImgActive(true);
    } else {
      setIntroMeImgActive(false);
    }
  }, [entry, setIntroMeImgActive]);

  return (
    <section
      id={styles.welcome}
      className={`h-full relative bg-[#12263A] overflow-hidden`}
      ref={welcomeRef}
    >
      {introGroup}
      <div className={`absolute bottom-[-50px] w-[230px] h-[230px]`}>
        <PixelMe parentRef={welcomeRef} animActive={introMeImgActive} />
      </div>
    </section>
  );
}
