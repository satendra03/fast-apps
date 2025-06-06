
import React from "react";
import { useType } from "@/context/typeContext";
import { Github, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Foot() {
  const { downloads } = useType();

  return (
    <footer className="z-[50] md:min-h-[10vh] mt-10 flex flex-col text-gray-500 w-full items-center justify-between px-6 sm:px-10 md:px-20 lg:px-64 py-4 border-t border-zinc-800">
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Logo and Name */}
        <div className="flex items-center gap-2 z-0">
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
            to="https://github.com/satendra03/fast-apps/"
            className="hover:text-white transition"
          >
            GitHub
          </Link>
          <Link
            to="https://github.com/satendra03/fast-apps/blob/main/LICENSE"
            className="hover:text-white transition"
          >
            License
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <Link
            to="https://github.com/satendra03"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            to="https://twitter.com/satendra_03"
            aria-label="Twitter"
            className="hover:text-white transition"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            to="https://www.instagram.com/_satendra_03/"
            aria-label="Instagram"
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
