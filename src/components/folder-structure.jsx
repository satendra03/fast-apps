// "use client"

// import type React from "react"

import { ChevronDown, ChevronRight, Folder, FolderOpen, FileText } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

// interface FolderStructureProps {
//   step: number
// }

// interface FolderItemProps {
//   name: string
//   level: number
//   isFolder: boolean
//   isOpen?: boolean
//   children?: React.ReactNode
//   isNew?: boolean
// }

function FolderItem({ name, level, isFolder, isOpen = false, children, isNew = false }) {
  const [open, setOpen] = useState(isOpen)

  return (
    <div>
      <div
        className={cn(
          "flex items-center py-1 hover:bg-muted/50 rounded px-2 cursor-pointer select-none",
          isNew && "text-green-600 font-medium",
        )}
        style={{ paddingLeft: `${level * 16}px` }}
        onClick={() => isFolder && setOpen(!open)}
      >
        {isFolder ? (
          <>
            {open ? <ChevronDown className="h-4 w-4 mr-1" /> : <ChevronRight className="h-4 w-4 mr-1" />}
            {open ? (
              <FolderOpen className="h-4 w-4 mr-2 text-blue-500" />
            ) : (
              <Folder className="h-4 w-4 mr-2 text-blue-500" />
            )}
          </>
        ) : (
          <>
            <span className="w-4 mr-1"></span>
            <FileText className="h-4 w-4 mr-2 text-gray-500" />
          </>
        )}
        <span>{name}</span>
        {isNew && <span className="ml-2 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full">New</span>}
      </div>
      {isFolder && open && children}
    </div>
  )
}

export default function FolderStructure({ step }) {
  return (
    <div className="border rounded-md h-full overflow-auto p-2">
      <FolderItem name="my-project" level={0} isFolder={true} isOpen={true}>
        <FolderItem name="node_modules" level={1} isFolder={true} />
        <FolderItem name="package.json" level={1} isFolder={false} />
        <FolderItem name="package-lock.json" level={1} isFolder={false} />

        {step >= 2 && (
          <>
            <FolderItem name="src" level={1} isFolder={true} isNew={true} isOpen={true}>
              {step >= 3 && (
                <>
                  <FolderItem name="components" level={2} isFolder={true} isNew={true} />
                  <FolderItem name="styles" level={2} isFolder={true} isNew={true} />
                </>
              )}
            </FolderItem>
            <FolderItem name="dist" level={1} isFolder={true} isNew={true} />
            <FolderItem name="assets" level={1} isFolder={true} isNew={true} />
          </>
        )}

        {step >= 3 && (
          <>
            <FolderItem name="config.js" level={1} isFolder={false} isNew={true} />
            <FolderItem name="index.js" level={1} isFolder={false} isNew={true} />
            <FolderItem name="utils.js" level={1} isFolder={false} isNew={true} />
          </>
        )}
      </FolderItem>
    </div>
  )
}
