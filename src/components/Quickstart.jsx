import { useType } from "@/context/typeContext";
import { Check, Clipboard } from "lucide-react";
import React from "react";

function Quickstart() {
  const { setType, data, handleCopy, copied } = useType();
  return (
    <div className="space-y-4 p-4 w-full text-left">
      {/* Content */}

      {/* Intro */}
      <div className="section mb-20" id="quick-start">
        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <p className="text-gray-500">
          Spin up a fully configured{" "}
          <span className="text-[#58C4DC]">React</span> +{" "}
          <span className="text-[#00BCFF]">Tailwind CSS</span> project with a
          fully preconfigured setup in seconds — no boilerplate, no hassle.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="section mb-20" id="prerequisites">
        <h2 className="text-2xl font-bold mb-4">Prerequisites ?</h2>
        <ul className=" text-gray-500 list-disc pl-5">
          <li>
            <span className="text-[#4F9C43]"> Node.js </span> – v16 or higher
          </li>
          <li>
            <span className="text-red-500"> npm </span> – v8 or higher
          </li>
        </ul>
      </div>

      {/* Steps */}
      <div className="section mb-20" id="steps">
        <h2 className="text-2xl font-bold mb-4">How to use?</h2>
        <ol className="text-gray-500 flex flex-col pl-5 list-decimal">
          <li className="my-2">
            <span className="text-white/90"> Run the CLI</span> – Open your
            terminal and run: <br />
            <div className="flex flex-wrap items-center justify-start gap-4 my-2">
              <button className="bg-zinc-800 text-white border border-zinc-700 px-6 py-2 rounded-md text-base flex items-center gap-2 transition-colors hover:bg-zinc-700">
                <code className="">{data.command}</code>
              </button>
              <button
                onClick={handleCopy}
                className="bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md cursor-pointer flex items-center gap-2 active:scale-95 transition-all"
                aria-label="Copy to clipboard"
              >
                {copied ? <Check size={24} /> : <Clipboard size={24} />}
              </button>
            </div>
          </li>
          <li className="my-2">
            <span className="text-white/90"> Choose Options</span> – You'll be
            prompted to:
            <ul className="list-disc list-inside text-gray-500">
              <li>Enter your project name</li>
              <li>
                Select <span className="text-[#F0DB4F]">JavaScript</span> or{" "}
                <span className="text-[#3178C6]">TypeScript</span>
              </li>
            </ul>
          </li>
          <li className="my-2">
            <span className="text-white/90"> Enjoy </span> – Your new project:{" "}
            <br />
            <ul className="list-disc list-inside text-gray-500">
              <li>Project folder is auto-created</li>
              <li>Dependencies are installed automatically</li>
              <li>Development server starts on its own</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Quickstart;
