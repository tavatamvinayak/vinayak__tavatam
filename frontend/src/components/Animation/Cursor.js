"use client";
import React, {  useEffect } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";


function Cursor() {

  const cursorSize = 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };
  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  //  text feature

  const variants = {
    text: {
      height: 100,
      width: 100,
      margin: -35,
      backgroundColor: "#F3820A",
      mixBlendMode: "difference",
    },
  };
  return (
    <motion.div
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      variants={variants}
      
      className="w-[20px] h-[20px] invisible sm:visible -z-50  bg-yellow-500 fixed rounded-full pointer-events-none"
    ></motion.div>
  );
}

export default Cursor;
