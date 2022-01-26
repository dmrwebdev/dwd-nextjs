import React, { useEffect } from "react";

// Adapted from https://github.com/lovasoa/react-contenteditable/blob/master/src/react-contenteditable.tsx

function normalizeHtml(str) {
  return str && str.replace(/&nbsp;|\u202F|\u00A0/g, " ");
}

function replaceCaret(el) {
  // Place the caret at the end of the element
  const target = document.createTextNode("");
  el.appendChild(target);
  // do not move caret if element was not focused
  const isTargetFocused = document.activeElement === el;
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    var sel = window.getSelection();
    if (sel !== null) {
      var range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    if (el instanceof HTMLElement) el.focus();
  }
}

/**
 * A simple component for an html element with editable contents.
 */
export default function ContentEditable(props) {
  let lastHtml = props.html;
  const el =
    typeof props.innerRef === "function"
      ? { current: null }
      : React.createRef();

  const getEl = () =>
    (props.innerRef && typeof props.innerRef !== "function"
      ? props.innerRef
      : el
    ).current;

  /*  const { tagName, html, innerRef, ...props } = props; */

  useEffect(() => {
    const el = getEl();
    if (el /* || normalizeHtml(html) !== normalizeHtml(el.innerHTML) */) {
      if (props.html !== el.innerHTML) {
        el.innerHTML = props.html;
      }
      lastHtml = props.html;
      replaceCaret(el);
    }

    // Perhaps React (whose VDOM gets outdated because we often prevent
    // rerendering) did not update the DOM. So we update it manually now.
  }, [
    props.html,
    props.disabled,
    props.tagName,
    props.className,
    props.innerRef,
    props.placeholder,
    props.style,
  ]);

  const emitChange = (originalEvt) => {
    const el = getEl();
    if (!el) return;

    const html = el.innerHTML;
    if (props.onChange && html !== lastHtml) {
      // Clone event with Object.assign to avoid
      // "Cannot assign to read only property 'target' of object"
      const evt = Object.assign({}, originalEvt, {
        target: {
          value: html,
        },
      });
      props.onChange(evt);
    }
    lastHtml = html;
  };

  // eslint-disable-next-line react/no-danger-with-children
  return React.createElement(
    props.tagName || "div",
    {
      ...props,
      ref:
        typeof props.innerRef === "function"
          ? (current) => {
              innerRef(current);
              el.current = current;
            }
          : props.innerRef || el,
      onInput: emitChange,
      onBlur: props.onBlur || emitChange,
      onKeyUp: props.onKeyUp || emitChange,
      onKeyDown: props.onKeyDown || emitChange,
      contentEditable: !props.disabled,
      dangerouslySetInnerHTML: { __html: props.html },
    },
    props.children
  );
}
