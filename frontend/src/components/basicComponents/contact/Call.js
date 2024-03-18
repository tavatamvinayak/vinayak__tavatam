import React from "react";
import Link from "next/link";
import { PhoneOutgoing, Mail, MapPin } from "lucide-react";
function Call() {
  return (
    <>
      <div className="sm:flex justify-center items-center  ">
        <div className=" sm:flex justify-center items-center gap-2 border sm:p-10 rounded-2xl sm:rounded-full hover:bg-white hover:shadow-2xl hover:shadow-yellow-200">
          <div className="flex items-center justify-center">
            <Link
              href="tel:8830850302"
              target="_blank"
              className="sm:flex-row flex flex-col  justify-center items-center gap-2 px-1 py-2"
            >
              <button className="rounded-full border border-black p-2 items-center bg-black text-white hover:bg-white hover:text-black  ">
                <PhoneOutgoing />
              </button>
              <div className="hover:border-b pb-2 border-gray-500">
                <h3>+91 8830850302</h3>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              href="https://maps.app.goo.gl/UcHJit3YWLRrxk3DA"
              target="_blank"
              className="sm:flex-row flex flex-col  justify-center items-center gap-2 px-1 py-2"
            >
              <button className="rounded-full border border-black p-2 items-center bg-black text-white hover:bg-white hover:text-black">
                <MapPin />
              </button>
              <div className="hover:border-b pb-2 border-gray-500">
                <h3>Solapur ,Maharashtra,india</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Call;
