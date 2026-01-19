"use client";

import { type ComponentRenderProps } from "@json-render/react";
import { useData, useFieldValidation } from "@json-render/react";
import { getByPath } from "@json-render/core";

export function Textarea({ element }: ComponentRenderProps) {
  const {
    label,
    bindPath,
    placeholder,
    rows,
    resize,
    disabled,
    checks,
    validateOn,
  } = element.props as {
    label?: string | null;
    bindPath: string;
    placeholder?: string | null;
    rows?: number | null;
    resize?: "none" | "vertical" | "horizontal" | "both" | null;
    disabled?: boolean | null;
    checks?: Array<{ fn: string; message: string }> | null;
    validateOn?: string | null;
  };

  const { data, set } = useData();
  const value = getByPath(data, bindPath) as string | undefined;
  const { errors, validate, touch } = useFieldValidation(bindPath, {
    checks: checks ?? undefined,
    validateOn: (validateOn as "change" | "blur" | "submit") ?? "blur",
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {label && (
        <label style={{ fontSize: 14, fontWeight: 500 }}>{label}</label>
      )}
      <textarea
        value={value ?? ""}
        onChange={(e) => {
          set(bindPath, e.target.value);
          if (validateOn === "change") validate();
        }}
        onBlur={() => {
          touch();
          if (validateOn === "blur" || !validateOn) validate();
        }}
        placeholder={placeholder ?? ""}
        rows={rows ?? 4}
        disabled={disabled ?? false}
        style={{
          padding: "8px 12px",
          borderRadius: "var(--radius)",
          border:
            errors.length > 0 ? "1px solid #ef4444" : "1px solid var(--border)",
          background: "var(--card)",
          color: "var(--foreground)",
          fontSize: 16,
          fontFamily: "inherit",
          outline: "none",
          resize: resize || "vertical",
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? "not-allowed" : undefined,
        }}
      />
      {errors.map((error, i) => (
        <span key={i} style={{ fontSize: 12, color: "#ef4444" }}>
          {error}
        </span>
      ))}
    </div>
  );
}
