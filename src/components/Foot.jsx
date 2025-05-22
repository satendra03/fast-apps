// import React from 'react'

// function Foot() {
//   return (
//     <div className='z-50 min-h-[10vh] mt-10  flex  flex-col text-gray-500 w-full items-center justify-between px-64 py-4 border-t border-zinc-800 '>
//         <span>Released under the MIT License. (b040d547)</span>
//         <span>Copyright © {new Date().getFullYear()} - present fast-apps & Contributors</span></div>
//   )
// }

// export default Foot

import { useType } from "@/context/typeContext";
import { Github, Twitter, BookOpenCheck, LifeBuoy, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Foot() {

    const { downloads } = useType();
  return (
    <footer className="z-50 min-h-[10vh] mt-10  flex  flex-col text-gray-500 w-full items-center justify-between px-64 py-4 border-t border-zinc-800">
      <div className="mx-auto flex w-full px-20 flex-col items-center justify-between gap-8 sm:flex-row">
        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          <img src="/fast-apps.png" alt="logo" className="h-8" />
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            to="/docs/getting-started/introduction"
            className="hover:text-white transition"
          >
            Docs
          </Link>
          <Link
            href="https://github.com/satendra03/fast-apps/"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </Link>
          <Link to="https://github.com/satendra03/fast-apps/blob/main/LICENSE" className="hover:text-white transition">
            License
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <Link
            to="https://github.com/satendra03"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            to="https://twitter.com/satendra_03"
            target="_blank"
            aria-label="Twitter"
            className="hover:text-white transition"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            to="https://www.instagram.com/_satendra_03/"
            target="_blank"
            aria-label="Discord"
            className="hover:text-white transition"
          >
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 text-center text-xs text-zinc-500">
        <p>Released under the MIT License.</p>
        <p>Open-source. Free forever. MIT Licensed.</p>
        <p>© {new Date().getFullYear()} fast-apps — Built by dev, for devs ❤️</p>
      </div>

     
    </footer>
  );
}
