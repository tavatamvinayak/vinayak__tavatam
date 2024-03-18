"use client";
import React from "react";

import Call from "../basicComponents/contact/Call";
import { useSectionInView } from "@/lib/hooks";
import Email_Linknd from "../basicComponents/contact/Email_Linknd";

function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <section ref={ref} id="contact" className="pt-20 px-8 h-full">
      <p className="text-gray-500 text-center">Get In Touch</p>
      <h1 className="font-bold text-center  text-2xl sm:text-4xl pb-16">
        Contact Me
      </h1>

      <Email_Linknd />
      <Call />
    </section>
  );
}

export default Contact;
