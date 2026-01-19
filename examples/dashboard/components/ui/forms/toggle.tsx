"use client";

import { type ComponentRenderProps } from "@json-render/react";
import { useData } from "@json-render/react";
import { getByPath } from "@json-render/core";
import * as Switch from "@radix-ui/react-switch";

export function Toggle({ element }: ComponentRenderProps) {
  const { label, bindPath, disabled, description, size } = element.props as {
    label: string;
    bindPath: string;
    disabled?: boolean | null;
    description?: string | null;
    size?: "sm" | "md" | "lg" | null;
  };

  const { data, set } = useData();
  const checked = getByPath(data, bindPath) as boolean | undefined;

  const sizes = {
    sm: { width: 36, height: 20, thumb: 16 },
    md: { width: 44, height: 24, thumb: 20 },
    lg: { width: 52, height: 28, thumb: 24 },
  } as const;

  const sizeKey = (size || "md") as keyof typeof sizes;
  const { width, height, thumb } = sizes[sizeKey];

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
      <Switch.Root
        checked={checked ?? false}
        onCheckedChange={(value) => set(bindPath, value)}
        disabled={disabled ?? false}
        style={{
          width,
          height,
          borderRadius: height / 2,
          background: checked ? "var(--foreground)" : "var(--border)",
          position: "relative",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
          flexShrink: 0,
          marginTop: 2,
          border: "none",
          padding: 0,
        }}
      >
        <Switch.Thumb
          style={{
            display: "block",
            width: thumb,
            height: thumb,
            borderRadius: "50%",
            background: "var(--background)",
            transition: "transform 0.2s",
            transform: `translateX(${checked ? width - thumb - 2 : 2}px)`,
            boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
          }}
        />
      </Switch.Root>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <label
          style={{
            fontSize: 14,
            fontWeight: 500,
            cursor: disabled ? "not-allowed" : "pointer",
          }}
        >
          {label}
        </label>
        {description && (
          <span style={{ fontSize: 12, color: "var(--muted)" }}>
            {description}
          </span>
        )}
      </div>
    </div>
  );
}
