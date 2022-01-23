import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import pixelMeTBG from "../../assets/pixel-me-tbg.png";
import styles from "./PixelMe.module.scss";

export default function PixelMe({ className }) {
  const [mouseOverImg, setmouseOverImg] = useState(false);

  return (
    <div className={`${className} ${styles.pixel_img_anim} flex items-end`}>
      <Image
        onMouseEnter={() => setmouseOverImg(true)}
        onMouseLeave={() => setmouseOverImg(false)}
        src={pixelMeTBG}
        alt="Pixeled DMR"
        quality={100}
        priority={true}
        /* className={`${styles.pixel_img_anim} rotate-45`} */
      />
    </div>
  );
}
