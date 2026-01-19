"use client";

import { type ComponentRenderProps } from "@json-render/react";

export function FeatureGrid({ element, children }: ComponentRenderProps) {
  const { columns, gap, title, subtitle } = element.props as {
    columns?: 2 | 3 | 4 | null;
    gap?: "sm" | "md" | "lg" | null;
    title?: string | null;
    subtitle?: string | null;
  };

  const gaps: Record<string, string> = {
    sm: "24px",
    md: "32px",
    lg: "48px",
  };

  return (
    <div>
      {(title || subtitle) && (
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          {title && (
            <h2 style={{ margin: 0, fontSize: 32, fontWeight: 700 }}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              style={{
                margin: "16px 0 0",
                fontSize: 18,
                color: "var(--muted)",
                maxWidth: 600,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns || 3}, 1fr)`,
          gap: gaps[gap || "md"],
        }}
      >
        {children}
      </div>
    </div>
  );
}
