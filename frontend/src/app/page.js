import Transition from "@/components/Animation/Transition";

import About from "@/components/pageComponents/About";

import Contact from "@/components/pageComponents/Contact";
import Hero from "@/components/pageComponents/Hero";
import Projects from "@/components/pageComponents/Projects";

import Cursor from "@/components/Animation/Cursor";
import dynamic from "next/dynamic";
const Dynamic_Skill = dynamic(
  () => import("@/components/pageComponents/Skills"),
  {
    ssr: false,
  }
);
const Dynamic_About = dynamic(
  () => import("@/components/pageComponents/About"),
  { ssr: false }
);
const Dynamic_Hero = dynamic(() => import("@/components/pageComponents/Hero"), {
  ssr: false,
});
const Dynamic_Contact = dynamic(
  () => import("@/components/pageComponents/Contact"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="">
      <>
        <Cursor />
        <>
          <Transition />

          <>
            <>
              <Dynamic_Hero />
              <Dynamic_About />
              <Dynamic_Skill />
              <Projects />
              <Dynamic_Contact/>
            </>
          </>
        </>
      </>
    </main>
  );
}
