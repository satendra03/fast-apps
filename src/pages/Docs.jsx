import { ScrollProgress } from "@/components/magicui/scroll-progress";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { leftSideMenu, navMenu, rightSideMenu } from "@/data";
import { Link, useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AuroraText } from "@/components/magicui/aurora-text";
import { FileTreeDemo } from "@/components/folderstr";
import { useType } from "@/context/typeContext";
import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";
import { Check, Clipboard } from "lucide-react";

// export const rightSideMenu = [
//   { id: "intro", label: "Introduction" },
//   { id: "why", label: "Why Fast-Apps?" },
//   { id: "folder-structure", label: "Folde Structure" },
//   { id: "install", label: "Installation" },
//   { id: "usage", label: "Usage" },
//   { id: "contributing", label: "Contributing" },
//   { id: "license", label: "License" },
//   { id: "faq", label: "FAQ" },
// ];

const Docs = () => {
  const [active, setActive] = useState("intro");
  const pathname = useLocation().pathname;
  const path = pathname.split("/");
  path[0] = "Home";
  const pathName = path[0] ? path[0] : "docs";
  const offset = window.innerHeight * 0.3;

  //   const { data } = useType();
  const { setType, data, handleCopy, copied } = useType();

  useEffect(() => {
    const handleScroll = () => {
      let current = "intro";
      for (let section of rightSideMenu) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= window.scrollY + offset) {
          current = section.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className="relative">
    //     <ScrollProgress className="top-[10vh]" />
    //     {/* Sidebar */}
    //     <div className="grid grid-cols-[20%_1fr] w-full border gap-4">
    //     <aside className="w-64 sticky top-0 left-0 h-screen p-4 border-r overflow-auto">
    //       <nav className="space-y-2">
    //         {sections.map((s) => (
    //           <a
    //             key={s.id}
    //             href={`#${s.id}`}
    //             className={`block px-2 py-1 rounded hover:bg-gray-200 ${
    //               active === s.id ? "bg-blue-100 text-blue-600 font-semibold" : ""
    //             }`}
    //           >
    //             {s.label}
    //           </a>
    //         ))}
    //       </nav>
    //     </aside>

    //     {/* Main Content */}
    //     <main className="flex-1 p-6 space-y-32">
    //       {sections.map((s) => (
    //         <section key={s.id} id={s.id} className="scroll-mt-24">
    //           <h2 className="text-2xl font-bold mb-4">{s.label}</h2>
    //           <p className="text-gray-600">
    //             {/* Replace this with actual doc content */}
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Section:{" "}
    //             {s.label}
    //           </p>
    //         </section>
    //       ))}
    //     </main>
    //     </div>
    //   </div>

    <div className="min-h-[90vh]">
      <div className="flex items-center justify-center md:justify-start md:px-80 py-5 w-screen sticky top-[10vh] z-50 shadow-md backdrop-blur-sm">
        <Breadcrumb>
          <BreadcrumbList>
            {path.map((item, index) => {
              return (
                <BreadcrumbItem key={index} className={"hover:text-white"}>
                  <BreadcrumbLink
                    className={
                      "hover:text-white hover:underline transition-all"
                    }
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </BreadcrumbLink>
                  {index < path.length - 1 && <BreadcrumbSeparator />}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <ScrollProgress className="top-[10vh]" />

      <div className=" w-screen h-full flex px-24 mt-5">
        {/* Left */}
        <div className="hidden md:flex h-[80vh] w-[20vw] border-r border-zinc-800 sticky top-[22vh] items-start">
          {leftSideMenu.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-2 w-full justify-center"
              >
                <Accordion type="single" collapsible>
                  <AccordionItem value="getting-started">
                    <AccordionTrigger active>{item.title}</AccordionTrigger>
                    <AccordionContent className="ml-5">
                      {item.moreLinks.map((link, index) => {
                        return (
                          <div key={index} className="flex items-center gap-2">
                            <Link
                              to={link.href}
                              className={`text-md px-3 font-medium text-gray-600 text-sm rounded-2xl py-1 hover:text-white active:scale-95 transition-all flex items-start ${
                                link.href === pathname && "text-white"
                              }`}
                            >
                              {link.title}
                            </Link>
                          </div>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          })}
        </div>

        {/* Main */}
        <div className="space-y-4 p-4 w-full text-left">
          {/* Content */}

          {/* Intro */}
          <div className="section mb-20" id="intro">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-500">
              A{" "}
              <span className="font-bold italic text-white/90 mx-2">
                CLI Tool
              </span>{" "}
              to quickly scaffold a modern{" "}
              <span className="text-[#58C4DC]">React</span> application with{" "}
              <span className="text-[#00BCFF]">Tailwind CSS</span>,{" "}
              <span className="text-[#FAFAFA]">shadcn/ui</span>, and a
              ready-to-go developer experience. <br /> Choose your preferred
              setup (<span className="text-[#F0DB4F]">JavaScript</span> or{" "}
              <span className="text-[#3178C6]">TypeScript</span>) and skip the
              repetitive configuration work. <br /> <br />
              <code className="font-bold text-white/90 mx-2">
                react-fast-apps
              </code>{" "}
              is an open-source starter kit that delivers a production-ready
              folder structure, empowering you to launch scalable React apps at
              lightning speed.
            </p>
          </div>

          {/* Why Fast-Apps */}
          <div className="section mb-20" id="why">
            <h2 className="text-2xl font-bold mb-4">
              Why{" "}
              <AuroraText>
                <code>fast-apps</code>
              </AuroraText>{" "}
              ?
            </h2>
            <ul className=" text-gray-500 list-disc pl-5">
              <li>
                <span className="text-white/90"> No setup hassle</span> – Start
                coding instantly
              </li>
              <li>
                <span className="text-white/90"> Clean folder structure</span> –
                Built for scale
              </li>
              <li>
                <span className="text-white/90"> Tailwind + shadcn ready</span>{" "}
                – UI, out of the box
              </li>
              <li>
                <span className="text-white/90"> Fully customizable</span> –
                Tweak anything easily
              </li>
              <li>
                <span className="text-white/90"> Best practices baked in</span>{" "}
                – For production apps
              </li>
            </ul>
          </div>

          {/* Folder Structure */}
          <div className="section mb-20" id="folder-structure">
            <h2 className="text-2xl font-bold mb-4">Folder Structure</h2>
            <p className="text-gray-500">
              The folder structure is designed to be{" "}
              <span className="text-white/90">intuitive</span> and{" "}
              <span className="text-white/90">scalable</span>. Here's a quick
              overview:
            </p>
            <div className="flex items-center justify-center mt-4">
              <FileTreeDemo />
            </div>
          </div>

          {/* Installation */}
          <div className="section mb-20" id="install">
            <h2 className="text-2xl font-bold mb-4">Installation</h2>
            <p className="text-gray-500">
              To get started, run the following command:
            </p>

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

            <p className="text-gray-500">
              This will create a new{" "}
              <span className="text-[#58C4DC]">React</span> app with all the
              necessary configurations.
            </p>
          </div>

          {/* Usage */}
          <div className="section mb-20" id="usage">
            <h2 className="text-2xl font-bold mb-4">Usage</h2>
            <p className="text-gray-500">
              After running the command, you have to select
            </p>
            <ul className=" text-gray-500 list-disc pl-5">
              <li>
                <span className="text-white/90"> Project name</span>
              </li>
              <li>
                <span className="text-white/90"> Language</span> –
                <span className="text-[#F0DB4F]">JavaScript</span> or{" "}
                <span className="text-[#3178C6]">TypeScript</span>
              </li>
              <br />
              <p className="text-gray-500">And finally, you will have</p>
              <li>
                <span className="text-white/90"> Tailwind + shadcn ready</span>{" "}
                – UI, out of the box
              </li>
              <li>
                <span className="text-white/90"> Fully customizable</span> –
                Tweak anything easily
              </li>
              <li>
                <span className="text-white/90"> Best practices baked in</span>{" "}
                – For production apps
              </li>
            </ul>
            <br />
            <p className="text-gray-500">
              The development <code className="text-white/90">server</code> will
              start automatically. You can now start building your app!
            </p>
          </div>

          {/* Contributing */}
          <div className="section mb-20" id="contributing">
            <h2 className="text-2xl font-bold mb-4">Contributing</h2>
            <p className="text-gray-500">
              We welcome contributions to make{" "}
              <AuroraText>
                <code>fast-apps</code>
              </AuroraText>{" "}
              better for everyone! <br /> If you have any suggestions or find
              any issues, feel free to open an issue or a pull request on our{" "}
              <br />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/satendra03/fast-apps"
              >
                <span className="text-blue-400 underline">
                  GitHub repository
                </span>
              </Link>
            </p>
          </div>

          {/* License */}
          <div className="section mb-20" id="license">
            <h2 className="text-2xl font-bold mb-4">License</h2>
            <p className="text-gray-500">
              <AuroraText>
                <code>fast-apps</code>
              </AuroraText>{" "}
              is open-source and licensed under the MIT License.{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/satendra03/fast-apps/blob/main/LICENSE"
              >
                <span className="text-blue-400 underline">MIT License</span>
              </Link>
              . You can use it freely and modify it as per your needs.
            </p>
          </div>

          {/* FAQ */}
          <div className="section mb-20" id="faq">
            <h2 className="text-2xl font-bold mb-4">FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-zinc-800">
                <AccordionTrigger className="cursor-help text-base">
                  What is fast-apps ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-base">
                  fast-apps is a CLI tool that helps you quickly
                  scaffold a React project with a production-ready folder
                  structure and pre-configured Tailwind CSS and shadcn/ui.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-zinc-800">
                <AccordionTrigger  className="cursor-help text-base">
                  How do I install fast-apps ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-base">
                  You can install it using the following command:
                  <pre className="bg-muted-foreground text-white/90 p-2 rounded mt-2">
                    <code>{data.command}</code>
                  </pre>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-zinc-800">
                <AccordionTrigger className="cursor-help text-base">
                  What is included by default?
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-base">
                  - <span className="text-[#8180FF]">Vite</span> + <span className="text-[#58C4DC]">React</span> setup
                  <br />
                  - <span className="text-[#00BCFF]">Tailwind CSS</span> pre-configured
                  <br />
                  - <span className="text-[#FAFAFA]">shadcn/ui</span> components ready to use
                  <br />
                  - Scalable folder structure
                  <br />- Option to choose between <span className="text-[#F0DB4F]">JavaScript</span> or{" "}
              <span className="text-[#3178C6]">TypeScript</span>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-zinc-800">
                <AccordionTrigger className="cursor-help text-base">
                  Can I use it with TypeScript?
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-base">
                  Yes. During the setup process, you can choose to generate your
                  project with <span className="text-[#3178C6]">TypeScript</span> support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-zinc-800">
                <AccordionTrigger className="cursor-help text-base">
               Is it open-source?</AccordionTrigger>
                <AccordionContent className="text-gray-500 text-base">
                  Yes! fast-apps is open-source under the <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/satendra03/fast-apps/blob/main/LICENSE"
              >
                <span className="text-blue-400 underline">MIT License</span>
              </Link> Feel free to contribute or fork it for your own use.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b border-zinc-800">
                <AccordionTrigger className="cursor-help text-base">
                  I found a bug. Where should I report it?
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-base">
                  Please open an issue on the GitHub repository:
                  <br />
                  <Link
                    to="https://github.com/satendra03/fast-apps/issues"
                    className="text-blue-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Issues
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Right */}
        <div className="hidden md:flex h-[80vh] w-[20vw] border-l border-zinc-800 sticky top-[22vh] items-start">
          <nav className="space-y-2 flex items-start p-2 flex-col w-full">
            <Accordion type="single" collapsible className="ml-5">
              <AccordionItem value="getting-started">
                <AccordionTrigger active>On this Page</AccordionTrigger>
                <AccordionContent className="ml-5">
                  {rightSideMenu.map((s) => (
                    <Link
                      key={s.id}
                      to={`#${s.id}`}
                      className={`text-md px-3 font-medium text-gray-600 text-sm rounded-2xl py-1 hover:text-white active:scale-95 transition-all flex items-start  ${
                        active === s.id && "text-white"
                      }`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>
        </div>
      </div>
      {/* <h1 className="text-4xl font-bold mb-4">
      React Router DOM Documentation
    </h1>
    <p className="mb-4">
      Version: <b>7.6.0</b>
    </p>
    <h2 className="text-2xl font-semibold mt-6 mb-2">Installation</h2>
    <pre className="bg-zinc-900 text-white p-4 rounded mb-4">
      <code>npm install react-router-dom@7.6.0</code>
    </pre>
    <h2 className="text-2xl font-semibold mt-6 mb-2">Basic Usage</h2>
    <p className="mb-2">
      Wrap your app with <code>&lt;BrowserRouter&gt;</code> and use{" "}
      <code>&lt;Routes&gt;</code> and <code>&lt;Route&gt;</code> for
      navigation.
    </p>
    <pre className="bg-zinc-900 text-white p-4 rounded mb-4">
      <code>{`import { BrowserRouter, Routes, Route } from 'react-router-dom';

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>`}</code>
    </pre>
    <h2 className="text-2xl font-semibold mt-6 mb-2">Features</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Declarative routing for React apps</li>
      <li>Nested routes</li>
      <li>Dynamic route params</li>
      <li>Programmatic navigation</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-6 mb-2">More Info</h2>
    <a
      href="https://reactrouter.com/en/main"
      className="text-blue-400 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Official React Router Docs
    </a> */}
    </div>
  );
  //   return (
  //     <div>
  //       <ScrollProgress className="top-[10vh]" />
  //       <div className="min-h-[90vh]">
  // <div className="border w-[full] grid grid-cols-[20%_auto_20%] gap-2 p-2">
  //     <div className="border"></div>
  //     <ScrollArea className="h-full w-full border p-4"></ScrollArea>
  //     <div className="border"></div>
  // </div>
  //       </div>
  //     </div>
  //   );
};

export default Docs;
