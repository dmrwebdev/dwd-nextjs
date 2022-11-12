import { useState } from "react";
import Image from "next/image";
import { useWindowEffectsContext } from "@context/WindowEffectsContext";
import { pixelMe } from "@assets";
import styles from "./PixelMe.module.scss";

export default function PixelMe({ className }) {
  // TODO: Enable hide easter egg
  const [mouseOverImg, setmouseOverImg] = useState(false);
  const { introImgActive, setIntroImgOver } = useWindowEffectsContext();

  return (
    <div
      className={`${!className && introImgActive ? styles.pixel_img_anim : styles.pixel_img_anim_exit} 
      h-full w-full relative opacity-0 
      ${className} 
        `} /* ${
        mouseOverImg && styles.pixel_img_anim_exit
      } */
      onAnimationStart={() => setIntroImgOver(false)}
      onAnimationEnd={() => !introImgActive && setIntroImgOver(true)}
    >
      {
        <Image
          onMouseEnter={() => setmouseOverImg(true)}
          onMouseLeave={() => setmouseOverImg(false)}
          src={pixelMe}
          alt="Pixelized Derek Robertson"
          unoptimized // Prevent already pixelated image from becoming more pixelated
          priority={true}
          layout="fill"
          objectFit="contain"
          objectPosition="bottom"
        />
      }
    </div>
  );
}
