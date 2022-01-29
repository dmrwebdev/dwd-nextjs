import { useState } from "react";

export default function useModal({ show = false, onHide = null } = {}) {
  const [isShowing, setIsShowing] = useState(false);

  

  function toggle() {
    if (isShowing && onHide) {
      onHide();
    }
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
}
