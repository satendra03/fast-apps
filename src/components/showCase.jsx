// components/Showcase.jsx
"use client";

import React, { useEffect, useState } from "react";
import CommandTerminal from "./command-terminal";
import { useType } from "@/context/typeContext";
import TerminalBackend from "./terminal-backedn";

const Showcase = ({ step }) => {
  const {type} = useType();
  return (
    <div className="grid grid-cols-1 gap-6 w-full h-full p-4">
      <div className="h">
        <h2 className="text-lg font-semibold mb-2">Terminal Output</h2>
        {
          type ? <CommandTerminal step={step} /> : <TerminalBackend step={step} />
        }
      </div>
    </div>
  );
};

export default Showcase;
