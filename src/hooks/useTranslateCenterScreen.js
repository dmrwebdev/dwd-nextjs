//https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
// How Can I measure a DOM node?
//https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node

import { useCallback, useEffect, useRef, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

export default function useTranslateCenterScreen() {
  /* const [node, setNode] = useState(ref); */
  const [inFocus, setInFocus] = useState(false);

  const { width, height } = useWindowDimensions();
  const ref = useRef(null);

  const setRef = useCallback(
    (node) => {
      if (ref.current) {
        ref.current.style.transform = "translate(0, 0)";
        ref.current.style.zIndex = 0;
        /* ref.current.style.position = `static`; */
        // Make sure to cleanup any events/references added to the last instance
        /*        $(cardInFocus).transition({
         x: 0,
         y: 0,
       }); */
      }

      if (node) {
        const {
          top,
          bottom,
          left,
          width: elemWidth,
          height: elemHeight,
        } = node.getBoundingClientRect();
        const screenCenter = {
          x: width / 2 - (elemWidth / 2 + left),
          y: height / 2 - (elemHeight / 2 + (height - bottom)),
        };
        console.log(`translate(${screenCenter.x}px, -${screenCenter.y}px) `);
        const elemScreenPercentage = (elemWidth * elemWidth) / (width * height);
        // Check if a node is actually passed. Otherwise node would be null.
        // You can now do what you need to, addEventListeners, measure, etc.
        /* node.style.position = "relative"; */
        node.style.zIndex = 100;
        node.style.transform = `translate(${screenCenter.x}px, -${screenCenter.y}px) `; /* scale(${1000 / elemWidth}) */
        /*         node.style.position = `absolute`; */
      }

      // Save a reference to the node
      ref.current = node;
    },
    [height, width]
  );

  return [setRef];
}
