// import React, { useEffect } from "react";
// import { Check, Clipboard } from "lucide-react";
// import logo from "/fast-apps.png";
// import { AuroraText } from "@/components/magicui/aurora-text";
// import { DiGithubFull, DiNpm } from "react-icons/di";
// import { useType } from "@/context/typeContext";
// import { Link } from "react-router-dom";
// import { NumberTicker } from "@/components/magicui/number-ticker";


// function Home() {
//   const { setType, data, handleCopy, copied, version, downloads } = useType();
//   const [mounted, setMounted] = React.useState(false);
//   const [count, setCount] = React.useState(0);
//   useEffect(() => {
//     setMounted(true);
//     setCount(downloads);
//   }, []);

//   return (
//     <div className="min-h-[90vh] relative text-white flex flex-col items-center justify-center px-4 text-center">
//       <div className="mb-2 opacity-50 border px-3 rounded-4xl">
//         v{version}
//       </div>
//       <h1 className="text-5xl font-extrabold mb-4 leading-tight">
//         <span className="text-white/50">Do it</span> <i className="">Fast</i>{" "}
//         <span className="text-white/50">with</span> <br />
//         <AuroraText>
//           <code>fast-apps</code>
//         </AuroraText>
//         .
//       </h1>
//       <p className="text-gray-400 max-w-xl mb-8">
//         All set up and ready to go with a single command. <br />
//         Start building instantly, save time, and code faster.
//       </p>
//       <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
//         <button className="bg-zinc-800 text-white border border-zinc-700 px-6 py-2 rounded-md text-base flex items-center gap-2 transition-colors hover:bg-zinc-700">
//           <code className="">{data.command}</code>
//         </button>
//         <button
//           onClick={handleCopy}
//           className="bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md cursor-pointer flex items-center gap-2 active:scale-95 transition-all"
//           aria-label="Copy to clipboard"
//         >
//           {copied ? <Check size={24} /> : <Clipboard size={24} />}
//         </button>
//       </div>
//       {/* Downloads */}
//       <div className="text-gray-400 text-sm mb-2">
        
//       <NumberTicker value={Number(downloads) || 0} className="font-medium text-white/50" />+ <span className="text-white/50">downloads</span>
//       </div>

//       <div className="flex items-center mb-12 w-[50%] justify-center">
//         <div className="flex items-center w-full justify-between">
//           <Link to={data.githubUrl} target="_blank" rel="noopener noreferrer">
//             <DiGithubFull
//               size={50}
//               className="text-white/50 hover:text-white teansition-all"
//             />
//           </Link>
//           <Link to={data.npmUrl} target="_blank" rel="noopener noreferrer">
//             <DiNpm
//               size={50}
//               className="text-white/50 hover:text-white teansition-all"
//             />
//           </Link>
//         </div>
//       </div>
//       <div className="flex flex-wrap justify-center gap-6 max-w-5xl text-gray-400 text-sm">
//         <div className="relative flex flex-col items-center cursor-help group">
//           🎁 Free and open-source
//           <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
//             You can use it freely and modify it!
//           </span>
//         </div>

//         <div className="relative flex flex-col items-center cursor-help group">
//           😀 Easy to use
//           <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
//             Beginner-friendly and simple UI.
//           </span>
//         </div>

//         <div className="relative flex flex-col items-center cursor-help group">
//           ✅ Production-ready
//           <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
//             Suitable for real-world applications.
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useState } from "react";
import { Check, Clipboard } from "lucide-react";
import logo from "/fast-apps.png";
import { AuroraText } from "@/components/magicui/aurora-text";
import { DiGithubFull, DiNpm } from "react-icons/di";
import { useType } from "@/context/typeContext";
import { Link } from "react-router-dom";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

function Home() {
  const { setType, data, handleCopy, copied, version, downloads } = useType();
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setMounted(true);
    setCount(downloads);
  }, []);

  return (
    <div className="min-h-[85vh] md:min-h-[80vh] relative text-white flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-center">
      <ScrollProgress className="top-[0vh] z-[100]" />
      {/* Version Badge */}
      <div className="mb-2 opacity-50 border px-3 py-1 rounded-full text-sm">
        v{version}
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
        <span className="text-white/50">Do it</span>{" "}
        <i className="">Fast</i>{" "}
        <span className="text-white/50">with</span>
        <br />
        <AuroraText>
          <code>fast-apps</code>
        </AuroraText>
        .
      </h1>

      {/* Description */}
      <p className="text-gray-400 max-w-xl mb-5 text-sm sm:text-base">
        All set up and ready to go with a single command. <br />
        Start building instantly, save time, and code faster.
      </p>

      {/* Command + Copy */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
        <button className="bg-zinc-800 text-white border border-zinc-700 px-6 py-2 rounded-md text-sm sm:text-base flex items-center gap-2 transition-colors hover:bg-zinc-700">
          <code>{data.command}</code>
        </button>
        <button
          onClick={handleCopy}
          className="bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md cursor-pointer flex items-center gap-2 active:scale-95 transition-all"
          aria-label="Copy to clipboard"
        >
          {copied ? <Check size={24} /> : <Clipboard size={24} />}
        </button>
      </div>

      {/* Downloads */}
      <div className="text-gray-400 text-sm mb-5">
        <NumberTicker value={Number(downloads) || 0} className="font-medium text-white/50" />+{" "}
        <span className="text-white/50">downloads</span>
      </div>

      {/* GitHub + NPM Icons */}
      <div className="flex items-center mb-5 w-full max-w-md justify-center gap-12">
        <Link to={data.githubUrl} target="_blank" rel="noopener noreferrer">
          <DiGithubFull size={50} className="text-white/50 hover:text-white transition-all" />
        </Link>
        <Link to={data.npmUrl} target="_blank" rel="noopener noreferrer">
          <DiNpm size={50} className="text-white/50 hover:text-white transition-all" />
        </Link>
      </div>

      {/* Feature Tags with Tooltips */}
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl text-gray-400 text-sm">
        <div className="relative flex flex-col items-center cursor-help group text-center">
          🎁 Free and open-source
          <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            You can use it freely and modify it!
          </span>
        </div>

        <div className="relative flex flex-col items-center cursor-help group text-center">
          😀 Easy to use
          <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            Beginner-friendly and simple UI.
          </span>
        </div>

        <div className="relative flex flex-col items-center cursor-help group text-center">
          ✅ Production-ready
          <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            Suitable for real-world applications.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
