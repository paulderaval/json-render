"use client";

import { type ComponentRenderProps } from "@json-render/react";
import {
  Info,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lightbulb,
} from "lucide-react";

const icons = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: XCircle,
  tip: Lightbulb,
};

const colors = {
  info: { bg: "#3b82f620", border: "#3b82f6", icon: "#3b82f6" },
  warning: { bg: "#f59e0b20", border: "#f59e0b", icon: "#f59e0b" },
  success: { bg: "#22c55e20", border: "#22c55e", icon: "#22c55e" },
  error: { bg: "#ef444420", border: "#ef4444", icon: "#ef4444" },
  tip: { bg: "#8b5cf620", border: "#8b5cf6", icon: "#8b5cf6" },
};

export function Callout({ element, children }: ComponentRenderProps) {
  const { type, title } = element.props as {
    type?: "info" | "warning" | "success" | "error" | "tip" | null;
    title?: string | null;
  };

  const variant = type || "info";
  const Icon = icons[variant];
  const color = colors[variant];

  return (
    <div
      style={{
        padding: 16,
        borderRadius: "var(--radius)",
        background: color.bg,
        borderLeft: `4px solid ${color.border}`,
      }}
    >
      <div style={{ display: "flex", gap: 12 }}>
        <Icon
          size={20}
          color={color.icon}
          style={{ flexShrink: 0, marginTop: 2 }}
        />
        <div style={{ flex: 1 }}>
          {title && (
            <div
              style={{
                fontWeight: 600,
                fontSize: 14,
                marginBottom: children ? 8 : 0,
              }}
            >
              {title}
            </div>
          )}
          {children && (
            <div style={{ fontSize: 14, lineHeight: 1.6 }}>{children}</div>
          )}
        </div>
      </div>
    </div>
  );
}
