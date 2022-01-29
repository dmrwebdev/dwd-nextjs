import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

export default function Modal({
  show,
  hide,
  onHide = null,
  onExited = null,
  children,
  transparentBody,
}) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating && !show) return onExited;
  }, [isAnimating, show]);
  /*   if () return null; */

  // Don't show modal if show prop is false
  if (!show) return null;

  // Create portal to the DOM body and inject modal
  return createPortal(
    <>
      <div
        className={`${styles.modal_transition_in} fixed top-0 left-0 z-[100] w-screen h-screen bg-black/60`}
      />
      <div
        className={styles.modal_wrapper}
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div
          className={`h-full relative z-[101] text-[0px] flex justify-center items-center
          ${transparentBody ? "bg-transparent" : "bg-white"}
          
          `}
        >
          {children}
        </div>
      </div>
    </>,
    document.body
  );
}
