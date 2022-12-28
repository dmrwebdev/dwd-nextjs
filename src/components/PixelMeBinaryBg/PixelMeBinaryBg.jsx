import { useEffect, useState } from "react";
import Image from "next/image";
import { useWindowEffectsContext } from "@context/WindowEffectsContext";

import { binary, pixelMe } from "@assets";
import styles from "./PixelMeBinaryBg.module.scss";

export default function PixelMeBinaryBG({ entry }) {
  const [imageIsAnimating, setImageIsAnimating] = useState(true);

  const { introImgOver } = useWindowEffectsContext();

  // Set image as animating if section is scrolled into view
  useEffect(() => {
    if (entry.isIntersecting) {
      setImageIsAnimating(true);
    } else {
      setImageIsAnimating(false);
    }
  }, [entry]);

  return (
    <div className="mx-auto *max-w-[400px] w-full m-2 border-4 border-[#003153] rounded-3xl mb-6">
      {/* --- Binary Background --- */}
      <div className="rounded-3xl overflow-hidden max-h-[200px] border-4 border-[#08F7FE] relative">
        <Image src={binary} alt="Binary numbers" layout="responsive" />
        {/* --- Pixel Me Img --- */}
        <div
          className={`${
            introImgOver && imageIsAnimating ? styles.me_img_anim : "opacity-0"
          } absolute bottom-0 h-full w-full`}
        >
          <Image
            src={pixelMe}
            alt="Pixelized Derek Robertson"
            unoptimized
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
          />
        </div>
      </div>
    </div>
  );
}
