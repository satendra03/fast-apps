// import React from "react";
// import {
//   AnimatedSpan,
//   Terminal,
//   TypingAnimation,
// } from "@/components/magicui/terminal";
// import { useType } from "@/context/typeContext";
// import CreditBox from "./credit";

// const CommandTerminal = ({ step }) => {
//   const { data } = useType();
//   return (
//     <>
//       <div className="flex flex-col gap-y-2 border bg-foreground rounded-t-2xl border-white p-4">
//         <div className="flex flex-row gap-x-2">
//           <div className="h-2 w-2 rounded-full bg-red-500"></div>
//           <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
//           <div className="h-2 w-2 rounded-full bg-green-500"></div>
//         </div>
//       </div>
//       <Terminal className="bg-foreground text-left overflow-scroll">
//         {step == 0 && (
//           <>
//             <TypingAnimation className="text-white">
//               {`> ${data.command}`}
//             </TypingAnimation>
//             <br />
//           </>
//         )}

//         {step == 1 && (
//           <>
//             <AnimatedSpan delay={1500} className="">
//               <span>{"> npx"}</span>
//             </AnimatedSpan>
//             <AnimatedSpan delay={1500} className="">
//               <span>{"> create-react-fast-app"}</span>
//             </AnimatedSpan>
//             <br />

//             <AnimatedSpan delay={2500} className="text-green-500">
//               <span>
//                 ✨ Thank You for using <i>react-fast-app</i>
//               </span>
//             </AnimatedSpan>
//             <AnimatedSpan delay={2500} className="text-gray-500">
//               <span>
//                 This will creat a react app with Tailwind CSS and shadcn UI
//               </span>
//             </AnimatedSpan>
//             <br />

//             <AnimatedSpan delay={3000} className="text-blue-500">
//               <span>✓ Project name?</span>
//             </AnimatedSpan>
//             <AnimatedSpan delay={3000} className="text-gray-500">
//               <span>
//                 <i> use '.' for current folder: </i>
//               </span>
//             </AnimatedSpan>
//             <AnimatedSpan delay={4000} className="text-white">
//               <span> ⟫ myApp</span>
//             </AnimatedSpan>
//             <br />

//             <AnimatedSpan delay={5000} className="text-blue-500">
//               <span>? Choose your language: ...</span>
//             </AnimatedSpan>
//             <AnimatedSpan
//               delay={5000}
//               className="text-yellow-500 flex items-center"
//             >
//               <span>{">"}</span>
//               <span className="underline">Javascript</span>
//             </AnimatedSpan>
//             <AnimatedSpan delay={5000} className="text-blue-500">
//               <span className="ml-2"> TypeScript</span>
//             </AnimatedSpan>
//             <br />

//             <AnimatedSpan delay={6000} className="text-green-500">
//               <span>✓ Project created successfully!</span>
//             </AnimatedSpan>
//             <AnimatedSpan delay={6000} className="text-blue-500">
//               <span>Installing dependencies...</span>
//             </AnimatedSpan>
//             <AnimatedSpan delay={7000} className="text-white">
//               <span>Running npm install.....</span>
//             </AnimatedSpan>
//           </>
//         )}

//         {step >= 2 && (
//           <>
//             <TypingAnimation delay={9000} className="text-green-500">
//               ✅ All done!
//             </TypingAnimation>
//             <TypingAnimation delay={9000} className="text-blue-500">
//               ✨ Happy Development!
//             </TypingAnimation>
//             <AnimatedSpan delay={10000} className="text-muted-foreground">
//               <CreditBox />
//             </AnimatedSpan>
//             <br />

//             <TypingAnimation delay={11000} className="text-white">
//               <span> {">react-fast-app@0.0.0 dev"} </span>
//             </TypingAnimation>
//             <TypingAnimation delay={11000} className="text-white">
//               <span>{"> vite"}</span>
//             </TypingAnimation>
//             <br />
//             <TypingAnimation delay={12000} className="text-muted-foreground">
//               <span>
//                 <span className="text-green-500">VITE v6.3.5 </span>
//                 ready in
//                 <span className="text-white"> 1314 ms</span>
//               </span>
//             </TypingAnimation>
//             <TypingAnimation delay={12000} className="text-muted-foreground">
//               <span>
//                 <span className="text-green-500">➜ </span>{" "}
//                 <span className="text-white">Local:</span>{" "}
//                 <span className="text-blue-500"> http://localhost:5173/ </span>
//               </span>
//             </TypingAnimation>
//             <TypingAnimation delay={12000} className="text-muted-foreground">
//               <span>
//                 <span className="text-green-500">➜ </span>{" "}
//                 <span className="text-white/50">Network: use</span>{" "}
//                 <span className="text-white"> --host </span>{" "}
//                 <span className="text-white/50">to expose</span>
//               </span>
//             </TypingAnimation>
//           </>
//         )}
//       </Terminal>
//     </>
//   );
// };

// export default CommandTerminal;
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

const CommandTerminal = ({ step }) => {
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
        window.open("http://localhost:5173", "_blank");
        setHasOpenedTab(true);
      }, 4500);

      return () => clearTimeout(openTabTimer);
    }
  }, [step, showClearScreen, hasOpenedTab]);

  // return (
  //   <>
  //     <div className="flex flex-col gap-y-2 border text-white bg-black rounded-t-2xl border-gray-600 p-4">
  //       <div className="flex flex-row gap-x-2">
  //         <div className="h-2 w-2 rounded-full bg-red-500"></div>
  //         <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
  //         <div className="h-2 w-2 rounded-full bg-green-500"></div>
  //       </div>
  //     </div>
  //     <Terminal className="bg-black text-left overflow-auto">
  //       {/* Initial command */}
  //       {step === 0 && (
  //         <>
  //           <TypingAnimation className="text-white">{`> ${data.command}`}</TypingAnimation>
  //           <br />
  //         </>
  //       )}

  //       {/* Installation process - only show if not cleared */}
  //       {step === 1 && !showClearScreen && (
  //         <>
  //           <AnimatedSpan delay={1500} className="text-white">
  //             <span>{"> npx create-react-fast-app"}</span>
  //           </AnimatedSpan>
  //           <br />

  //           <AnimatedSpan delay={2500} className="text-green-500">
  //             <span>
  //               ✨ Thank You for using <i>react-fast-app</i>
  //             </span>
  //           </AnimatedSpan>
  //           <AnimatedSpan delay={2500} className="text-gray-500">
  //             <span>
  //               This will create a react app with Tailwind CSS and shadcn UI
  //             </span>
  //           </AnimatedSpan>
  //           <br />

  //           <AnimatedSpan delay={3000} className="text-blue-500">
  //             <span>✓ Project name?</span>
  //           </AnimatedSpan>
  //           <AnimatedSpan delay={3000} className="text-gray-500">
  //             <span>
  //               <i> use '.' for current folder: </i>
  //             </span>
  //           </AnimatedSpan>
  //           <AnimatedSpan delay={4000} className="text-white">
  //             <span> ⟫ myApp</span>
  //           </AnimatedSpan>
  //           <br />

  //           <AnimatedSpan delay={5000} className="text-blue-500">
  //             <span>? Choose your language: ...</span>
  //           </AnimatedSpan>
  //           <AnimatedSpan
  //             delay={5000}
  //             className="text-yellow-500 flex items-center"
  //           >
  //             <span>{">"}</span>
  //             <span className="underline">Javascript</span>
  //           </AnimatedSpan>
  //           <AnimatedSpan delay={5000} className="text-blue-500">
  //             <span className="ml-2"> TypeScript</span>
  //           </AnimatedSpan>
  //           <br />

  //           <AnimatedSpan delay={6000} className="text-green-500">
  //             <span>✓ Project created successfully!</span>
  //           </AnimatedSpan>
  //           <AnimatedSpan delay={6000} className="text-blue-500">
  //             <span>Installing dependencies...</span>
  //           </AnimatedSpan>
  //           <AnimatedSpan delay={7000} className="text-white">
  //             <span>Running npm install.....</span>
  //           </AnimatedSpan>
  //         </>
  //       )}

  //       {/* Clear screen and show dev server startup */}
  //       {step >= 2 && showClearScreen && (
  //         <>
  //           <TypingAnimation delay={1000} className="text-white">
  //             <span>{">react-fast-app@0.0.0 dev"}</span>
  //           </TypingAnimation>
  //           <TypingAnimation delay={1500} className="text-white">
  //             <span>{"> vite"}</span>
  //           </TypingAnimation>
  //           <br />
  //           <TypingAnimation delay={2000} className="text-gray-400">
  //             <span>
  //               <span className="text-green-500">VITE v6.3.5 </span>
  //               ready in
  //               <span className="text-white"> 1314 ms</span>
  //             </span>
  //           </TypingAnimation>
  //           <TypingAnimation delay={3000} className="text-gray-400">
  //             <span>
  //               <span className="text-green-500">➜ </span>{" "}
  //               <span className="text-white">Local:</span>{" "}
  //               <span className="text-blue-500 underline cursor-pointer">
  //                 {" "}
  //                 http://localhost:5173/{" "}
  //               </span>
  //             </span>
  //           </TypingAnimation>
  //           <TypingAnimation delay={3500} className="text-gray-400">
  //             <span>
  //               <span className="text-green-500">➜ </span>{" "}
  //               <span className="text-white/50">Network: use</span>{" "}
  //               <span className="text-white"> --host </span>{" "}
  //               <span className="text-white/50">to expose</span>
  //             </span>
  //           </TypingAnimation>

  //           <AnimatedSpan delay={5000} className="text-green-500">
  //             <span>✨ Happy Development!</span>
  //           </AnimatedSpan>
  //           <AnimatedSpan delay={5500} className="text-gray-400">
  //             <CreditBox />
  //           </AnimatedSpan>
  //         </>
  //       )}

  //       {/* Show completion message before clearing (step 2 but not cleared yet) */}
  //       {step >= 2 && !showClearScreen && (
  //         <>
  //           <TypingAnimation delay={1000} className="text-green-500">
  //             ✅ All done!
  //           </TypingAnimation>
  //           <TypingAnimation delay={1500} className="text-blue-500">
  //             ✨ Starting development server...
  //           </TypingAnimation>
  //         </>
  //       )}
  //     </Terminal>
  //   </>
  // );

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
              <span>{"> npx create-react-fast-app"}</span>
            </AnimatedSpan>
            <br />

            <AnimatedSpan delay={2500} className="text-green-500">
              <span>
                ✨ Thank You for using <i>react-fast-app</i>
              </span>
            </AnimatedSpan>
            <AnimatedSpan delay={2500} className="text-gray-500">
              <span>
                This will create a react app with Tailwind CSS and shadcn UI
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
              ✨ Starting development server...
            </TypingAnimation>
          </>
        )}

        {/* Clear screen and show dev server startup */}
        {step === 2 && showClearScreen && (
          <>
            <TypingAnimation delay={0} className="text-white">
              <span>{">react-fast-app@0.0.0 dev"}</span>
            </TypingAnimation>
            <TypingAnimation delay={500} className="text-white">
              <span>{"> vite"}</span>
            </TypingAnimation>
            <br />
            <TypingAnimation delay={1000} className="text-gray-400">
              <span>
                <span className="text-green-500">VITE v6.3.5 </span>
                ready in
                <span className="text-white"> 1314 ms</span>
              </span>
            </TypingAnimation>
            <TypingAnimation delay={2000} className="text-gray-400">
              <span>
                <span className="text-green-500">➜ </span>{" "}
                <span className="text-white">Local:</span>{" "}
                <span className="text-blue-500 underline cursor-pointer">
                  {" "}
                  http://localhost:5173/{" "}
                </span>
              </span>
            </TypingAnimation>
            <TypingAnimation delay={3000} className="text-gray-400">
              <span>
                <span className="text-green-500">➜ </span>{" "}
                <span className="text-white/50">Network: use</span>{" "}
                <span className="text-white"> --host </span>{" "}
                <span className="text-white/50">to expose</span>
              </span>
            </TypingAnimation>

            <AnimatedSpan delay={4000} className="text-green-500">
              <span>✨ Happy Development!</span>
            </AnimatedSpan>
            <AnimatedSpan delay={4500} className="text-gray-400">
              <CreditBox />
            </AnimatedSpan>
          </>
        )}
      </Terminal>
    </>
  );
};

export default CommandTerminal;
