"use client";
import React, { useState, useEffect } from "react";
import {backend_URL} from '@/constants/index';
import Image from 'next/image'
import { useRouter } from "next/navigation";
import bg from '../../../../public/person/bg3.png'
function EditProjects({
  projectTitle,
  projectDetails,
  githubLink,
  pageLink,
  pageImageLink,
  token,
  id,
  key
}) {
  const router = useRouter();
  // console.log(token)
  // update project
  const [InputText, setInputText] = useState("");
  const [Open, setOpen] = useState(false);
  const inputField = (e) => {
    setInputText({ ...InputText, [e.target.name]: e.target.value });
  };
  const Update = async (e) => {
    e.preventDefault();
    // console.log(InputText);
    const res = await fetch(`${backend_URL}project/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(InputText),
    });
    const response = await res.json();
    // console.log(response);
    if (!response.error) {
      alert(`Project has been updated`);
    } else {
      alert(res.error);
    }
  };

  //   delate Project

  const [dltOpen, setDltOpen] = useState(false);
  const handleDelate = async (e) => {
    const delate = await fetch(`${backend_URL}project/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const Yes = prompt("Are you sure you want to" , true)
    if(Yes){
      const res = await delate.json();
      if (!res.error) {
        alert(`your Project has been deleted`);
      } else {
        alert(res.error);
      }
    }else{
      alert("Your project has been NOT deleted ");
    }
  };

  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6 border border-yellow-300 shadow-lg m-1" key={key}>
      <div className="rounded-lg h-64 overflow-hidden">
        <Image
        width={1000}
        height={1000}
        style={{ objectFit: 'contain',}}
          alt="content"
          className=" h-full w-full"
          src={ pageImageLink || bg }
        />
      </div>
      <input
        type="text"
        className="text-xl font-medium title-font text-gray-900 mt-5"
        defaultValue={projectTitle}
        name="projectTitle"
        onChange={inputField}
      ></input>
      <textarea
        type="text"
        defaultValue={projectDetails}
        name="projectDetails"
        onChange={inputField}
        className="text-base leading-relaxed mt-2 w-full"
      ></textarea>
      <div className="flex justify-between">
        <button
          className="p-5 border-black hover:bg-black hover:text-white rounded-full border-2 "
          onClick={() => {
            setOpen(true);
          }}
          onDoubleClick={() => {
            setOpen(false);
          }}
        >
          Edit
        </button>
        <button
          className="p-5 border-black hover:bg-black hover:text-white rounded-xl border-2 "
          onClick={() => {
            setDltOpen(true);
          }}
          onDoubleClick={() => {
            setDltOpen(false);
          }}
        >
          Delate
        </button>
      </div>
      {Open ? (
        <>
          <div className="pt-4">
            <form
              onSubmit={Update}
              className="flex flex-col justify-center items-center gap-y-4"
            >
              <textarea
                type="text"
                name="githubLink"
                placeholder="github link"
                className="w-full text-center"
                onChange={inputField}
                defaultValue={githubLink}
              />
              <textarea
                type="text"
                name="pageLink"
                placeholder="page  Link"
                className="w-full text-center"
                onChange={inputField}
                defaultValue={pageLink}
              />
              <textarea
                type="text"
                name="pageImageLink"
                placeholder="page Image Link"
                className="w-full text-center"
                onChange={inputField}
                defaultValue={pageImageLink}
              />
              <input
                type="text"
                name="token"
                placeholder="token"
                className="h-0 text-center invisible"
                onChange={inputField}
                defaultValue={token}
              />
              <button
                type="submit"
                className="p-4  border-black hover:bg-black hover:text-white rounded-full border-2"
              >
                Update Project
              </button>
            </form>
          </div>
        </>
      ) : dltOpen ? (
        <>
          <div className="pt-4 bg-red-300 text-white flex flex-col justify-center gap-2 px-5">
            <button
              className=" border-black hover:bg-black hover:text-white rounded-xl border-2"
              onClick={handleDelate}
            >
              Confirm
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default EditProjects;
