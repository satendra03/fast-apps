
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
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function Example() {
  const [step, setStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const runCommand = async () => {
  setIsRunning(true);
  setStep(1);
  await wait(9000);
  setStep(2);
  setIsRunning(false);
};

  const resetDemo = () => {
    setStep(0);
    setIsRunning(false);
  };

  const { data } = useType();
  return (
    <div className="min-h-[70vh] mb-10 p-6 flex flex-col items-center justify-center gap-6">
      <ScrollProgress className="top-[0vh] z-[100]" />
      <div className="flex items-center justify-center">
        <div className="">
          <h1 className="text-3xl font-bold text-gray-500">
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
        {/* <Button
          onClick={resetDemo}
          className="cursor-pointer active:scale-95 transition-all"
          disabled={!isRunning || step === 0}
        >
          Reset Demo
        </Button> */}
        <Button onClick={runCommand} className="cursor-pointer active:scale-95 transition-all border" disabled={isRunning || step > 0}>
          Run Command
        </Button>
      </div>

      <Showcase step={step} />
    </div>
  );
}
