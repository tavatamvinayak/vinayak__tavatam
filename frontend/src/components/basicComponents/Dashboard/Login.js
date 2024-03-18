"use client"

import React from "react";
import { useState } from "react";
import { backend_URL } from "@/constants/index";
import Cookies from "js-cookie";
function Login() {
      /// / / input access
  const [InputText, setInputText] = useState("");
    const inputField = (e) => {
        setInputText({ ...InputText, [e.target.name]: e.target.value });
      };
      const Login = async (e) => {
        e.preventDefault();
        console.log(InputText);
        const res = await fetch(`${backend_URL}signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(InputText),
        });
        const response = await res.json();
        if (response.Token) {
          Cookies.set("token", response.Token, { expires: 1 });
        }
      };
  return (
    <>
      <div className="  pt-24 flex flex-col items-center px-5">
          <div>
            <h1 className="text-center">Login</h1>
            <form
              onSubmit={Login}
              className="flex flex-col justify-center  gap-y-8"
            >
              <input
                type="text"
                name="Email"
                placeholder="Email"
                className="p-2 w-full"
                onChange={inputField}
              />
              <input
                type="password"
                name="Password"
                placeholder="Password"
                className="p-2  w-full"
                onChange={inputField}
              />
              <button
                className="border p-2 bg-black text-white  w-full"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
    </>
  )
}

export default Login
