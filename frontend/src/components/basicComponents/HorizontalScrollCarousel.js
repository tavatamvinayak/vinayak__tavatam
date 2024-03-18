"use client";
import React, { useRef } from "react";
import CommunnityCard from "../basicComponents/CommunnityCard";
import { motion } from "framer-motion";
import { useTransform, useScroll } from "framer-motion";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div ref={targetRef} className="relative h-[300vh] " id="Community">
      <div className="sticky top-0 flex  h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex  gap-4">
          <CommunnityCard />
          <CommunnityCard />
          <CommunnityCard />
          <CommunnityCard />
          <CommunnityCard />
          <CommunnityCard />
        </motion.div>
      </div>
    </div>
  );
};
export default HorizontalScrollCarousel