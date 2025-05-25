import { ScrollProgress } from "@/components/magicui/scroll-progress";
import React, { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { leftSideMenu, navMenu } from "@/data";
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
import Introduction from "@/components/intro";
import Quickstart from "@/components/Quickstart";
import Lenis from "lenis";

const rightSideMenu = [
  { id: "quick-start", label: "Quick start" },
  { id: "prerequisites", label: "Prerequisites" },
  { id: "steps", label: "How to use?" },
];

const Docsq = () => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState("quick-start");
  const pathname = useLocation().pathname;
  const path = pathname.split("/");
  path[0] = "Home";
  const pathName = path[0] ? path[0] : "docs";
  const offset = window.innerHeight * 0.3;

  const { setType, data, handleCopy, copied } = useType();

  useEffect(() => {
    const handleScroll = () => {
      let current = active;
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

  const handleClick = (id) => {
    const container = scrollRef.current;
    const el = document.getElementById(id);
    if (el && container) {
      const offsetTop = getOffsetTopRelativeTo(el, container);
      container.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-[90vh]">

        <ScrollProgress className="top-[0vh] z-[100]" />
         
      <div className="flex items-center justify-center md:justify-start px-10 md:px-24 lg:px-80 py-5 md:py-5 w-screen sticky top-[0vh] z-[37] shadow-md backdrop-blur-sm">
        <Breadcrumb>
          <BreadcrumbList>
            {path.map((item, index) => {
              return (
                <BreadcrumbItem key={index} className={"hover:text-white/50"}>
                  <BreadcrumbLink
                    className={
                      "hover:text-white text-sm transition-all"
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

      

      <div className=" w-screen h-full flex px-[10vw] mt-5">
        {/* Left */}
        <div className="hidden lg:flex h-[80vh] w-[20vw] border-r border-zinc-800 sticky top-[20vh] items-start">
          {leftSideMenu.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-2 w-full justify-center"
              >
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="getting-started"
                >
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

        {/* Main - Introduction*/}
        <div className="space-y-4 p-4 w-full text-left">
          {/* Content */}

          {/* Intro */}
          <div className="section mb-20" id="quick-start">
            <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
            <p className="text-gray-500">
              Spin up a fully configured{" "}
              <span className="text-[#58C4DC]">React</span> +{" "}
              <span className="text-[#00BCFF]">Tailwind CSS</span> project with
              a fully preconfigured setup in seconds — no boilerplate, no
              hassle.
            </p>
          </div>

          {/* Prerequisites */}
          <div className="section mb-20" id="prerequisites">
            <h2 className="text-2xl font-bold mb-4">Prerequisites ?</h2>
            <ul className=" text-gray-500 list-disc pl-5">
              <li>
                <span className="text-[#4F9C43]"> Node.js </span> – v16 or
                higher
              </li>
              <li>
                <span className="text-red-500"> npm </span> – v8 or higher
              </li>
            </ul>
          </div>

          {/* Steps */}
          <div className="section" id="steps">
            <h2 className="text-2xl font-bold mb-4">How to use?</h2>
            <ol className="text-gray-500 flex flex-col pl-5 list-decimal">
              <li className="my-2">
                <span className="text-white/90"> Run the CLI</span> – Open your
                terminal and run: <br />
                <div className="flex items-center justify-start gap-4 my-2">
                  <button className="bg-zinc-800 text-white border border-zinc-700 px-6 py-2 rounded-md text-base flex items-center gap-2 transition-colors hover:bg-zinc-700">
                    <code className="text-[0.8rem] md:text-sm lg:text-base">{data.command}</code>
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
                <span className="text-white/90"> Choose Options</span> – You'll
                be prompted to:
                <ul className="list-disc list-inside text-gray-500">
                  <li>Enter your project name</li>
                  <li>
                    Select <span className="text-[#F0DB4F]">JavaScript</span> or{" "}
                    <span className="text-[#3178C6]">TypeScript</span>
                  </li>
                </ul>
              </li>
              <li className="my-2">
                <span className="text-white/90"> Enjoy </span> – Your new
                project: <br />
                <ul className="list-disc list-inside text-gray-500">
                  <li>Project folder is auto-created</li>
                  <li>Dependencies are installed automatically</li>
                  <li>Development server starts on its own</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:flex h-[80vh] w-[20vw] border-l border-zinc-800 sticky top-[20vh] items-start">
          <nav className="space-y-2 flex items-start p-2 flex-col w-full">
            <Accordion
              type="single"
              collapsible
              className="ml-5"
              defaultValue="getting-started"
            >
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
                      onClick={() => handleClick(s.id)}
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
    </div>
  );
};

export default Docsq;
