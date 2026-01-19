"use client";

import { type ComponentRenderProps } from "@json-render/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeBlock({ element }: ComponentRenderProps) {
  const { code, language, showLineNumbers, title } = element.props as {
    code: string;
    language?: string | null;
    showLineNumbers?: boolean | null;
    title?: string | null;
  };

  return (
    <div
      style={{
        borderRadius: "var(--radius)",
        overflow: "hidden",
        border: "1px solid var(--border)",
      }}
    >
      {title && (
        <div
          style={{
            padding: "8px 16px",
            background: "#1e1e1e",
            borderBottom: "1px solid var(--border)",
            fontSize: 12,
            color: "#888",
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          }}
        >
          {title}
        </div>
      )}
      <SyntaxHighlighter
        language={language || "text"}
        style={oneDark}
        showLineNumbers={showLineNumbers ?? false}
        customStyle={{
          margin: 0,
          padding: 16,
          fontSize: 14,
          background: "#1e1e1e",
        }}
        codeTagProps={{
          style: {
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
