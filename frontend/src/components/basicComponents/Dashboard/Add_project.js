"use client"
import { backend_URL } from "@/constants";
import React, { useState } from "react";

function Add_project({token}) {

  /// / / input access
  const [InputText, setInputText] = useState("");
  const inputField = (e) => {
    setInputText({ ...InputText, [e.target.name]: e.target.value });
  };

  // create a new project
  const ProjectSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${backend_URL}project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(InputText),
    });
    const response = await res.json();

    if (res) {
      alert("Project Added Successfully");
 
    }
  };
  return (
    <>
      <div className="border border-2 ">
        {/* add new project and edit */}
        <div className="">
          <form
            onSubmit={ProjectSubmit}
            className="flex flex-col justify-center items-center gap-y-8"
          >
            <textarea
              type="text"
              name="projectTitle"
              placeholder="project Title"
              className="w-full text-center"
              onChange={inputField}
            />
            <textarea
              type="text"
              name="projectDetails"
              placeholder="Project Details"
              className="w-full text-center"
              onChange={inputField}
            />
            <textarea
              type="text"
              name="githubLink"
              placeholder="github link"
              className="w-full text-center"
              onChange={inputField}
            />
            <textarea
              type="text"
              name="pageLink"
              placeholder="page  Link"
              className="w-full text-center"
              onChange={inputField}
            />
            <textarea
              type="text"
              name="pageImageLink"
              placeholder="page Image Link"
              className="w-full text-center"
              onChange={inputField}
            />

            <button type="submit" className="p-4 border ">
              Add Project
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add_project;
