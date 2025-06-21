import { createContext, useContext, useEffect, useState } from "react";
import npm from "npm-stats-api";

const TypeContext = createContext();
export const TypeProvider = ({ children }) => {
  const [type, setType] = useState(true);
  const [version, setVersion] = useState("");
  const [downloads, setDownloads] = useState(0);
  const frontend = {
    name: "Frontend",
    description:
      "Build a fast and modern frontend application with React, Vite, and Tailwind CSS.",
    command: "npm create react-fast-app@latest",
    commandDescription: "Create a new React app with Vite and Tailwind CSS.",
    githubUrl: "https://github.com/satendra03/react-fast-app",
    npmUrl: "https://www.npmjs.com/package/create-react-fast-app",
  };
  const backend = {
    name: "Backend",
    description:
      "Build a fast and modern backend application with Node.js, Express, and MongoDB.",
    command: "npm init node-fast-server@latest",
    commandDescription: "Create a new Node server using Express with MongoDB.",
    githubUrl: "https://github.com/satendra03/node-fast-server",
    npmUrl: "https://www.npmjs.com/package/create-node-fast-server",
  };

  useEffect(() => {
    const PACKAGE_NAME = type
      ? "create-react-fast-app"
      : "create-node-fast-server";

    const NPM_DOWNLOAD_URL = `https://api.npmjs.org/downloads/point/last-month/${PACKAGE_NAME}`;
    const NPM_VERSION_URL = `https://registry.npmjs.org/${PACKAGE_NAME}/latest`;

    const fetchData = async () => {
      try {
        const downloadsRes = await fetch(NPM_DOWNLOAD_URL);
        const versionRes = await fetch(NPM_VERSION_URL);
        const downloadsData = await downloadsRes.json();
        const versionData = await versionRes.json();

        const today = new Date(Date.now());
        const formatted = today.toISOString().split("T")[0];

        const npmStats = await npm.stat(PACKAGE_NAME, "2025-01-01", formatted);
        setDownloads(npmStats.body.downloads);

        setVersion(versionData.version);
      } catch (error) {
        console.error("Error fetching NPM data:", error);
      }
    };

    // delay to simulate smoother UI
    const timeout = setTimeout(() => {
      fetchData();
    }, 100);

    return () => clearTimeout(timeout);
  }, [type]);

  const data = type ? frontend : backend;
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    navigator.clipboard.writeText(data.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TypeContext.Provider
      value={{
        type,
        setType,
        data,
        handleCopy,
        copied,
        setCopied,
        version,
        downloads,
      }}
    >
      {children}
    </TypeContext.Provider>
  );
};

export const useType = () => {
  const context = useContext(TypeContext);
  if (!context) {
    throw new Error("useType must be used within a TypeProvider");
  }
  return context;
};
