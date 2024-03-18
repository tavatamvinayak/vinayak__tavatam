"use client";

// --------------------------------------------------- new feature add ------------------

import Link from "next/link";
import { React, useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll } from "framer-motion";

import { NAV_LINKS } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  let [activeTab, setActiveTab] = useState(NAV_LINKS[0].href);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  // links
  const image =
    "https://lh3.googleusercontent.com/a/ACg8ocKTwdi3htKXZN8rDbcFZw6PD7rQMwSRsqzuSEdhIkRAiZU=s288-c-no";
  const SocialMedias = [
    {
      name: "instagram",
      img: "https://cdn-icons-png.freepik.com/512/2111/2111463.png?ga=GA1.1.1113827505.1706383239&",
      href: "https://www.instagram.com/vinayak_tavatam/",
    },
    {
      name: "Linkdin",
      img: "https://cdn-icons-png.freepik.com/512/2504/2504923.png?ga=GA1.1.1113827505.1706383239&",
      href: "https://www.linkedin.com/in/vinayak-tavatam/",
    },
    {
      name: "Github",
      img: "https://cdn-icons-png.freepik.com/512/733/733609.png?ga=GA1.1.1113827505.1706383239&",
      href: "https://github.com/tavatamvinayak",
    },
    {
      name: "Whatsapp",
      img: "https://cdn-icons-png.freepik.com/512/3536/3536445.png?ga=GA1.1.1113827505.1706383239&",
      href: "https://api.whatsapp.com/send/?phone=%2B918830850302&text=I%27m+interested+in+your+Website+i+want+to+meet+you+&type=phone_number&app_absent=0",
    },
    {
      name: "Twitter",
      img: "	https://cdn-icons-png.freepik.com/512/5968/5968830.png?ga=GA1.1.1113827505.1706383239&",
      href: "https://twitter.com/vishaltavatam",
    },
    {
      name: "facebook",
      img: "https://cdn-icons-png.freepik.com/512/5968/5968764.png?ga=GA1.1.1113827505.1706383239&",
      href: "https://www.facebook.com/people/Vishal-Tavatam/100004938288207/?paipv=0&eav=AfZiiBICoR4F4G8bptz6Tw2LnwyHBvejiHcyx5bB2HKceG1MF1EwV-mA5HA5mQKfOQ8&_rdr",
    },
    {
      name: "snapChat",
      img: "https://cdn-icons-png.freepik.com/512/1409/1409941.png?ga=GA1.1.1113827505.1706383239&",
      href: "https://www.snapchat.com/add/vinayak-tavatam?share_id=iIBIQ6CCjsc&locale=en-US",
    },
  ];

  // scroll to hide
  const { scrollY, scrollYProgress } = useScroll();
  /** add useState hook to manage state **/

  const [hidden, setHidden] = useState(false);
  /** this onUpdate function will be called in the `scrollY.onChange` callback **/

  const update = useCallback(() => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
      console.log("visible");
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
      console.log("hidden");
    }
  }, [scrollY]);
  /** update the onChange callback to call for `update()` **/
  useEffect(() => {
    return scrollY.on("change", () => update());
  }, [scrollY, update]);

  const variants = {
    /** this is the "visible" key and it's respective style object **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's respective style object **/
    hidden: { opacity: 0, y: -25 },
  };

  // use in view for navlinks  <= start

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  // end => navlinks

  return (
    <motion.header
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className=" fixed w-screen z-[999]  px-6 lg:px-20 3xl:px-0"
    >
      <nav className=" flex  justify-between  items-center py-8 lg:py-4 px-2 ">
        <div className="flex items-center gap-[1ch] z-10" onClick={toggleMenu}>
          {image ? (
            <Image
              src={image}
              height={50}
              width={50}
              alt="Vinayak_tavatam"
              className="rounded-full cursor-pointer"
            />
          ) : (
            <span className="text-2xl font-semibold tracking-widest ">VT</span>
          )}
        </div>
        <div className="lg:flex hidden gap-2 text-md text-yellow-500">
          {NAV_LINKS.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.key}
                onClick={() => {
                  setActiveSection(link.label);
                  setTimeOfLastClick(Date.now());
                }}
                className={`${
                  activeTab === link.href
                    ? "text-yellow-500"
                    : "hover:text-green-500 "
                } relative rounded-full px-3 py-1.5 text-sm font-bold  outline-sky-400 transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeSection === link.label && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-black   mix-blend-difference"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.9 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>
        <div
          className="cursor-pointer lg:hidden text-md text-black"
          onClick={toggleMenu}
        >
          Menu
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed padding-container z-[999] left-0 top-0 w-full h-screen origin-top z-50 bg-yellow-400 text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center">
                {image ? (
                  <Image
                    src={image}
                    height={50}
                    width={50}
                    alt="Vinayak_tavatam"
                    className="rounded-full"
                  />
                ) : (
                  <span className="text-sm font-semibold tracking-widest ">
                    VT
                  </span>
                )}
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
              {/* nav & social medias */}
              <div className="flex flex-col justify-between h-full">
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center font-lora items-center gap-4 "
                >
                  {NAV_LINKS.map((link, index) => {
                    return (
                      <div className="overflow-hidden" key={index}>
                        <MobileNavLink
                          title={link.label}
                          href={link.href}
                          toggleMenu={toggleMenu}
                        />
                      </div>
                    );
                  })}
                </motion.div>
                {/* social meadia */}
                <div className="flex justify-between sm:justify-around mb-5">
                  {SocialMedias.map((e, i) => (
                    <SocialItems
                      key={i}
                      name={e.name}
                      img={e.img}
                      href={e.href}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href, toggleMenu }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
      onClick={toggleMenu}
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

const SocialItems = ({ name, img, href, key }) => (
  <Link href={href} target="_blank" key={key}>
    <Image
      width={500}
      height={500}
      src={img}
      alt={name}
      className="w-10 h-10 object-contain"
    />
  </Link>
);

export default Navbar;
