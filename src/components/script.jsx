import { useType } from "@/context/typeContext";
import { Check } from "lucide-react";
import React from "react";

function Script() {
  const { setType, data, handleCopy, copied } = useType();
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
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
  );
}

export default Script;
