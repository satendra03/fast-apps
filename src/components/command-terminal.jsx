// import { useEffect, useRef, useState } from "react";
// import { Loader2 } from "lucide-react";
// import {
//   AnimatedSpan,
//   Terminal,
//   TypingAnimation,
// } from "@/components/magicui/terminal";
// import { useType } from "@/context/typeContext";

// export default function CommandTerminal({ step, isRunning, className }) {
//   const terminalRef = useRef(null);
//   const [output, setOutput] = useState(["$ npm run my-command"]);

//   useEffect(() => {
//     if (step >= 1) {
//       setOutput((prev) => [
//         ...prev,
//         "> my-project@1.0.0 my-command",
//         "> node scripts/setup.js",
//         "",
//         "🚀 Initializing project setup...",
//       ]);
//     }

//     if (step >= 2) {
//       setOutput((prev) => [
//         ...prev,
//         "✅ Created directory: ./src",
//         "✅ Created directory: ./dist",
//         "✅ Created directory: ./assets",
//         "📦 Installing dependencies...",
//       ]);
//     }

//     if (step >= 3) {
//       setOutput((prev) => [
//         ...prev,
//         "✅ Dependencies installed successfully",
//         "📝 Generated configuration files",
//         "  - config.js",
//         "  - index.js",
//         "  - utils.js",
//         "",
//         "🎉 Setup complete! Your project is ready to use.",
//         "",
//         "$ ",
//       ]);
//     }
//   }, [step]);

//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [output]);

//   const { data } = useType();

//   // return (
//   //   <div className="flex-1 bg-black text-green-400 font-mono text-sm p-4 rounded-md overflow-auto" ref={terminalRef}>
//   //     {output.map((line, index) => (
//   //       <div key={index} className={line === "" ? "h-4" : ""}>
//   //         {line}
//   //       </div>
//   //     ))}
//   //     {isRunning && (
//   //       <div className="flex items-center">
//   //         <Loader2 className="h-4 w-4 animate-spin mr-2" />
//   //         <span>Processing...</span>
//   //       </div>
//   //     )}
//   //   </div>
//   // )

//   return (
//     <Terminal className={`bg-foreground text-left ${className}`}>
//       {/* Always show command input */}
//       <TypingAnimation className="text-white">{data.command}</TypingAnimation>

//       {step >= 1 && (
//         <AnimatedSpan delay={100} className="text-green-500">
//           <span>✔ Preflight checks.</span>
//         </AnimatedSpan>
//       )}
//       {step >= 2 && (
//         <>
//           <AnimatedSpan delay={200} className="text-green-500">
//             <span>✔ Verifying framework. Found Next.js.</span>
//           </AnimatedSpan>
//           <AnimatedSpan delay={400} className="text-green-500">
//             <span>✔ Validating Tailwind CSS.</span>
//           </AnimatedSpan>
//           <AnimatedSpan delay={600} className="text-green-500">
//             <span>✔ Validating import alias.</span>
//           </AnimatedSpan>
//         </>
//       )}
//       {step >= 3 && (
//         <>
//           <AnimatedSpan delay={800} className="text-green-500">
//             <span>✔ Writing components.json.</span>
//           </AnimatedSpan>
//           <AnimatedSpan delay={1000} className="text-green-500">
//             <span>✔ Checking registry.</span>
//           </AnimatedSpan>
//           <AnimatedSpan delay={1200} className="text-green-500">
//             <span>✔ Updating tailwind.config.ts</span>
//           </AnimatedSpan>
//           <AnimatedSpan delay={1400} className="text-green-500">
//             <span>✔ Updating app/globals.css</span>
//           </AnimatedSpan>
//           <AnimatedSpan delay={1600} className="text-green-500">
//             <span>✔ Installing dependencies.</span>
//           </AnimatedSpan>
//           <AnimatedSpan delay={1800} className="text-blue-500">
//             <span>ℹ Updated 1 file:</span>
//             <span className="pl-2">- lib/utils.ts</span>
//           </AnimatedSpan>
//           <TypingAnimation delay={2000} className="text-muted-foreground">
//             Success! Project initialization completed.
//           </TypingAnimation>
//           <TypingAnimation delay={2200} className="text-muted-foreground">
//             You may now add components.
//           </TypingAnimation>
//         </>
//       )}
//     </Terminal>
//   );
// }

// components/CommandTerminal.jsx
import React from "react";
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
  return (
    <>
      <div className="flex flex-col gap-y-2 border bg-foreground rounded-t-2xl border-white p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <Terminal className="bg-foreground text-left overflow-scroll">
        {step == 0 && (
          <>
            <TypingAnimation className="text-white">
              {`> ${data.command}`}
            </TypingAnimation>
            <br />
          </>
        )}

        {step == 1 && (
          <>
            <AnimatedSpan delay={1500} className="">
              <span>{"> npx"}</span>
            </AnimatedSpan>
            <AnimatedSpan delay={1500} className="">
              <span>{"> create-react-fast-app"}</span>
            </AnimatedSpan>
            <br />

            <AnimatedSpan delay={2500} className="text-green-500">
              <span>
                ✨ Thank You for using <i>react-fast-app</i>
              </span>
            </AnimatedSpan>
            <AnimatedSpan delay={2500} className="text-gray-500">
              <span>
                This will creat a react app with Tailwind CSS and shadcn UI
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

        {step >= 2 && (
          <>
            <TypingAnimation delay={9000} className="text-green-500">
              ✅ All done!
            </TypingAnimation>
            <TypingAnimation delay={9000} className="text-blue-500">
              ✨ Happy Development!
            </TypingAnimation>
            <AnimatedSpan delay={10000} className="text-muted-foreground">
              <CreditBox />
            </AnimatedSpan>
            <br />

            <TypingAnimation delay={11000} className="text-white">
              <span> {">react-fast-app@0.0.0 dev"} </span>
            </TypingAnimation>
            <TypingAnimation delay={11000} className="text-white">
              <span>{"> vite"}</span>
            </TypingAnimation>
            <br />
            <TypingAnimation delay={12000} className="text-muted-foreground">
              <span>
                <span className="text-green-500">VITE v6.3.5 </span>
                ready in
                <span className="text-white"> 1314 ms</span>
              </span>
            </TypingAnimation>
            <TypingAnimation delay={12000} className="text-muted-foreground">
              <span>
                <span className="text-green-500">➜ </span>{" "}
                <span className="text-white">Local:</span>{" "}
                <span className="text-blue-500"> http://localhost:5173/ </span>
              </span>
            </TypingAnimation>
            <TypingAnimation delay={12000} className="text-muted-foreground">
              <span>
                <span className="text-green-500">➜ </span>{" "}
                <span className="text-white/50">Network: use</span>{" "}
                <span className="text-white"> --host </span>{" "}
                <span className="text-white/50">to expose</span>
              </span>
            </TypingAnimation>
          </>
        )}
      </Terminal>
    </>
  );
};

export default CommandTerminal;

{
  /* <TypingAnimation delay={9000} className="text-muted-foreground">
            │ │
          </TypingAnimation>
          <TypingAnimation delay={9500} className="text-muted-foreground">
            │ ✨ Created with ❤️ by Satendra Parteti │
          </TypingAnimation>
          <TypingAnimation delay={11000} className="text-muted-foreground">
            │ 🔗 GitHub: https://github.com/satendra03 │
          </TypingAnimation>
          <TypingAnimation delay={10500} className="text-muted-foreground">
            │ │
          </TypingAnimation>
          <TypingAnimation delay={11000} className="text-muted-foreground">
            ╰───────────────────────────────────────────────╯
          </TypingAnimation> */
}
