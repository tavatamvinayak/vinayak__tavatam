"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";
import { ReactTyped } from "react-typed";

function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className=" mx-auto max-w-[1440px] h-screen flex flex-col justify-center items-center  px-6 lg:px-20 3xl:px-0 "
    >
      <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-28  ">
        <div className="flex justify-center">
          <div className="border rounded-full w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 overflow-hidden">
            <Image
              src={"/person/id_photo.png"}
              alt="Hero"
              height={500}
              width={500}
            />
          </div>
        </div>
        <div className=" items-center text-center pt-10">
          <div className="flex flex-col gap-1">
            <p className="text-xl text-gray-900">{` Hello , i'm `} </p>
            <h1 className="text-3xl font-bold">Vinayak Tavatam</h1>
            <h2 className="">
              <span className="text-xl text-gray-700 font-extrabold ">
             
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
            </h2>
          </div>
          <div className="flex flex-col gap-5 mt-5 justify-center">
            <div className="flex justify-center gap-4">
              <Link
                href={`https://docs.google.com/document/d/1YvpOqExJxnaXjPjAF1u8xR0ReevHcNxxieKrkK_rmf4/edit?usp=sharing`}
                target="_black"
              >
                <button className="px-6 py-4 border border-black rounded-full  hover:bg-black hover:text-white">
                  Download CV
                </button>
              </Link>
              <Link href={`#contact`}>
                <button className="px-6 py-4 border border-black rounded-full  hover:bg-black hover:text-white">
                  Contact Me
                </button>
              </Link>
            </div>
            <div className="flex justify-center gap-6">
              <Link
                href={`https://www.linkedin.com/in/vinayak-tavatam/`}
                target="_black"
              >
                <button className="rounded-full border border-black p-2 items-center bg-black text-white hover:bg-white hover:text-black">
                  <Linkedin />
                </button>
              </Link>
              <Link href={`https://github.com/tavatamvinayak`} target="_black">
                <button className="rounded-full border border-black p-2 items-center bg-black text-white hover:bg-white hover:text-black">
                  <Github />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
