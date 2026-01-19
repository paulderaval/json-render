"use client";

import { type ComponentRenderProps } from "@json-render/react";
import { useData } from "@json-render/react";
import { getByPath } from "@json-render/core";

export function Progress({ element }: ComponentRenderProps) {
  const { valuePath, value, max, label, showValue, variant, size } =
    element.props as {
      valuePath?: string | null;
      value?: number | null;
      max?: number | null;
      label?: string | null;
      showValue?: boolean | null;
      variant?: "default" | "success" | "warning" | "danger" | null;
      size?: "sm" | "md" | "lg" | null;
    };

  const { data } = useData();
  const resolvedValue = valuePath
    ? ((getByPath(data, valuePath) as number | undefined) ?? 0)
    : (value ?? 0);
  const maxValue = max ?? 100;
  const percentage = Math.min(
    Math.max((resolvedValue / maxValue) * 100, 0),
    100,
  );

  const colors: Record<string, string> = {
    default: "var(--foreground)",
    success: "#22c55e",
    warning: "#f59e0b",
    danger: "#ef4444",
  };

  const sizes: Record<string, number> = {
    sm: 4,
    md: 8,
    lg: 12,
  };

  const barHeight = sizes[size || "md"] ?? 8;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {(label || showValue) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
          }}
        >
          {label && <span style={{ color: "var(--muted)" }}>{label}</span>}
          {showValue && (
            <span style={{ fontWeight: 500 }}>
              {resolvedValue}/{maxValue}
            </span>
          )}
        </div>
      )}
      <div
        style={{
          width: "100%",
          height: barHeight,
          background: "var(--border)",
          borderRadius: barHeight / 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            background: colors[variant || "default"],
            borderRadius: barHeight / 2,
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}
