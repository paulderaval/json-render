"use client";

import { type ComponentRenderProps } from "@json-render/react";
import { useData } from "@json-render/react";
import { getByPath } from "@json-render/core";

export function DataList({ element }: ComponentRenderProps) {
  const { items, dataPath, striped, divided } = element.props as {
    items?: Array<{ label: string; value: string; valuePath?: string }> | null;
    dataPath?: string | null;
    striped?: boolean | null;
    divided?: boolean | null;
  };

  const { data } = useData();

  let resolvedItems: Array<{ label: string; value: string | unknown }> = [];

  if (dataPath) {
    const pathData = getByPath(data, dataPath);
    if (pathData && typeof pathData === "object" && !Array.isArray(pathData)) {
      resolvedItems = Object.entries(pathData).map(([key, val]) => ({
        label: key,
        value: val,
      }));
    }
  } else if (items) {
    resolvedItems = items.map((item) => ({
      label: item.label,
      value: item.valuePath ? getByPath(data, item.valuePath) : item.value,
    }));
  }

  if (resolvedItems.length === 0) {
    return <div style={{ padding: 16, color: "var(--muted)" }}>No data</div>;
  }

  return (
    <dl style={{ margin: 0 }}>
      {resolvedItems.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 0",
            borderBottom:
              divided && i < resolvedItems.length - 1
                ? "1px solid var(--border)"
                : undefined,
            background: striped && i % 2 === 1 ? "var(--card)" : undefined,
          }}
        >
          <dt style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>
            {item.label}
          </dt>
          <dd style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>
            {String(item.value ?? "-")}
          </dd>
        </div>
      ))}
    </dl>
  );
}
