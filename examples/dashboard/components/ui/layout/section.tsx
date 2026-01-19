"use client";

import { type ComponentRenderProps } from "@json-render/react";

export function Section({ element, children }: ComponentRenderProps) {
  const { title, subtitle, background, padding } = element.props as {
    title?: string | null;
    subtitle?: string | null;
    background?: "default" | "muted" | "accent" | null;
    padding?: "sm" | "md" | "lg" | "xl" | null;
  };

  const backgrounds: Record<string, string> = {
    default: "transparent",
    muted: "var(--card)",
    accent: "var(--foreground)",
  };

  const paddings: Record<string, string> = {
    sm: "24px 0",
    md: "48px 0",
    lg: "64px 0",
    xl: "96px 0",
  };

  const isAccent = background === "accent";

  return (
    <section
      style={{
        background: backgrounds[background || "default"],
        padding: paddings[padding || "md"],
        color: isAccent ? "var(--background)" : undefined,
      }}
    >
      {(title || subtitle) && (
        <div style={{ marginBottom: 32 }}>
          {title && (
            <h2
              style={{
                margin: 0,
                fontSize: 28,
                fontWeight: 700,
                color: isAccent ? "var(--background)" : undefined,
              }}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              style={{
                margin: "8px 0 0",
                fontSize: 16,
                color: isAccent ? "var(--background)" : "var(--muted)",
                opacity: isAccent ? 0.8 : 1,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
