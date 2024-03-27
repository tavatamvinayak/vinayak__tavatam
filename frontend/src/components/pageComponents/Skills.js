"use client";
import React from "react";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useState, useEffect } from "react";
import SkillsPrograss from "../basicComponents/SkillsPrograss";

function Skills() {
  const { ref } = useSectionInView("Skills");
  const screenSize = useScreenSize();

  return (
    <section
      ref={ref}
      id="skills"
      className=" mx-auto max-w-[1440px] py-10 px-6 lg:px-20 3xl:px-0 bg-[] "
    >

        <h3 className=" text-2xl sm:text-4xl font-bold text-center py-5">My Skills</h3>
        {/* Skills animation with icons */}
        <div className="flex justify-center">
          {
          screenSize.width >= 569 ? (
            <div className="relative">
              <motion.div
                className="absolute top left- right-[212px] bottom-32"
                whileInView={{
                  x: -200,
                  y: -35,
                }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <FaHtml5 size={70} color="" />
              </motion.div>
              <motion.div
                whileInView={{
                  x: -200,
                  y: -130,
                }}
                transition={{ duration: 0.9, delay: 0.25, ease: "easeInOut" }}
                className="absolute   right-[212px] bottom-32 "
              >
                <FaCss3Alt size={70} color="" />
              </motion.div>
              <motion.div
                whileInView={{
                  x: -120,
                  y: -240,
                }}
                transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
                className="absolute  right-[212px] bottom-32 "
              >
                <IoLogoJavascript size={70} color="" />
              </motion.div>
              <motion.div
                whileInView={{
                  x: -0,
                  y: -270,
                }}
                transition={{ duration: 0.9, delay: 0.75, ease: "easeInOut" }}
                className="absolute   right-[212px] bottom-32 "
              >
                <FaNodeJs size={70} color="" />
              </motion.div>
              <motion.div
                whileInView={{
                  x: 120,
                  y: -240,
                }}
                transition={{ duration: 0.9, delay: 1.0, ease: "easeInOut" }}
                className="absolute   right-[212px] bottom-32 "
              >
                <FaReact size={70} color="" />
              </motion.div>
              <motion.div
                whileInView={{
                  x: 200,
                  y: -140,
                }}
                transition={{ duration: 0.9, delay: 1.5, ease: "easeInOut" }}
                className="absolute   right-[212px] bottom-32 "
              >
                <SiTailwindcss size={70} color="" />
              </motion.div>
              <motion.div
                whileInView={{
                  x: 200,
                  y: -50,
                }}
                transition={{ duration: 0.9, delay: 1.7, ease: "easeInOut" }}
                className="absolute   right-[212px] bottom-32 "
              >
                <SiMongodb size={70} color="" />
              </motion.div>

              <Image
                src={"/person/skills.png"}
                width={500}
                height={500}
                alt="skills"
              />
            </div>
          ) : (
            <div className="relative w-[340px] h-[330px] bg-yellow-300">
              <motion.div
                whileInView={{
                  x: -140,
                  y: -30,
                }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute  right-36 bottom-24"
              >
                <FaHtml5 size={35} color="" />
              </motion.div>
              <motion.div
                whileInView={{
                  x: -140,
                  y: -90,
                }}
                transition={{ duration: 0.9, delay: 0.25, ease: "easeInOut" }}
                className="absolute    right-36 bottom-24 "
              >
                <FaCss3Alt size={35} color="" />
              </motion.div>
              <motion.div
                whileInView={{
                  x: -110,
                  y: -160,
                }}
                transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
                className="absolute   right-36 bottom-24 "
              >
                <IoLogoJavascript size={35} color="" />
              </motion.div>
              <motion.div
                whileInView={{
                  x: -10,
                  y: -180,
                }}
                transition={{ duration: 0.9, delay: 0.75, ease: "easeInOut" }}
                className="absolute    right-36 bottom-24 "
              >
                <FaNodeJs size={35} color="" />
              </motion.div>
              <motion.div
                whileInView={{
                  x: 90,
                  y: -160,
                }}
                transition={{ duration: 0.9, delay: 1.0, ease: "easeInOut" }}
                className="absolute    right-36 bottom-24 "
              >
                <FaReact size={35} color="" />
              </motion.div>
              <motion.div
                whileInView={{
                  x: 120,
                  y: -90,
                }}
                transition={{ duration: 0.9, delay: 1.5, ease: "easeInOut" }}
                className="absolute    right-36 bottom-24 "
              >
                <SiTailwindcss size={35} color="" />
              </motion.div>
              <motion.div
                whileInView={{
                  x: 120,
                  y: -35,
                }}
                transition={{ duration: 0.9, delay: 1.7, ease: "easeInOut" }}
                className="absolute    right-36 bottom-24 "
              >
                <SiMongodb size={35} color="" />
              </motion.div>

              <Image
                src={"/person/skills.png"}
                width={800}
                height={800}
                alt="skills"
                style={{}}
              />
            </div>
          )
          }
        </div>

        {/* skills add percentages */}
        <div className=" pt-10">
          <p className="text-center text-gray-600">What i know</p>
          <h3 className="text-center text-xl font-bold">
            I can code in the following languages and technologies.
          </h3>
          <div className="w-full flex flex-wrap justify-center gap-3 mt-10">
            {/* start */}
            <div>
              <SkillsPrograss
                name={"HTML"}
                percentage={"65"}
                category={"web development"}
              />
              <SkillsPrograss
                name={"CSS"}
                percentage={"55"}
                category="Design"
              />
              <SkillsPrograss
                name={"JAVASCRIPT"}
                percentage={"85"}
                category="Web Development"
              />
              <SkillsPrograss
                name={"NODE.JS"}
                percentage={"77"}
                category={"Backend development"}
              />
            </div>
            <div>
              <SkillsPrograss
                name={"REACT.JS"}
                percentage={"75"}
                category={"Front end library"}
              />
              <SkillsPrograss
                name={"REACT_NATIVE"}
                percentage={"75"}
                category={"Mobile app development"}
              />
              <SkillsPrograss
                name={"expo"}
                percentage={"75"}
                category={"universal native apps"}
              />
              <SkillsPrograss
                name={"NEXT.JS"}
                percentage={"75"}
                category={"Next.js framework"}
              />
              <SkillsPrograss
                name={"TAILWIND CSS"}
                percentage={"70"}
                category={"Utility-first CSS Framework"}
              />
            </div>

            <div >   
              <SkillsPrograss
                name={"EXPRESS.JS"}
                percentage={"80"}
                category={"Node.js Framework"}
              />
              <SkillsPrograss
                name={"MONGO_DB"}
                percentage={"70"}
                category={"Database"}
              />
              <SkillsPrograss
                name={"mySQL"}
                percentage={"50"}
                category={"Database"}
              />
              <SkillsPrograss
                name={"TYPESCRIPT"}
                percentage={"45"}
                category={"Other language"}
              />
                  <SkillsPrograss
                name={"REDUX"}
                percentage={"65"}
                category={"state management"}
              />
              <SkillsPrograss
                name={"FRAMER-MOTION"}
                percentage={"35"}
                category={"Design tool"}
              />
            </div>
            {/* end */}
          </div>
        </div>
  
    </section>
  );
}

// display screen size




const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default Skills;
