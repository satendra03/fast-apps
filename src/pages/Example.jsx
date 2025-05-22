// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// const Home = () => <div className="p-8">Welcome to the <b>Home</b> page!</div>;
// const About = () => <div className="p-8">This is the <b>About</b> page.</div>;

// const Example = () => (
//   <div className="min-h-[90vh]">
//     <nav className="min-h-[90vh] flex gap-4 p-4 bg-zinc-900 text-white">
//       <Link to="/examples" className="hover:underline">Home</Link>
//       <Link to="/examples/about" className="hover:underline">About</Link>
//     </nav>
//     <Routes>
//       <Route path="/examples" element={<Home />} />
//       <Route path="/examples/about" element={<About />} />
//     </Routes>
//   </div>
// );

// export default Example;

// import React from 'react'

// function Example() {
//   return (
//     <div>Example</div>
//   )
// }

// export default Example


// "use client"

import { useState } from "react"
import { Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CommandTerminal from "@/components/command-terminal"
import FolderStructure from "@/components/folder-structure"

export default function Example() {
  const [step, setStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const runCommand = () => {
    setIsRunning(true)
    setTimeout(() => {
      setStep(1)
      setTimeout(() => {
        setStep(2)
        setTimeout(() => {
          setStep(3)
          setIsRunning(false)
        }, 1500)
      }, 1500)
    }, 1500)
  }

  const resetDemo = () => {
    setStep(0)
    setIsRunning(false)
  }

  return (
    <div className="min-h-[90vh] p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My NPM Command Demo</h1>
          <p className="text-muted-foreground mt-2">
            See what happens when you run <code className="bg-muted px-1 py-0.5 rounded">npm run my-command</code>
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={resetDemo} disabled={isRunning || step === 0}>
            Reset Demo
          </Button>
          <Button onClick={runCommand} disabled={isRunning || step > 0}>
            Run Command
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        <Card className="p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Terminal Output</h2>
          </div>
          <CommandTerminal step={step} isRunning={isRunning} />
        </Card>

        <Card className="p-4 flex flex-col">
          <Tabs defaultValue="structure" className="flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Project Changes</h2>
              <TabsList>
                <TabsTrigger value="structure">Folder Structure</TabsTrigger>
                <TabsTrigger value="files">Created Files</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="structure" className="flex-1 mt-0">
              <FolderStructure step={step} />
            </TabsContent>

            <TabsContent value="files" className="flex-1 mt-0">
              <div className="h-full overflow-auto border rounded-md">
                {step >= 3 ? (
                  <Tabs defaultValue="config">
                    <TabsList className="w-full justify-start">
                      <TabsTrigger value="config">config.js</TabsTrigger>
                      <TabsTrigger value="index">index.js</TabsTrigger>
                      <TabsTrigger value="utils">utils.js</TabsTrigger>
                    </TabsList>
                    <TabsContent value="config" className="mt-2">
                      <pre className="p-4 text-sm bg-muted rounded-md overflow-auto">
                        {`// Configuration file
module.exports = {
  name: 'my-awesome-project',
  version: '1.0.0',
  settings: {
    enableFeatureA: true,
    enableFeatureB: false,
    timeout: 3000,
    retries: 3
  },
  paths: {
    src: './src',
    dist: './dist',
    assets: './assets'
  }
};`}
                      </pre>
                    </TabsContent>
                    <TabsContent value="index" className="mt-2">
                      <pre className="p-4 text-sm bg-muted rounded-md overflow-auto">
                        {`// Main entry point
const config = require('./config');
const { setupProject } = require('./utils');

console.log(\`Starting \${config.name} v\${config.version}\`);

async function init() {
  try {
    await setupProject(config);
    console.log('Project initialized successfully!');
  } catch (error) {
    console.error('Failed to initialize project:', error);
    process.exit(1);
  }
}

init();`}
                      </pre>
                    </TabsContent>
                    <TabsContent value="utils" className="mt-2">
                      <pre className="p-4 text-sm bg-muted rounded-md overflow-auto">
                        {`// Utility functions
const fs = require('fs');
const path = require('path');

function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(\`Created directory: \${dir}\`);
  }
}

async function setupProject(config) {
  // Create necessary directories
  Object.values(config.paths).forEach(ensureDirectoryExists);
  
  // Initialize project files
  // ... more setup code ...
  
  return true;
}

module.exports = {
  setupProject,
  ensureDirectoryExists
};`}
                      </pre>
                    </TabsContent>
                  </Tabs>
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Run the command to see created files
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">What This Command Does</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <h3 className="font-medium mb-2">1. Initializes Project</h3>
            <p className="text-sm text-muted-foreground">
              Creates the basic folder structure needed for your project, including src, dist, and assets directories.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="font-medium mb-2">2. Generates Config Files</h3>
            <p className="text-sm text-muted-foreground">
              Sets up configuration files with default settings that you can customize for your specific needs.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="font-medium mb-2">3. Installs Dependencies</h3>
            <p className="text-sm text-muted-foreground">
              Automatically installs all required dependencies based on the project type you've selected.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
