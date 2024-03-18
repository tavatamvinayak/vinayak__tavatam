import React from "react";

import { backend_URL } from "@/constants/index";
import ProjectsSection from "../basicComponents/Project/ProjectsSection";
async function Projects() {
  const res = await fetch(`${backend_URL}project`);
  const data = await res.json();

  return (
    <>
      <ProjectsSection Projects_Array={data} />
    </>
  );
}


 

export default  Projects;
