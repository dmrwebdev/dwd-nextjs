import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import pixelMeTBG from "../../assets/pixel-me-tbg.png";
import useDebounce from "../../hooks/useDebounce";
import useWindowScrollPos from "../../hooks/useWindowScrollPos";
import styles from "./PixelMe.module.scss";

export default function PixelMe({ className }) {
  const [mouseOverImg, setmouseOverImg] = useState(false);
  const scrollPosition = useWindowScrollPos();
  const debouncedScrollPos = useDebounce(scrollPosition, 200);

  return (
    <div
      className={`${className} ${
        debouncedScrollPos === 0
          ? styles.pixel_img_anim
          : styles.pixel_img_anim_exit
      } h-full w-full relative`}
    >
      <Image
        onMouseEnter={() => setmouseOverImg(true)}
        onMouseLeave={() => setmouseOverImg(false)}
        src={pixelMeTBG}
        alt="Pixeled DMR"
        quality={100}
        priority={true}
        layout="fill"
        objectFit="contain"
        objectPosition="bottom"
        /* className={`${styles.pixel_img_anim} rotate-45`} */
      />
    </div>
  );
}
