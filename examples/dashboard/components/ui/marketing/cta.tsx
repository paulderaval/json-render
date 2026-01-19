"use client";

import { type ComponentRenderProps } from "@json-render/react";

export function CTA({ element, onAction }: ComponentRenderProps) {
  const { title, subtitle, primaryAction, secondaryAction, background, align } =
    element.props as {
      title: string;
      subtitle?: string | null;
      primaryAction?: { label: string; action: string } | null;
      secondaryAction?: { label: string; action: string } | null;
      background?: "default" | "muted" | "accent" | null;
      align?: "left" | "center" | "right" | null;
    };

  const alignment = align || "center";
  const isAccent = background === "accent";

  return (
    <section
      style={{
        padding: "64px 24px",
        background:
          background === "accent"
            ? "var(--foreground)"
            : background === "muted"
              ? "var(--card)"
              : undefined,
        borderRadius: "var(--radius)",
        textAlign:
          alignment === "center"
            ? "center"
            : alignment === "right"
              ? "right"
              : "left",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: 32,
          fontWeight: 700,
          color: isAccent ? "var(--background)" : undefined,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            margin: "16px 0 0",
            fontSize: 18,
            color: isAccent ? "var(--background)" : "var(--muted)",
            opacity: isAccent ? 0.8 : 1,
            maxWidth: alignment === "center" ? 600 : undefined,
            marginLeft: alignment === "center" ? "auto" : undefined,
            marginRight: alignment === "center" ? "auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
      {(primaryAction || secondaryAction) && (
        <div
          style={{
            marginTop: 24,
            display: "flex",
            gap: 16,
            justifyContent:
              alignment === "center"
                ? "center"
                : alignment === "right"
                  ? "flex-end"
                  : "flex-start",
          }}
        >
          {primaryAction && (
            <button
              onClick={() => onAction?.({ name: primaryAction.action })}
              style={{
                padding: "12px 24px",
                fontSize: 16,
                fontWeight: 600,
                borderRadius: "var(--radius)",
                border: "none",
                background: isAccent
                  ? "var(--background)"
                  : "var(--foreground)",
                color: isAccent ? "var(--foreground)" : "var(--background)",
                cursor: "pointer",
              }}
            >
              {primaryAction.label}
            </button>
          )}
          {secondaryAction && (
            <button
              onClick={() => onAction?.({ name: secondaryAction.action })}
              style={{
                padding: "12px 24px",
                fontSize: 16,
                fontWeight: 600,
                borderRadius: "var(--radius)",
                border: isAccent
                  ? "1px solid var(--background)"
                  : "1px solid var(--border)",
                background: "transparent",
                color: isAccent ? "var(--background)" : "var(--foreground)",
                cursor: "pointer",
              }}
            >
              {secondaryAction.label}
            </button>
          )}
        </div>
      )}
    </section>
  );
}
