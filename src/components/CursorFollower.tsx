"use client";

import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.08;

let mouseX = -10;
let mouseY = -10;
let outlineX = 0;
let outlineY = 0;

export const Cursor = () => {
  const cursorOutline = useRef<HTMLDivElement>(null);
  const [hoverButton, setHoverButton] = useState(false);

  // Cursor animation function
  const animate = () => {
    const distX = mouseX - outlineX;
    const distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

    if (cursorOutline.current) {
      cursorOutline.current.style.left = `${outlineX}px`;
      cursorOutline.current.style.top = `${outlineY}px`;
    }

    requestAnimationFrame(animate);
  };

  // Mouse movement listener for the entire document
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    const animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Mouse over listener for hover effects
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName.toLowerCase() === "button" ||
          (target.parentElement &&
            target.parentElement.tagName.toLowerCase() === "button") ||
          target.tagName.toLowerCase() === "input" ||
          target.tagName.toLowerCase() === "textarea")
      ) {
        setHoverButton(true);
      } else {
        setHoverButton(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className={`z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform ${
          hoverButton
            ? "bg-transparent border-2 border-blue-900 w-5 h-5"
            : "bg-blue-500 w-3 h-3"
        }`}
        ref={cursorOutline}
      ></div>
    </>
  );
};
