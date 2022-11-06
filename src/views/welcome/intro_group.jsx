import { ContactBar } from "@components";
import { IntroText } from "./index";
import styles from "./welcome.module.scss";

export const introGroup = (
  <div
    className={`${styles.hello_container} h-full flex flex-col justify-center items-center
       text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl px-6`}
  >
    <div className={`flex justify-center items-center`}>
      <h1 className="flex flex-col flex-wrap  drop-shadow-md ">
        <span className={`text-2xl md:text-6xl`}>{`Hello, my name's`}</span>
        <b>Derek Robertson!</b>
      </h1>
      <span className={`${styles.handwave_anim} ml-4`}>👋</span>
    </div>
    <p className="text-lg md:text-3xl mt-4 text-center relative">
      {`I'm a`}
      <span className={`${styles.content} mx-2 min-w-[175px]`}>
        <span className={`${styles.content__container__text} mx-2 `}>
          <IntroText />
        </span>
      </span>
      {`who loves to build websites and other neat things.`}
    </p>
    <div className="mt-7  w-full">
      <ContactBar />
    </div>
  </div>
);

export default introGroup;
