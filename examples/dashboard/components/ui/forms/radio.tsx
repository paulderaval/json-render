"use client";

import { type ComponentRenderProps } from "@json-render/react";
import { useData } from "@json-render/react";
import { getByPath } from "@json-render/core";
import * as RadioGroup from "@radix-ui/react-radio-group";

export function Radio({ element }: ComponentRenderProps) {
  const { label, bindPath, options, disabled, direction } = element.props as {
    label?: string | null;
    bindPath: string;
    options: Array<{ value: string; label: string; description?: string }>;
    disabled?: boolean | null;
    direction?: "horizontal" | "vertical" | null;
  };

  const { data, set } = useData();
  const value = getByPath(data, bindPath) as string | undefined;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {label && (
        <label style={{ fontSize: 14, fontWeight: 500 }}>{label}</label>
      )}
      <RadioGroup.Root
        value={value ?? ""}
        onValueChange={(v) => set(bindPath, v)}
        disabled={disabled ?? false}
        style={{
          display: "flex",
          flexDirection: direction === "horizontal" ? "row" : "column",
          gap: direction === "horizontal" ? 16 : 8,
        }}
      >
        {options.map((option) => (
          <div
            key={option.value}
            style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
          >
            <RadioGroup.Item
              value={option.value}
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: "2px solid var(--border)",
                background: "var(--card)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.5 : 1,
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <RadioGroup.Indicator
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "var(--foreground)",
                }}
              />
            </RadioGroup.Item>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <label
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: disabled ? "not-allowed" : "pointer",
                }}
              >
                {option.label}
              </label>
              {option.description && (
                <span style={{ fontSize: 12, color: "var(--muted)" }}>
                  {option.description}
                </span>
              )}
            </div>
          </div>
        ))}
      </RadioGroup.Root>
    </div>
  );
}
