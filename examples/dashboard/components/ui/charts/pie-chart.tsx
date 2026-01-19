"use client";

import { type ComponentRenderProps } from "@json-render/react";
import { useData } from "@json-render/react";
import { getByPath } from "@json-render/core";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
  "#06b6d4",
  "#84cc16",
];

export function PieChart({ element }: ComponentRenderProps) {
  const { dataPath, title, height, donut, showLabels, nameKey, valueKey } =
    element.props as {
      dataPath: string;
      title?: string | null;
      height?: number | null;
      donut?: boolean | null;
      showLabels?: boolean | null;
      nameKey?: string | null;
      valueKey?: string | null;
    };

  const { data } = useData();
  const chartData = getByPath(data, dataPath) as
    | Array<Record<string, unknown>>
    | undefined;

  if (!chartData || !Array.isArray(chartData) || chartData.length === 0) {
    return <div style={{ padding: 20, color: "var(--muted)" }}>No data</div>;
  }

  const nKey = nameKey || "label";
  const vKey = valueKey || "value";

  return (
    <div>
      {title && (
        <h4 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 600 }}>
          {title}
        </h4>
      )}
      <ResponsiveContainer width="100%" height={height || 300}>
        <RechartsPieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={donut ? "50%" : 0}
            outerRadius="80%"
            dataKey={vKey}
            nameKey={nKey}
            label={showLabels !== false}
            labelLine={showLabels !== false}
          >
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
            }}
          />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}
