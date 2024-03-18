import React from "react";
import { Linkedin, MailPlus } from "lucide-react";
import Link from "next/link";

function Email_Linknd() {
  return (
    <>
      <div className="sm:flex justify-center items-center sm:py-32 py-8">
        <div className=" sm:flex justify-center items-center gap-2 border sm:p-10 rounded-2xl sm:rounded-full hover:bg-white hover:shadow-2xl hover:shadow-yellow-200">
          <div className="flex items-center justify-center">
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tavatamvinayak@gmail.com&su=your job Application to [company name]&body=i'm accepted by your job application , come in contact "
              target="_blank"
              className="sm:flex-row flex flex-col  justify-center items-center gap-2 px-1 py-2"
            >
              <button className="rounded-full border border-black p-2 items-center bg-black text-white hover:bg-white hover:text-black  ">
                <MailPlus />
              </button>
              <div className="hover:border-b pb-2 border-gray-500">
                <h3>tavatamvinayak@gmail.com</h3>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              href="https://www.linkedin.com/in/vinayak-tavatam/"
              target="_blank"
              className="sm:flex-row flex flex-col  justify-center items-center gap-2 px-1 py-2"
            >
              <button className="rounded-full border border-black p-2 items-center bg-black text-white hover:bg-white hover:text-black">
                <Linkedin />
              </button>
              <div className="hover:border-b pb-2 border-gray-500">
                <h3>Connect on LinkedIn</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Email_Linknd;
