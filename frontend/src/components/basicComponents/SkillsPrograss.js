"use client";
import React, { useState } from "react";
import {motion } from 'framer-motion'
function SkillsPrograss({ name, percentage, category }) {
  const [Categeri, setCategeri] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setCategeri(true);
      }}
      onMouseLeave={() => {
        setCategeri(false);
      }}
      className=" border-x-2 rounded-xl  w-[390px] px-5 py-2  shadow-xl  shadow-black/30 dark:shadow-white/10"
    >
      <div className="flex justify-between">
        <h3 className="font-bold">{name}</h3>
        {Categeri ? <p className="text-gray-400">{category}</p> : null}
        <p className="font-bold">{percentage + "%"}</p>
      </div>
      <div className="progress  border border-[0.05] h-2 rounded-full overflow-hidden mt-1">
        <motion.div
        whileInView={{
          width:`${percentage}%` 
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border border-purple-600 h-full  rounded-lg"
          style={{ width: `0%` }}
        ></motion.div>
      </div>
    </div>
  );
}

export default SkillsPrograss;
