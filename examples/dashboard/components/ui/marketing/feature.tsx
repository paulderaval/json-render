"use client";

import { type ComponentRenderProps } from "@json-render/react";
import * as LucideIcons from "lucide-react";

export function Feature({ element }: ComponentRenderProps) {
  const { title, description, icon, align } = element.props as {
    title: string;
    description?: string | null;
    icon?: string | null;
    align?: "left" | "center" | null;
  };

  const alignment = align || "left";
  const IconComponent = icon
    ? (
        LucideIcons as unknown as Record<
          string,
          React.ComponentType<{ size?: number; color?: string }>
        >
      )[icon]
    : null;

  return (
    <div
      style={{
        textAlign: alignment === "center" ? "center" : "left",
      }}
    >
      {IconComponent && (
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "var(--radius)",
            background: "var(--card)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            marginLeft: alignment === "center" ? "auto" : undefined,
            marginRight: alignment === "center" ? "auto" : undefined,
          }}
        >
          <IconComponent size={24} color="var(--foreground)" />
        </div>
      )}
      <h3
        style={{
          margin: 0,
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        {title}
      </h3>
      {description && (
        <p
          style={{
            margin: "8px 0 0",
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--muted)",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
