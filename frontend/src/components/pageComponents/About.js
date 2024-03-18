"use client";
import React, { useContext, useRef } from "react";
import Image from "next/image";
import { GrCertificate } from "react-icons/gr";

import { IoMdContacts } from "react-icons/io";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { ReactTyped } from "react-typed";

function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      id="about"
      className="mx-auto max-w-[1440px] lg:h-screen   pt-[4vh]  px-6 lg:px-20 3xl:px-0  "
    >
      <h3 className=" text-md sm:text-4xl text-2xl font-bold text-center">About</h3>
      <div className="lg:flex mt-10">
        <div className="flex flex-col justify-center">
          {/* education & exprerice */}
          <>
            <div className=" flex flex-col md:flex-row  gap-[2rem] flex-wrap">
              <div className="hover:bg-white shadow-xl hover:shadow-orange-500 p-[1.5rem] flex-1 items-center rounded-[2rem] border border-solid border-gray-500 text-center  ">
                <div className="flex items-center justify-center">
                  <GrCertificate size={24} />
                </div>
                <h2 className="font-bold ">Experience</h2>
                <p className="text-gray-700">0+ year </p>
                <p>
                  <span className="text-xl text-gray-700  ">
                  <ReactTyped
                  strings={[
                    "Javascript developer",
                    "Coder",
                    "MERN Stack Developer",
                    "Full Stack Developer",
                  ]}
                  typeSpeed={100}
                  loop
                  backSpeed={20}
                  cursorChar="/>"
                  showCursor={true}
                />
                  </span>
                </p>
              </div>
              <div className="hover:bg-white shadow-xl hover:shadow-orange-500 p-[1.5rem] flex-1  rounded-[2rem] border border-solid border-gray-500 text-center">
                <div className="flex items-center justify-center">
                  <IoMdContacts size={24} />
                </div>
                <h2 className="font-bold">Education</h2>
                <p className="text-gray-700">
                  <span className="font-bold">BCA</span> : Bharati Vidyapeeth
                  University
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">MCA</span> : Bharati Vidyapeeth
                  University
                </p>
              </div>
            </div>
          </>
          <div className="mt-3">
            <p className="text-justify">
              As a skilled MERN full-stack developer, I am dedicated to turning
              ideas into innovative web applications. Explore my latest projects
              , showcasing my expertise in React.js and web development.
            </p>
          </div>
        </div>
        <div className="">
          <Image
            src={"/person/bg3.png"}
            alt="Personal Photo"
            width={1000}
            height={1000}
            sizes="(max-width: 768px) 100vw, 33vw"
           
            onMouseEnter={(event) =>event.target.style.filter ="drop-shadow(10px 7px 10px black)" }
            onMouseLeave={(event) => event.target.style.filter ="none" }
          />
        </div>
      </div>
    </motion.section>
  );
}

export default About;
