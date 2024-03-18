import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 px-4 text-center text-gray-500">
      <small className="pb-2 block text-xs font-semibold">
        &copy; 2024 <span className="text-bold hover:font-extrabold">vinayak_tavatam</span>. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js@14 (App Router & Server Actions), Tailwind CSS,
        Framer Motion.
      </p>
    </footer>
  );
}