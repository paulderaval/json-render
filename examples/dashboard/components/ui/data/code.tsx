"use client";

import { type ComponentRenderProps } from "@json-render/react";

export function Code({ element }: ComponentRenderProps) {
  const { content, variant } = element.props as {
    content: string;
    variant?: "default" | "subtle" | null;
  };

  return (
    <code
      style={{
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontSize: "0.875em",
        padding: "2px 6px",
        borderRadius: "var(--radius)",
        background: variant === "subtle" ? "transparent" : "var(--card)",
        border: variant === "subtle" ? "none" : "1px solid var(--border)",
        color: "var(--foreground)",
      }}
    >
      {content}
    </code>
  );
}
