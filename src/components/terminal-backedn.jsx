("use client");

import { useEffect, useState } from "react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { useType } from "@/context/typeContext";
import CreditBox from "./credit";

const credit = `
╭─────────────────────────────────────────────╮
│                                             │
│   ✨  Created with ❤️ by Satendra Parteti  │
│   🔗 GitHub: https://github.com/satendra03 │
│                                             │
╰─────────────────────────────────────────────╯
`;

const TerminalBackend = ({ step }) => {
  const { data } = useType();
  const [showClearScreen, setShowClearScreen] = useState(false);
  const [hasOpenedTab, setHasOpenedTab] = useState(false);

  // Reset states when step changes back to 0
  useEffect(() => {
    if (step === 0) {
      setShowClearScreen(false);
      setHasOpenedTab(false);
    }
  }, [step]);

  // Handle terminal clearing after installation completes
  useEffect(() => {
    if (step === 2 && !showClearScreen) {
      // Wait for completion messages to show, then clear
      const clearTimer = setTimeout(() => {
        setShowClearScreen(true);
      }, 3000); // Wait 3 seconds after step 2 starts

      return () => clearTimeout(clearTimer);
    }
  }, [step, showClearScreen]);

  // Handle opening new tab after "to expose" line appears
  useEffect(() => {
    if (step === 2 && showClearScreen && !hasOpenedTab) {
      // Wait for the "to expose" line to appear (4.5 seconds after clear screen)
      const openTabTimer = setTimeout(() => {
        window.open("http://localhost:5000", "_blank");
        setHasOpenedTab(true);
      }, 4500);

      return () => clearTimeout(openTabTimer);
    }
  }, [step, showClearScreen, hasOpenedTab]);

  return (
    <>
      <div className="flex flex-col gap-y-2 border bg-black rounded-t-2xl border-gray-600 p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <Terminal className="bg-black text-left overflow-auto">
        {/* Initial command */}
        {step === 0 && (
          <>
            <TypingAnimation className="text-white">{`> ${data.command}`}</TypingAnimation>
            <br />
          </>
        )}

        {/* Installation process - only show if not cleared */}
        {step === 1 && (
          <>
            <AnimatedSpan delay={1500} className="text-white">
              <span>{"> npx"}</span>
              <span>{"> npx create-node-fast-server"}</span>
            </AnimatedSpan>
            <br />

            <AnimatedSpan delay={2500} className="text-green-500">
              <span>
                ✨ Thank You for using <i>node-fast-server</i>
              </span>
            </AnimatedSpan>
            <AnimatedSpan delay={2500} className="text-gray-500">
              <span>
                This will create a Node.js server boilerplate with minimal
                setup.
              </span>
            </AnimatedSpan>
            <br />

            <AnimatedSpan delay={3000} className="text-blue-500">
              <span>✓ Project name?</span>
            </AnimatedSpan>
            <AnimatedSpan delay={3000} className="text-gray-500">
              <span>
                <i> use '.' for current folder: </i>
              </span>
            </AnimatedSpan>
            <AnimatedSpan delay={4000} className="text-white">
              <span> ⟫ myApp</span>
            </AnimatedSpan>
            <br />

            <AnimatedSpan delay={5000} className="text-blue-500">
              <span>? Choose your language: ...</span>
            </AnimatedSpan>
            <AnimatedSpan
              delay={5000}
              className="text-yellow-500 flex items-center"
            >
              <span>{">"}</span>
              <span className="underline">Javascript</span>
            </AnimatedSpan>
            <AnimatedSpan delay={5000} className="text-blue-500">
              <span className="ml-2"> TypeScript</span>
            </AnimatedSpan>
            <br />

            <AnimatedSpan delay={6000} className="text-green-500">
              <span>✓ Project created successfully!</span>
            </AnimatedSpan>
            <AnimatedSpan delay={6000} className="text-blue-500">
              <span>Installing dependencies...</span>
            </AnimatedSpan>
            <AnimatedSpan delay={7000} className="text-white">
              <span>Running npm install.....</span>
            </AnimatedSpan>
          </>
        )}

        {/* Show completion message before clearing (step 2 but not cleared yet) */}
        {step === 2 && !showClearScreen && (
          <>
            <TypingAnimation delay={0} className="text-green-500">
              ✅ All done!
            </TypingAnimation>
            <TypingAnimation delay={1000} className="text-blue-500">
              ✨ Happy Backend development...
            </TypingAnimation>
            <AnimatedSpan delay={1500} className="text-gray-400">
              <CreditBox />
            </AnimatedSpan>
          </>
        )}

        {/* Clear screen and show dev server startup */}
        {step === 2 && showClearScreen && (
          <>
            <TypingAnimation delay={0} className="text-white">
              <span>{"> node-mongodb-js@1.0.0 dev"}</span>
            </TypingAnimation>
            <TypingAnimation delay={500} className="text-white">
              <span>{">  nodemon src/server.js"}</span>
            </TypingAnimation>
            <br />
            <TypingAnimation delay={1000} className={"text-yellow-500"}>[nodemon] 3.1.10 </TypingAnimation>
            <TypingAnimation delay={1000} className={"text-yellow-500"}>
              [nodemon] to restart at any time, enter `rs`
            </TypingAnimation>
            <TypingAnimation delay={1000} className={"text-yellow-500"}>
              [nodemon] watching path(s): *.*
            </TypingAnimation>
            <TypingAnimation
              delay={1000}
              className={"text-yellow-500"}
            ></TypingAnimation>

            <TypingAnimation delay={2000} className="text-green-500">
              [nodemon] starting `node src/server.js`
            </TypingAnimation>
            <TypingAnimation delay={3000} className="text-white">
              MongoDB connected
            </TypingAnimation>

            <AnimatedSpan delay={4000} className="text-white">
              Server running on port 5000
            </AnimatedSpan>
          </>
        )}
      </Terminal>
    </>
  );
};

export default TerminalBackend;
