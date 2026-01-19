"use client";

import { type ComponentRenderProps } from "@json-render/react";

export function Hero({ element, children, onAction }: ComponentRenderProps) {
  const { title, subtitle, primaryAction, secondaryAction, align, background } =
    element.props as {
      title: string;
      subtitle?: string | null;
      primaryAction?: { label: string; action: string } | null;
      secondaryAction?: { label: string; action: string } | null;
      align?: "left" | "center" | "right" | null;
      background?: "default" | "muted" | "accent" | null;
    };

  const alignment = align || "center";
  const isAccent = background === "accent";

  const textAlign =
    alignment === "center"
      ? "center"
      : alignment === "right"
        ? "right"
        : "left";

  return (
    <section
      style={{
        padding: "80px 24px",
        background:
          background === "accent"
            ? "var(--foreground)"
            : background === "muted"
              ? "var(--card)"
              : undefined,
        textAlign,
      }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: alignment === "center" ? "0 auto" : undefined,
          marginLeft: alignment === "right" ? "auto" : undefined,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 48,
            fontWeight: 800,
            lineHeight: 1.1,
            color: isAccent ? "var(--background)" : undefined,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              margin: "24px 0 0",
              fontSize: 20,
              lineHeight: 1.6,
              color: isAccent ? "var(--background)" : "var(--muted)",
              opacity: isAccent ? 0.8 : 1,
            }}
          >
            {subtitle}
          </p>
        )}
        {(primaryAction || secondaryAction) && (
          <div
            style={{
              marginTop: 32,
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
        {children && <div style={{ marginTop: 48 }}>{children}</div>}
      </div>
    </section>
  );
}
