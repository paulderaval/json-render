"use client";

import { type ComponentRenderProps } from "@json-render/react";
import { useData } from "@json-render/react";
import { getByPath } from "@json-render/core";
import * as LucideIcons from "lucide-react";

export function Stat({ element }: ComponentRenderProps) {
  const { label, valuePath, value, format, icon, helpText, trend, trendValue } =
    element.props as {
      label: string;
      valuePath?: string | null;
      value?: string | number | null;
      format?: "number" | "currency" | "percent" | null;
      icon?: string | null;
      helpText?: string | null;
      trend?: "up" | "down" | "neutral" | null;
      trendValue?: string | null;
    };

  const { data } = useData();
  const rawValue = valuePath ? getByPath(data, valuePath) : value;

  let displayValue = String(rawValue ?? "-");
  if (format === "currency" && typeof rawValue === "number") {
    displayValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rawValue);
  } else if (format === "percent" && typeof rawValue === "number") {
    displayValue = new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 1,
    }).format(rawValue);
  } else if (format === "number" && typeof rawValue === "number") {
    displayValue = new Intl.NumberFormat("en-US").format(rawValue);
  }

  const IconComponent = icon
    ? (
        LucideIcons as unknown as Record<
          string,
          React.ComponentType<{ size?: number; color?: string }>
        >
      )[icon]
    : null;

  return (
    <div style={{ display: "flex", gap: 16 }}>
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
          }}
        >
          <IconComponent size={24} color="var(--muted)" />
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontSize: 14, color: "var(--muted)" }}>{label}</span>
        <span style={{ fontSize: 28, fontWeight: 600 }}>{displayValue}</span>
        {(trend || trendValue) && (
          <span
            style={{
              fontSize: 14,
              color:
                trend === "up"
                  ? "#22c55e"
                  : trend === "down"
                    ? "#ef4444"
                    : "var(--muted)",
            }}
          >
            {trend === "up" ? "↑ " : trend === "down" ? "↓ " : ""}
            {trendValue}
          </span>
        )}
        {helpText && (
          <span style={{ fontSize: 12, color: "var(--muted)" }}>
            {helpText}
          </span>
        )}
      </div>
    </div>
  );
}
