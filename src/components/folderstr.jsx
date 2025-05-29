import { Folder, Tree } from "./magicui/file-tree"
import { useType } from "@/context/typeContext"


export function FileTreeDemo() {
  const { type } = useType()

  // Frontend/React structure (when type is true)
  const FRONTEND_ELEMENTS = [
    {
      id: "1",
      isSelectable: false,
      name: "public",
      children: [
        { id: "2", isSelectable: false, name: "icons" },
        { id: "3", isSelectable: false, name: "images" },
      ],
    },
    {
      id: "4",
      isSelectable: false,
      name: "src",
      children: [
        { id: "5", isSelectable: false, name: "assets" },
        {
          id: "6",
          isSelectable: false,
          name: "components",
          children: [
            {
              id: "7",
              isSelectable: false,
              name: "common",
              children: [
                { id: "8", isSelectable: false, name: "Footer" },
                { id: "9", isSelectable: false, name: "Header" },
                { id: "10", isSelectable: false, name: "Layout" },
              ],
            },
            {
              id: "11",
              isSelectable: false,
              name: "features",
              children: [{ id: "12", isSelectable: false, name: "auth" }],
            },
            { id: "13", isSelectable: false, name: "forms" },
            { id: "14", isSelectable: false, name: "ui" },
          ],
        },
        { id: "15", isSelectable: false, name: "contexts" },
        { id: "16", isSelectable: false, name: "hooks" },
        { id: "17", isSelectable: false, name: "layouts" },
        { id: "18", isSelectable: false, name: "lib" },
        { id: "19", isSelectable: false, name: "pages" },
        { id: "20", isSelectable: false, name: "services" },
        { id: "21", isSelectable: false, name: "stores" },
      ],
    },
  ]

  // Backend/Node.js structure (when type is false)
  const BACKEND_ELEMENTS = [
    {
      id: "1",
      isSelectable: false,
      name: "public",
      children: [
        { id: "2", isSelectable: false, name: "css" },
        { id: "3", isSelectable: false, name: "images" },
        { id: "4", isSelectable: false, name: "js" },
      ],
    },
    { id: "5", isSelectable: false, name: "scripts" },
    {
      id: "6",
      isSelectable: false,
      name: "src",
      children: [
        { id: "7", isSelectable: false, name: "config" },
        { id: "8", isSelectable: false, name: "controllers" },
        { id: "9", isSelectable: false, name: "middlewares" },
        { id: "10", isSelectable: false, name: "models" },
        { id: "11", isSelectable: false, name: "routes" },
        { id: "12", isSelectable: false, name: "services" },
        { id: "13", isSelectable: false, name: "utils" },
      ],
    },
    {
      id: "14",
      isSelectable: false,
      name: "test",
      children: [
        { id: "15", isSelectable: false, name: "integration" },
        { id: "16", isSelectable: false, name: "unit" },
      ],
    },
  ]

  const currentElements = type ? FRONTEND_ELEMENTS : BACKEND_ELEMENTS
  const frontendExpandedItems = ["1", "4", "6", "7", "11"]
  const backendExpandedItems = ["1", "6", "14"]
  const currentExpandedItems = type ? frontendExpandedItems : backendExpandedItems

  const renderFrontendStructure = () => (
    <Tree
      className="overflow-hidden rounded-md p-2"
      initialExpandedItems={frontendExpandedItems}
      elements={FRONTEND_ELEMENTS}
    >
      <Folder element="public" value="1">
        <Folder value="2" element="icons" />
        <Folder value="3" element="images" />
      </Folder>
      <Folder element="src" value="4">
        <Folder value="5" element="assets" />
        <Folder value="6" element="components">
          <Folder value="7" element="common">
            <Folder value="8" element="Footer" />
            <Folder value="9" element="Header" />
            <Folder value="10" element="Layout" />
          </Folder>
          <Folder value="11" element="features">
            <Folder value="12" element="auth" />
          </Folder>
          <Folder value="13" element="forms" />
          <Folder value="14" element="ui" />
        </Folder>
        <Folder value="15" element="contexts" />
        <Folder value="16" element="hooks" />
        <Folder value="17" element="layouts" />
        <Folder value="18" element="lib" />
        <Folder value="19" element="pages" />
        <Folder value="20" element="services" />
        <Folder value="21" element="stores" />
      </Folder>
    </Tree>
  )

  const renderBackendStructure = () => (
    <Tree
      className="overflow-hidden rounded-md p-2"
      initialExpandedItems={backendExpandedItems}
      elements={BACKEND_ELEMENTS}
    >
      <Folder element="public" value="1">
        <Folder value="2" element="css" />
        <Folder value="3" element="images" />
        <Folder value="4" element="js" />
      </Folder>
      <Folder value="5" element="scripts" />
      <Folder element="src" value="6">
        <Folder value="7" element="config" />
        <Folder value="8" element="controllers" />
        <Folder value="9" element="middlewares" />
        <Folder value="10" element="models" />
        <Folder value="11" element="routes" />
        <Folder value="12" element="services" />
        <Folder value="13" element="utils" />
      </Folder>
      <Folder element="test" value="14">
        <Folder value="15" element="integration" />
        <Folder value="16" element="unit" />
      </Folder>
    </Tree>
  )

  return (
    <div className="relative flex w-2/3 flex-col items-center justify-center overflow-hidden rounded-lg border">
      {type ? renderFrontendStructure() : renderBackendStructure()}
    </div>
  )
}