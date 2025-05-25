import React from "react";
import { AuroraText } from "./magicui/aurora-text";
import { FileTreeDemo } from "./folderstr";
import { Check, Clipboard } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useType } from "@/context/typeContext";

function Introduction() {
  const { setType, data, handleCopy, copied } = useType();
  return (
    <div className="space-y-4 p-4 w-full text-left">
      {/* Content */}

      {/* Intro */}
      <div className="section mb-20" id="intro">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="text-gray-500">
          A{" "}
          <span className="font-bold italic text-white/90 mx-2">CLI Tool</span>{" "}
          to quickly scaffold a modern{" "}
          <span className="text-[#58C4DC]">React</span> application with{" "}
          <span className="text-[#00BCFF]">Tailwind CSS</span>,{" "}
          <span className="text-[#FAFAFA]">shadcn/ui</span>, and a ready-to-go
          developer experience. <br /> Choose your preferred setup (
          <span className="text-[#F0DB4F]">JavaScript</span> or{" "}
          <span className="text-[#3178C6]">TypeScript</span>) and skip the
          repetitive configuration work. <br /> <br />
          <code className="font-bold text-white/90 mx-2">
            react-fast-apps
          </code>{" "}
          is an open-source starter kit that delivers a production-ready folder
          structure, empowering you to launch scalable React apps at lightning
          speed.
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
          This will create a new <span className="text-[#58C4DC]">React</span>{" "}
          app with all the necessary configurations.
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
          better for everyone! <br /> If you have any suggestions or find any
          issues, feel free to open an issue or a pull request on our <br />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://github.com/satendra03/fast-apps"
          >
            <span className="text-blue-400 underline">GitHub repository</span>
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
                <code>{data.command}</code>
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
              <br />- <span className="text-[#00BCFF]">Tailwind CSS</span>{" "}
              pre-configured
              <br />- <span className="text-[#FAFAFA]">shadcn/ui</span>{" "}
              components ready to use
              <br />
              - Scalable folder structure
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
      </div>
    </div>
  );
}

export default Introduction;
