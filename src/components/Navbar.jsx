import { useType } from "@/context/typeContext";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

import { navMenu } from "@/data";

const Navbar = () => {
  const location = useLocation();
  const { setType } = useType();
  return (
    <nav className="z-50 min-h-[10vh] sticky bg-foreground top-0 left-0 flex w-full items-center justify-between px-64 py-4 border-b border-zinc-800">
      <div className="flex items-center gap-2">
        <img src="/fast-apps.png" alt="logo" className="h-8" />
      </div>
      <div className="flex items-center gap-3">
        {navMenu?.map((item) => {
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm px-3 py-2 transition font-medium ${
                item.href === "/"
                  ? location.pathname === "/" // only highlight on exact match
                    ? "border-b"
                    : "hover:text-gray-300"
                  : location.pathname.startsWith(item.href)
                  ? "border-b"
                  : "hover:text-gray-300"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
        <Button
          onClick={() => setType((type) => !type)}
          className="px-3 rounded-full font-medium text-xs cursor-pointer active:scale-95 transition-all bg-background text-foreground hover:bg-gray-200"
        >
          Switch
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
