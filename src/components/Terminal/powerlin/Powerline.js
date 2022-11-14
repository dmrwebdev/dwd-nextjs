import styles from "./Powerline.module.scss";

export default function Powerline() {
  return (
    <div className="w-full h-[30px] bg-yellow-50 flex">
      <div
        className={`${styles.pointer} relative h-100 bg-sky-300 py-1 pl-5 pr-2 z-10`}
      >
        Derek
      </div>
      <div
        className={`${styles.pointer} relative h-100 bg-sky-500 w-fit py-1 pl-8 pr-2-20`}
      >
        Derek
      </div>
    </div>
  );
}
