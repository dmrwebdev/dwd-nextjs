import { useState } from "react";

export default function useDragToScroll() {
  const [node, setNode] = useState(null);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    x: 0,
    y: 0,
  });

  function handleMouseDown(e) {
    if (!node) return;

    setPosition({
      // The current scroll
      left: node.scrollLeft,
      top: node.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    });
    node.style.cursor = "grabbing";
    node.style.userSelect = "none";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(e) {
    // How far the mouse has been moved
    const dx = e.clientX - position.x;
    const dy = e.clientY - position.y;

    // Scroll the element
    node.scrollTop = position.top - dy;
    node.scrollLeft = position.left - dx;
  }

  function handleMouseUp() {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    node.style.cursor = "grab";
    node.style.removeProperty("user-select");
  }

  return [setNode, handleMouseDown, handleMouseUp];
}
