import { useEffect, useRef, useState } from "react"
import { Loader2 } from "lucide-react"


export default function CommandTerminal({ step, isRunning }) {
  const terminalRef = useRef(null)
  const [output, setOutput] = useState(["$ npm run my-command"])

  useEffect(() => {
    if (step >= 1) {
      setOutput((prev) => [
        ...prev,
        "> my-project@1.0.0 my-command",
        "> node scripts/setup.js",
        "",
        "🚀 Initializing project setup...",
      ])
    }

    if (step >= 2) {
      setOutput((prev) => [
        ...prev,
        "✅ Created directory: ./src",
        "✅ Created directory: ./dist",
        "✅ Created directory: ./assets",
        "📦 Installing dependencies...",
      ])
    }

    if (step >= 3) {
      setOutput((prev) => [
        ...prev,
        "✅ Dependencies installed successfully",
        "📝 Generated configuration files",
        "  - config.js",
        "  - index.js",
        "  - utils.js",
        "",
        "🎉 Setup complete! Your project is ready to use.",
        "",
        "$ ",
      ])
    }
  }, [step])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  return (
    <div className="flex-1 bg-black text-green-400 font-mono text-sm p-4 rounded-md overflow-auto" ref={terminalRef}>
      {output.map((line, index) => (
        <div key={index} className={line === "" ? "h-4" : ""}>
          {line}
        </div>
      ))}
      {isRunning && (
        <div className="flex items-center">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          <span>Processing...</span>
        </div>
      )}
    </div>
  )
}
