import React from "react";

const CreditBox = () => {
  const credit = `
╭─────────────────────────────────────────────╮
│                                             │
│  ✨ Created with ❤️ by Satendra Parteti    │
│  🔗 GitHub https://github.com/satendra03   │
│                                             │
╰─────────────────────────────────────────────╯
`;

  return (
    <pre
      style={{
        fontFamily: "monospace",
        color: "#9cdcfe",
        whiteSpace: "pre-wrap",
        userSelect: "text",
        maxWidth: "fit-content",
      }}
    >
      {credit}
    </pre>
  );
};

export default CreditBox;
