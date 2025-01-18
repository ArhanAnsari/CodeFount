//src/components/custom-cursor.tsx
/* eslint-disable */
"use client";

import React, { useEffect, useRef, useState } from "react";

const CURSOR_COLORS = {
  h1: "green-400",
  button: "orange-500",
  default: "sky-500",
};

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("sky-500");
  const [clicked, setClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch devices
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 800);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const tagName = (e.target as HTMLElement).tagName.toLowerCase() as keyof typeof CURSOR_COLORS;
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS.default);
    };

    const handleScroll = () => {
      // Repaint cursor on scroll
      if (cursorRef.current) {
        cursorRef.current.style.top = `${position.y}px`;
        cursorRef.current.style.left = `${position.x}px`;
      }
    };

    if (!isTouchDevice) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseover", handleMouseOver);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (!isTouchDevice) {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseover", handleMouseOver);
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isTouchDevice, position]);

  if (isTouchDevice) {
    return null; // Don't render cursor on touch devices
  }

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          top: position.y,
          left: position.x,
        }}
        className={`fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-in rounded-full w-3 h-3 bg-${cursorColor}`}
      />
      <div
        ref={borderRef}
        style={{
          top: position.y,
          left: position.x,
        }}
        className={`fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in rounded-full w-8 h-8 border-2 border-${cursorColor}`}
      >
        <div
          className={`w-8 h-8 ${
            clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"
          } -translate-x-[1px] -translate-y-[1px] rounded-full bg-${cursorColor} transition-all duration-500 ease-in`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
