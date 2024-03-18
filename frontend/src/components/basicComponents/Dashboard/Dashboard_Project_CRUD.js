import React from "react";
import EditProjects from "./EditProjects";
import { backend_URL } from "@/constants/index";
import Add_project from "./Add_project";

async function Dashboard_Project_CRUD({ token }) {
  let Projects = await fetch(`${backend_URL}project`);
  Projects = await Projects.json();


  return (
    <div className="pt-10">
      <h1 className="text-center font-bold text-2xl">Projects section</h1>
      {/* Add project new */}
      <Add_project token={token.value} />

      {/* all project list */}
      <div className="bg-yellow-200 pt-10">
        <h1 className="text-center py-5">All Projects</h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {Projects.map((e, i) => (
            <>
              <EditProjects
                key={i}
                projectTitle={e.projectTitle}
                projectDetails={e.projectDetails}
                githubLink={e.githubLink}
                pageLink={e.pageLink}
                pageImageLink={e.pageImageLink}
                id={e._id}
                token={token.value}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard_Project_CRUD;
