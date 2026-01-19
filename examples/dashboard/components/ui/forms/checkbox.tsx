"use client";

import { type ComponentRenderProps } from "@json-render/react";
import { useData } from "@json-render/react";
import { getByPath } from "@json-render/core";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

export function Checkbox({ element }: ComponentRenderProps) {
  const { label, bindPath, disabled, description } = element.props as {
    label: string;
    bindPath: string;
    disabled?: boolean | null;
    description?: string | null;
  };

  const { data, set } = useData();
  const checked = getByPath(data, bindPath) as boolean | undefined;

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
      <RadixCheckbox.Root
        checked={checked ?? false}
        onCheckedChange={(value) => set(bindPath, value === true)}
        disabled={disabled ?? false}
        style={{
          width: 20,
          height: 20,
          borderRadius: 4,
          border: "1px solid var(--border)",
          background: checked ? "var(--foreground)" : "var(--card)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
          flexShrink: 0,
          marginTop: 2,
        }}
      >
        <RadixCheckbox.Indicator>
          <Check size={14} color="var(--background)" strokeWidth={3} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
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
