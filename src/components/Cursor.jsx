import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 10 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 10 });
  const [cursorColor, setCursorColor] = useState("#3fc1a3");

  useEffect(() => {
    const mouseMove = (e) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);


    //     const element = document.elementFromPoint(e.clientX, e.clientY);
    //   if (element) {
    //     const bgColor = window.getComputedStyle(element).backgroundColor;
    //     setCursorColor(bgColor === "rgba(0, 0, 0, 0)" ? "#3fc1a3" : bgColor);
    //   }
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <motion.div
      className="w-8 h-8 rounded-full fixed left-0 top-0 pointer-events-none"
      style={{
        backgroundColor: cursorColor,
        x: smoothX,
        y: smoothY,
      }}
    />
  );
}
