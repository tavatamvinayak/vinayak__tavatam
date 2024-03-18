"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import ProjectCard from "./ProjectCard";

function ProjectsSection({ Projects_Array }) {
  const { ref } = useSectionInView("Projects");
  return (
    <>
      <section
        ref={ref}
        id="projects"
        className="mx-auto max-w-[1440px] h-full  p-6 lg:px-20 3xl:px-0  "
      >
        <h3 className="text-center  text-2xl sm:text-4xl font-bold mb-4 py-5">
          My Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto  ">
          {/* projects Card */}

          {!Projects_Array && Projects_Array.length === 0
            ? "Loading..."
            : Projects_Array.map((e,index) => (
                <>
                  <ProjectCard
                    key={index}
                    title={e.projectTitle || "Project"}
                    description={
                      e.projectDetails || "Project Details not provided sry"
                    }
                    gitLink={e.githubLink || "github Link not provided sry"}
                    webLink={e.pageLink || "page Link not provided"}
                    Img={e.pageImageLink || "page Image not provided"}
                  />
                </>
              ))}
        </div>
      </section>
    </>
  );
}

export default ProjectsSection
