"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
const ProjectCard = ({ title, description, gitLink, webLink, Img }) => {
  const [ImgSmall, setImgSmall] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setImgSmall(true)}
        onMouseLeave={() => setImgSmall(false)}
        className=" h-[300px] w-full bg-black  relative rounded-lg overflow-hidden"
      >
        <motion.div
          animate={ImgSmall ? { width: "10rem", height: "50%" } : null}
          className=" absolute  inset-0 w-full bg-slate-200 z-10 "
          style={{
            backgroundImage: `url(${Img})` || "url(/public/person/bg3.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></motion.div>
        <div className="  w-32 h-[50%]  absolute top-0 right-0 flex flex-col justify-evenly items-center gap-2 text-yellow-500  transition-colors">
          <Link href={gitLink} target="_blank" className="flex">
            <FaGithub size={25} /> <FiArrowUpRight size={20} />{" "}
          </Link>
          <Link href={webLink} target="_blank" className="flex ">
            <MdWeb size={25} /> <FiArrowUpRight size={20} />{" "}
          </Link>
        </div>
        <div className="h-1/2 p-6 absolute bottom-0 flex flex-col justify-center bg-black">
          <h3 className="text-xl mb-2 font-semibold text-white">
            {" "}
            {title || "Build"}
          </h3>
          <p className="text-sm font-light text-slate-300 text-justify ">
            {description || "we make pretty building asdjlf asdflk"}
          </p>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
