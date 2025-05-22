// components/Showcase.jsx
"use client";

import React, { useEffect, useState } from "react";
import CommandTerminal from "./command-terminal";
import FolderStructure from "./folder-structure";

const Showcase = ({ step }) => {
  return (
    <div className="grid grid-cols-1 gap-6 w-full h-full p-4">
      <div className="h">
        <h2 className="text-lg font-semibold mb-2">Terminal Output</h2>
        <CommandTerminal step={step} />
      </div>
    </div>
  );
};

export default Showcase;
