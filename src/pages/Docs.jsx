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

const lenis = new Lenis({
  autoRaf: true,
});

const Docs = () => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState("intro");
  const pathname = useLocation().pathname;
  const path = pathname.split("/");
  path[0] = "Home";
  const pathName = path[0] ? path[0] : "docs";
  const offset = window.innerHeight * 0.3;

  const { setType, data, handleCopy, copied, type } = useType();
  const [getType, setGetType] = useState(0);

  // handleCopy, copied
  const docsContent = [
    {
      intro: {
        id: "intro",
        title: "Introduction",
        content: (
          <>
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
                react-fast-app
              </code>{" "}
              is an open-source starter kit that delivers a production-ready
              folder structure, empowering you to launch scalable React apps at
              lightning speed.
            </p>
          </>
        ),
      },
      why: {
        id: "why",
        title: "Why Fast-Apps?",
        content: (
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
              <span className="text-white/90"> Tailwind + shadcn ready</span> –
              UI, out of the box
            </li>
            <li>
              <span className="text-white/90"> Fully customizable</span> – Tweak
              anything easily
            </li>
            <li>
              <span className="text-white/90"> Best practices baked in</span> –
              For production apps
            </li>
          </ul>
        ),
      },
      install: {
        id: "install",
        title: "Installation",
        content: (
          <>
            <p className="text-gray-500">
              To get started, run the following command:
            </p>
            <div className="flex items-center justify-start gap-4 my-2">
              <button className="bg-zinc-800 text-white border border-zinc-700 px-6 py-2 rounded-md text-base flex items-center gap-2 transition-colors hover:bg-zinc-700">
                <code className="text-[0.8rem] md:text-sm lg:text-base">
                  npm create react-fast-app@latest
                </code>
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
          </>
        ),
      },
      folder: {
        id: "folder-structure",
        title: "Folder Structure",
        content: (
          <>
            <p className="text-gray-500">
              The folder structure is designed to be{" "}
              <span className="text-white/90">intuitive</span> and{" "}
              <span className="text-white/90">scalable</span>. Here's a quick
              overview:
            </p>
            <div className="flex items-center justify-center mt-4">
              <FileTreeDemo />
            </div>
          </>
        ),
      },
      usage: {
        id: "usage",
        title: "Usage",
        content: (
          <>
            <p className="text-gray-500">
              After running the command, you have to select
            </p>
            <ul className=" text-gray-500 list-disc pl-5">
              <li>
                <span className="text-white/90"> Project name</span>
              </li>
              <li>
                <span className="text-white/90"> Language</span> –{" "}
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
          </>
        ),
      },
      contributing: {
        id: "contributing",
        title: "Contributing",
        content: (
          <p className="text-gray-500">
            We welcome contributions to make{" "}
            <AuroraText>
              <code>react-fast-app</code>
            </AuroraText>{" "}
            better for everyone! <br /> If you have any suggestions or find any
            issues, feel free to open an issue or a pull request on our <br />
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/satendra03/react-fast-app"
            >
              <span className="text-blue-400 underline">GitHub repository</span>
            </Link>
          </p>
        ),
      },
      license: {
        id: "license",
        title: "License",
        content: (
          <p className="text-gray-500">
            <AuroraText>
              <code>react-fast-app</code>
            </AuroraText>{" "}
            is open-source and licensed under the MIT License.{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/satendra03/react-fast-app/blob/main/LICENSE"
            >
              <span className="text-blue-400 underline">MIT License</span>
            </Link>
            . You can use it freely and modify it as per your needs.
          </p>
        ),
      },
      faq: {
        id: "faq",
        title: "FAQ",
        content: (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-zinc-800">
              <AccordionTrigger className="cursor-help text-base">
                What is fast-apps ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base">
                fast-apps is a CLI tool that helps you quickly scaffold a React
                project with a production-ready folder structure and
                pre-configured Tailwind CSS and shadcn/ui.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-zinc-800">
              <AccordionTrigger className="cursor-help text-base">
                How do I install fast-apps ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base">
                You can install it using the following command:
                <pre className="bg-muted-foreground text-white/90 p-2 rounded mt-2">
                  <code>npx react-fast-app@latest</code>
                </pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-zinc-800">
              <AccordionTrigger className="cursor-help text-base">
                What is included by default?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base">
                - <span className="text-[#8180FF]">Vite</span> +{" "}
                <span className="text-[#58C4DC]">React</span> setup
                <br />- <span className="text-[#00BCFF]">
                  Tailwind CSS
                </span>{" "}
                pre-configured
                <br />- <span className="text-[#FAFAFA]">shadcn/ui</span>{" "}
                components ready to use
                <br />- Scalable folder structure
                <br />- Option to choose between{" "}
                <span className="text-[#F0DB4F]">JavaScript</span> or{" "}
                <span className="text-[#3178C6]">TypeScript</span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-zinc-800">
              <AccordionTrigger className="cursor-help text-base">
                Can I use it with TypeScript?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base">
                Yes. During the setup process, you can choose to generate your
                project with <span className="text-[#3178C6]">TypeScript</span>{" "}
                support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-zinc-800">
              <AccordionTrigger className="cursor-help text-base">
                Is it open-source?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base">
                Yes! fast-apps is open-source under the{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://github.com/satendra03/fast-apps/blob/main/LICENSE"
                >
                  <span className="text-blue-400 underline">MIT License</span>
                </Link>{" "}
                Feel free to contribute or fork it for your own use.
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
        ),
      },
    },
    {
      intro: {
        id: "intro",
        title: "Introduction",
        content: (
          <>
            <p className="text-gray-500">
              <span className="font-bold italic text-white/90 mx-2">
                node-fast-server
              </span>{" "}
              is a CLI tool to instantly scaffold a modern{" "}
              <span className="text-[#8CC84B]">Node.js</span> server with{" "}
              <span className="text-[#00BCFF]">Express</span>,{" "}
              <span className="text-[#FAFAFA]">ESM</span> support, and a clean,
              scalable folder structure. <br />
              Skip boilerplate and get a ready-to-deploy Node server in seconds.
            </p>
          </>
        ),
      },
      why: {
        id: "why",
        title: "Why Fast-Server?",
        content: (
          <ul className=" text-gray-500 list-disc pl-5">
            <li>
              <span className="text-white/90"> No setup hassle</span> – Start
              building APIs instantly
            </li>
            <li>
              <span className="text-white/90"> Clean folder structure</span> –
              Built for scale
            </li>
            <li>
              <span className="text-white/90"> ESM + Express ready</span> –
              Modern Node.js out of the box
            </li>
            <li>
              <span className="text-white/90"> Fully customizable</span> – Tweak
              anything easily
            </li>
            <li>
              <span className="text-white/90"> Best practices baked in</span> –
              For production servers
            </li>
          </ul>
        ),
      },
      install: {
        id: "install",
        title: "Installation",
        content: (
          <>
            <p className="text-gray-500">
              To get started, run the following command:
            </p>
            <div className="flex items-center justify-start gap-4 my-2">
              <button className="bg-zinc-800 text-white border border-zinc-700 px-6 py-2 rounded-md text-base flex items-center gap-2 transition-colors hover:bg-zinc-700">
                <code className="text-[0.8rem] md:text-sm lg:text-base">
                  npm init node-fast-server@latest
                </code>
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
              <span className="text-[#8CC84B]">Node.js</span> server with all
              the necessary configurations.
            </p>
          </>
        ),
      },
      folder: {
        id: "folder-structure",
        title: "Folder Structure",
        content: (
          <>
            <p className="text-gray-500">
              The folder structure is designed to be{" "}
              <span className="text-white/90">intuitive</span> and{" "}
              <span className="text-white/90">scalable</span>. Here's a quick
              overview:
            </p>
            <div className="flex items-center justify-center mt-4">
              <FileTreeDemo />
            </div>
          </>
        ),
      },
      usage: {
        id: "usage",
        title: "Usage",
        content: (
          <>
            <p className="text-gray-500">
              After running the command, you have to select
            </p>
            <ul className=" text-gray-500 list-disc pl-5">
              <li>
                <span className="text-white/90"> Project name</span>
              </li>
              <li>
                <span className="text-white/90"> Port</span> – default{" "}
                <span className="text-[#F0DB4F]">3000</span>
              </li>
              <br />
              <p className="text-gray-500">And finally, you will have</p>
              <li>
                <span className="text-white/90"> Express + ESM ready</span> –
                Modern Node.js out of the box
              </li>
              <li>
                <span className="text-white/90"> Fully customizable</span> –
                Tweak anything easily
              </li>
              <li>
                <span className="text-white/90"> Best practices baked in</span>{" "}
                – For production servers
              </li>
            </ul>
            <br />
            <p className="text-gray-500">
              The development <code className="text-white/90">server</code> will
              start automatically. You can now start building your API!
            </p>
          </>
        ),
      },
      contributing: {
        id: "contributing",
        title: "Contributing",
        content: (
          <p className="text-gray-500">
            We welcome contributions to make{" "}
            <AuroraText>
              <code>node-fast-server</code>
            </AuroraText>{" "}
            better for everyone! <br /> If you have any suggestions or find any
            issues, feel free to open an issue or a pull request on our <br />
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/satendra03/node-fast-server"
            >
              <span className="text-blue-400 underline">GitHub repository</span>
            </Link>
          </p>
        ),
      },
      license: {
        id: "license",
        title: "License",
        content: (
          <p className="text-gray-500">
            <AuroraText>
              <code>node-fast-server</code>
            </AuroraText>{" "}
            is open-source and licensed under the MIT License.{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/satendra03/react-fast-app/blob/main/LICENSE"
            >
              <span className="text-blue-400 underline">MIT License</span>
            </Link>
            . You can use it freely and modify it as per your needs.
          </p>
        ),
      },
      faq: {
        id: "faq",
        title: "FAQ",
        content: (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-zinc-800">
              <AccordionTrigger className="cursor-help text-base">
                What is node-fast-server ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base">
                node-fast-server is a CLI tool that helps you quickly scaffold a
                Node.js server project with a production-ready folder structure
                and pre-configured Express and ESM support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-zinc-800">
              <AccordionTrigger className="cursor-help text-base">
                How do I install node-fast-server ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base">
                You can install it using the following command:
                <pre className="bg-muted-foreground text-white/90 p-2 rounded mt-2">
                  <code>npx node-fast-server@latest</code>
                </pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-zinc-800">
              <AccordionTrigger className="cursor-help text-base">
                What is included by default?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base">
                - <span className="text-[#8CC84B]">Node.js</span> +{" "}
                <span className="text-[#00BCFF]">Express</span> setup
                <br />- <span className="text-[#FAFAFA]">ESM</span> support
                <br />- Scalable folder structure
                <br />- <span className="text-[#00684A]">MongoDB</span> connection
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-zinc-800">
              <AccordionTrigger className="cursor-help text-base">
                Can I use it with TypeScript?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base">
                Yes. During the setup process, you can choose to generate your
                project with <span className="text-[#3178C6]">TypeScript</span>{" "}
                support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-zinc-800">
              <AccordionTrigger className="cursor-help text-base">
                Is it open-source?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base">
                Yes! node-fast-server is open-source under the{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://github.com/satendra03/node-fast-server/blob/main/LICENSE"
                >
                  <span className="text-blue-400 underline">MIT License</span>
                </Link>{" "}
                Feel free to contribute or fork it for your own use.
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
                  to="https://github.com/satendra03/node-fast-server/issues"
                  className="text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Issues
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
    },
  ];

  const rightSideMenu = type
    ? [
        { id: "intro", label: "Introduction" },
        { id: "why", label: "Why Fast-Apps?" },
        { id: "install", label: "Installation" },
        { id: "folder-structure", label: "Folde Structure" },
        { id: "usage", label: "Usage" },
        { id: "contributing", label: "Contributing" },
        { id: "license", label: "License" },
        { id: "faq", label: "FAQ" },
      ]
    : [
        { id: "intro", label: "Introduction" },
        { id: "why", label: "Why Fast-Server?" },
        { id: "install", label: "Installation" },
        { id: "folder-structure", label: "Folde Structure" },
        { id: "usage", label: "Usage" },
        { id: "contributing", label: "Contributing" },
        { id: "license", label: "License" },
        { id: "faq", label: "FAQ" },
      ];

  // const a = ;

  useEffect(() => {
    type ? setGetType(0) : setGetType(1);
  }, [type]);
  const content = docsContent[getType];

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let current = active;
      for (const section of rightSideMenu) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= window.scrollY + offset) {
          current = section.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active, offset]);

  return (
    <div className="min-h-[90vh] bg-black text-white">
      <ScrollProgress className="top-[0vh] z-[100]" />

      <div className="flex items-center justify-center md:justify-start px-10 md:px-24 lg:px-80 py-5 md:py-5 w-screen sticky top-[0vh] z-[37] shadow-md backdrop-blur-sm">
        <Breadcrumb>
          <BreadcrumbList>
            {path.map((item, index) => (
              <BreadcrumbItem key={index} className="hover:text-white/50">
                <BreadcrumbLink className="hover:text-white text-sm transition-all">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </BreadcrumbLink>
                {index < path.length - 1 && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="w-screen h-full flex px-24 mt-5">
        {/* Left Sidebar */}
        <div className="hidden lg:flex h-[80vh] w-[20vw] border-r border-zinc-800 sticky top-[20vh] items-start">
          {leftSideMenu.map((item, index) => (
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
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent className="ml-5">
                    {item.moreLinks.map((link, linkIndex) => (
                      <div key={linkIndex} className="flex items-center gap-2">
                        <Link
                          to={link.href}
                          className={`text-md px-3 font-medium text-gray-600 text-sm rounded-2xl py-1 hover:text-white active:scale-95 transition-all flex items-start ${
                            link.href === pathname && "text-white"
                          }`}
                        >
                          {link.title}
                        </Link>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="space-y-4 p-4 w-full text-left">
          {/* Dynamically render sections based on current type */}
          {Object.entries(content).map(([key, section]) => (
            <div key={key} className="section mb-20" id={section.id}>
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              {section.content}
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:flex h-[80vh] w-[20vw] border-l border-zinc-800 sticky top-[20vh] items-start">
          <nav className="space-y-2 flex items-start p-2 flex-col w-full">
            <Accordion
              type="single"
              collapsible
              className="ml-5"
              defaultValue="getting-started"
            >
              <AccordionItem value="getting-started">
                <AccordionTrigger>On this Page</AccordionTrigger>
                <AccordionContent className="ml-5">
                  {rightSideMenu.map((s) => (
                    <Link
                      key={s.id}
                      to={`#${s.id}`}
                      className={`text-md px-3 font-medium text-gray-600 text-sm rounded-2xl py-1 hover:text-white active:scale-95 transition-all flex items-start ${
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
    </div>
  );
};

export default Docs;
