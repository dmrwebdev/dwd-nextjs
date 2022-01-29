import Image from "next/image";
import { useState } from "react";

import { useAppContext } from "../../context/AppContext";
import pixelMeTBG from "../../assets/pixel-me-tbg.png";
import styles from "./PixelMe.module.scss";

export default function PixelMe({ className, parentRef, animActive }) {
  const [mouseOverImg, setmouseOverImg] = useState(false);
  const { setIntroMeImgOver } = useAppContext();

  return (
    <div
      className={`${className} ${
        animActive ? styles.pixel_img_anim : styles.pixel_img_anim_exit
      } h-full w-full relative`}
      onAnimationStart={() => setIntroMeImgOver(false)}
      onAnimationEnd={() => !animActive && setIntroMeImgOver(true)}
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
