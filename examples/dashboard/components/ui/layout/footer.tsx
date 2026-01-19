"use client";

import { type ComponentRenderProps } from "@json-render/react";

export function Footer({ element }: ComponentRenderProps) {
  const { columns, copyright, background } = element.props as {
    columns?: Array<{
      title: string;
      links: Array<{ label: string; href?: string }>;
    }> | null;
    copyright?: string | null;
    background?: "default" | "muted" | null;
  };

  return (
    <footer
      style={{
        padding: "48px 24px 24px",
        background: background === "muted" ? "var(--card)" : undefined,
        borderTop: "1px solid var(--border)",
      }}
    >
      {columns && columns.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(columns.length, 4)}, 1fr)`,
            gap: 48,
            marginBottom: 48,
          }}
        >
          {columns.map((col, i) => (
            <div key={i}>
              <h4
                style={{
                  margin: "0 0 16px",
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--muted)",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {col.links.map((link, j) => (
                  <li key={j} style={{ marginBottom: 8 }}>
                    <a
                      href={link.href || "#"}
                      style={{
                        color: "var(--foreground)",
                        textDecoration: "none",
                        fontSize: 14,
                        transition: "opacity 0.2s",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {copyright && (
        <div
          style={{
            paddingTop: 24,
            borderTop: "1px solid var(--border)",
            textAlign: "center",
            fontSize: 14,
            color: "var(--muted)",
          }}
        >
          {copyright}
        </div>
      )}
    </footer>
  );
}
