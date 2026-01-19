"use client";

import { type ComponentRenderProps } from "@json-render/react";

export function Navbar({ element, onAction }: ComponentRenderProps) {
  const { logo, links, sticky } = element.props as {
    logo?: { text?: string; src?: string } | null;
    links?: Array<{ label: string; href?: string; action?: string }> | null;
    sticky?: boolean | null;
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        background: "var(--card)",
        borderBottom: "1px solid var(--border)",
        position: sticky ? "sticky" : undefined,
        top: sticky ? 0 : undefined,
        zIndex: sticky ? 100 : undefined,
      }}
    >
      {logo && (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {logo.src && (
            <img
              src={logo.src}
              alt={logo.text || "Logo"}
              style={{ height: 32, width: "auto" }}
            />
          )}
          {logo.text && (
            <span style={{ fontSize: 18, fontWeight: 700 }}>{logo.text}</span>
          )}
        </div>
      )}
      {links && links.length > 0 && (
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href || "#"}
              onClick={(e) => {
                if (link.action) {
                  e.preventDefault();
                  onAction?.({ name: link.action });
                }
              }}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
