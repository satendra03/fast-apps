import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Example from "./pages/Example";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";
import NotFound from "./pages/NotFound";
import GettingStartedWrapper from "./components/wrapper";
import Introduction from "./components/intro";
import Quickstart from "./components/Quickstart";
import Docsq from "./pages/Docsq";

function App() {
  return (
    <div
      className="min-h-screen relative bg-black text-white flex flex-col items-center justify-center text-center 
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_50%,transparent_80%)]"
    >
      <Navbar />
        <main className="flex-grow flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route
          path="/docs"
          element={
            <Navigate to={"/docs/getting-started/introduction"} replace />
          }
        />
        <Route path="/docs/*" element={<Docs />} />
        <Route path="/docs/getting-started/introduction" element={<Docs />} />
        <Route path="/docs/getting-started/quick-start-guide" element={<Docsq />} />
        {/* <Route
          path="/docs/getting-started/*"
          element={<GettingStartedWrapper />}
        >
          <Route path="introduction" index element={<Docs comp={<Introduction />} />} />
          <Route path="quick-start-guide" element={<Docs comp={<Quickstart />} />} />
        </Route> */}
        <Route path="/demo" element={<Example />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Foot />
    </div>
  );
}

export default App;

{
  /* <div className="w-screen h-screen flex items-center flex-col justify-center text-center pb-2 text-3xl font-semibold tracking-tight bg-black">
      <h1 className="text-3xl font-bold text-white/50 mb-2 font-mono">ReactFast Application is Ready!</h1>
      <code className="relative rounded bg-muted-foreground px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        <a
          href="https://github.com/satendra03"
          target="_blank"
          rel="noopener noreferrer"
        >
          by @satendra03
        </a>
      </code>
    </div> */
}

// Chnaged
// index.html
// index.css
// package.json
