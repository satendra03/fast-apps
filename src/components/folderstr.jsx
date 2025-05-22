
import { useState } from "react";
import { File, Folder, Tree } from "./magicui/file-tree";

export function FileTreeDemo() {

  return (
    <div className="relative flex w-2/3 flex-col items-center justify-center overflow-hidden rounded-lg border ">
      <Tree
        className="overflow-hidden rounded-md p-2 "
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
        ]}
        elements={ELEMENTS}
      >
        <Folder element="src" value="1">
          <File value="2" className="focus:text-black">
            <p>App.jsx</p>
          </File>
          <File value="3" className="focus:text-black">
            <p>index.css</p>
          </File>
          <File value="4" className="focus:text-black">
            <p>main.jsx</p>
          </File>
          <Folder value="5" element="assets">
            <File value="6" className="focus:text-black">
              <p>react.svg</p>
            </File>
          </Folder>
          <Folder value="7" element="components">
            <File value="8" className="focus:text-black">
              <p>components.js</p>
            </File>
          </Folder>
          <Folder value="9" element="hooks">
            <File value="10" className="focus:text-black">
              <p>hooks.js</p>
            </File>
          </Folder>
          <Folder value="11" element="layouts">
            <File value="12" className="focus:text-black">
              <p>layouts.js</p>
            </File>
          </Folder>
          <Folder value="13" element="lib">
            <File value="14" className="focus:text-black">
              <p>utils.js</p>
            </File>
          </Folder>
          <Folder value="15" element="pages">
            <File value="16" className="focus:text-black">
              <p>pages.js</p>
            </File>
          </Folder>
        </Folder>
        <Folder element="public" value="17">
          <File value="18" className="focus:text-black">
            <p>vite.svg</p>
          </File>
        </Folder>
        <File value="19" className="focus:text-black"> 
          <p>components.json</p>
        </File>
        <File value="20" className="focus:text-black">
          <p>eslint.config.js</p>
        </File>
        <File value="21" className="focus:text-black">
          <p>index.html</p>
        </File>
        <File value="22" className="focus:text-black">
          <p>jsconfig.json</p>
        </File>
        <File value="23" className="focus:text-black">
          <p>package.json</p>
        </File>
        <File value="24" className="focus:text-black">
          <p>README.md</p>
        </File>
        <File value="25" className="focus:text-black">
          <p>vite.config.js</p>
        </File>
      </Tree>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: false,
    name: "src",
    children: [
      { id: "2", isSelectable: false, name: "App.jsx" },
      { id: "3", isSelectable: false, name: "index.css" },
      { id: "4", isSelectable: false, name: "main.jsx" },
      {
        id: "5",
        isSelectable: false,
        name: "assets",
        children: [{ id: "6", isSelectable: false, name: "react.svg" }],
      },
      {
        id: "7",
        isSelectable: false,
        name: "components",
        children: [{ id: "8", isSelectable: false, name: "components.js" }],
      },
      {
        id: "9",
        isSelectable: false,
        name: "hooks",
        children: [{ id: "10", isSelectable: false, name: "hooks.js" }],
      },
      {
        id: "11",
        isSelectable: false,
        name: "layouts",
        children: [{ id: "12", isSelectable: false, name: "layouts.js" }],
      },
      {
        id: "13",
        isSelectable: false,
        name: "lib",
        children: [{ id: "14", isSelectable: false, name: "utils.js" }],
      },
      {
        id: "15",
        isSelectable: false,
        name: "pages",
        children: [{ id: "16", isSelectable: false, name: "pages.js" }],
      },
    ],
  },
  {
    id: "17",
    isSelectable: false,
    name: "public",
    children: [{ id: "18", isSelectable: false, name: "vite.svg" }],
  },
  { id: "19", isSelectable: false, name: "components.json" },
  { id: "20", isSelectable: false, name: "eslint.config.js" },
  { id: "21", isSelectable: false, name: "index.html" },
  { id: "22", isSelectable: false, name: "jsconfig.json" },
  { id: "23", isSelectable: false, name: "package.json" },
  { id: "24", isSelectable: false, name: "README.md" },
  { id: "25", isSelectable: false, name: "vite.config.js" },
];
