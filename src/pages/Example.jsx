// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// const Home = () => <div className="p-8">Welcome to the <b>Home</b> page!</div>;
// const About = () => <div className="p-8">This is the <b>About</b> page.</div>;

// const Example = () => (
//   <div className="min-h-[90vh]">
//     <nav className="min-h-[90vh] flex gap-4 p-4 bg-zinc-900 text-white">
//       <Link to="/examples" className="hover:underline">Home</Link>
//       <Link to="/examples/about" className="hover:underline">About</Link>
//     </nav>
//     <Routes>
//       <Route path="/examples" element={<Home />} />
//       <Route path="/examples/about" element={<About />} />
//     </Routes>
//   </div>
// );

// export default Example;

// import React from 'react'

// function Example() {
//   return (
//     <div>Example</div>
//   )
// }

// export default Example

// "use client"

import { useState } from "react";
// import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CommandTerminal from "@/components/command-terminal";
import FolderStructure from "@/components/folder-structure";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useType } from "@/context/typeContext";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import Showcase from "@/components/showCase";

export default function Example() {
  const [step, setStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const runCommand = async () => {
  setIsRunning(true);
  await wait(1000);
  setStep(1);
  await wait(8000);
  setStep(2);
  await wait(4000);
  setStep(0);
  setIsRunning(false);
};

  const resetDemo = () => {
    setStep(0);
    setIsRunning(false);
  };

  const { data } = useType();
  return (
    <div className="min-h-[90vh] p-6 flex flex-col gap-6">
      <div className="flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-bold">
            <AuroraText>
              <code>fast-apps</code>
            </AuroraText>{" "}
            command demo
          </h1>
          <p className="text-muted-foreground mt-2">
            See what happens when you run <br />
            <code className="bg-muted-foreground text-white/90 px-2 py-1 rounded">
              {data.command}
            </code>
          </p>
        </div>
      </div>

      <div className="flex gap-2 items-center justify-center">
        <Button
          variant="outline text-muted-foreground"
          onClick={resetDemo}
          disabled={isRunning || step === 0}
        >
          Reset Demo
        </Button>
        <Button onClick={runCommand} disabled={isRunning || step > 0}>
          Run Command
        </Button>
      </div>

      <Showcase step={step} />
    </div>
  );
}
