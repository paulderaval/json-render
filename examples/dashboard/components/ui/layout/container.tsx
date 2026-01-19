"use client";

import { type ComponentRenderProps } from "@json-render/react";

export function Container({ element, children }: ComponentRenderProps) {
  const { maxWidth, padding, center } = element.props as {
    maxWidth?: "sm" | "md" | "lg" | "xl" | "full" | null;
    padding?: "none" | "sm" | "md" | "lg" | null;
    center?: boolean | null;
  };

  const maxWidths: Record<string, string> = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    full: "100%",
  };

  const paddings: Record<string, string> = {
    none: "0",
    sm: "16px",
    md: "24px",
    lg: "48px",
  };

  return (
    <div
      style={{
        maxWidth: maxWidths[maxWidth || "lg"],
        width: "100%",
        marginLeft: center !== false ? "auto" : undefined,
        marginRight: center !== false ? "auto" : undefined,
        paddingLeft: paddings[padding || "md"],
        paddingRight: paddings[padding || "md"],
      }}
    >
      {children}
    </div>
  );
}
